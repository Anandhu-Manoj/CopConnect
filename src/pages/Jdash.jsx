import React, { useEffect, useRef } from "react";
import Logo from "../assets/sideLogo.png";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import justice from "../assets/justice.mp4";
import {
  acceptingLeaves,
  acceptingLocalService,
  AdddPoliceOfficer,
  assignCasses,
  deleteOfficers,
  deleteServices,
  dismissedCasses,
  getAllLeaves,
  GetallOfficers,
  getPoliceServices,
  getServices,
  onAcceptingNotification,
  onrejectingpoliceServ,
  onUpdateOfficer,
  rejectingLeaves,
} from "../Services/AllApis";
import { toast } from "react-toastify";

const Jdash = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [popshow, setPopShow] = useState(false);
  const [poptarget, PopsetTarget] = useState(null);
  const popoverRef = useRef(null);

  const handlePopClick = (event) => {
    setPopShow(!popshow);
    PopsetTarget(event.target);
  };

  const [revshow, setRevShow] = useState(false);

  const handleRevClose = () => setRevShow(false);
  const handleRevShow = () => setRevShow(true);

  //add officer modal
  const [render, setRender] = useState("");

  const [officerData, setofficerData] = useState({
    role: "",
    email: "",
    password: "",
    username: "",

    fathersname: "",

    batchNo: "",

    number: "",

    designation: "",
    circleofduty: "",
    serviceperiod: "",
  });

  //adding officer button

  const onAddOfficer = async () => {
    const Header = {
      Authorization: `beares ${sessionStorage.getItem("token")}`,
    };

    try {
      const apiResponse = await AdddPoliceOfficer(officerData, Header);
      setRender(apiResponse);
      if (apiResponse.status == 201) {
        alert("officer created");
        handleOfClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //getting the added officers
  const[SearchCircle,setSearchCircle]=useState("")
  
  const [officerTable, setOfficerTable] = useState([]);

  const getOfficer = async () => {
    const Header = {
      Authorization: `nearer ${sessionStorage.getItem("token")}`,
    };
    try {
      const apiresp = await GetallOfficers(Header,SearchCircle);
      if (apiresp.status == 200) {
        setOfficerTable(apiresp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOfficer();
  }, [render,SearchCircle]);

  const [oshow, setOShow] = useState(false);

  const handleOfClose = () => setOShow(false);
  const handleOfShow = () => setOShow(true);

  //ondeleteOfficer

  const onDelete = async (id) => {
    try {
      const Header = {
        Authorization: `beares ${sessionStorage.getItem("token")}`,
      };
      const apiResp = await deleteOfficers(id, Header);

      if (apiResp.status === 200) {
        setRender(apiResp);

        alert("officer deleted");
      } else {
        alert("try again later");
      }
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

  //getting services

  const [serviceData, setServiceData] = useState([]);

  const getAllServices = async () => {
    const Header = {
      Authorization: `beares ${sessionStorage.getItem("token")}`,
    };
    try {
      const ApiResponse = await getServices(Header);
      setServiceData(ApiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllServices();
  }, [render]);

  //delete services
  const RejectService = async (data) => {
    try {
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };

      const Apiresponse = await deleteServices(data._id, data, Header);
      if (Apiresponse.status == 200) {
        toast.success("ServiceRejected");
        setRender(Apiresponse);
      }
    } catch (error) {
      toast.error("error deleting data", error);
    }
  };
  // delete Complaint
  const onCaseDissmissal = async (data) => {
    const Header = {
      Authorization: `bearer ${sessionStorage.getItem("token")}`,
    };
    const payLoad = {
      serviceId: data._id,
      userId: data.userId,
    };

    try {
      const ApiResp = await dismissedCasses(payLoad, Header);
      if (ApiResp.status == 200) {
        console.log(ApiResp);
        setRender("cleared");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //getAllLeaves
  const [leaveData, setLeaveData] = useState([]);

  const allLeaves = async () => {
    try {
      const reqHeader = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };
      const apiResponse = await getAllLeaves(reqHeader);
      setLeaveData(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allLeaves();
  }, [render]);
  //policeServiceData

  const [policeService, setPoliceServices] = useState([]);

  const policeServiceData = async () => {
    try {
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };
      const apiResponse = await getPoliceServices(Header);
      setPoliceServices(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    policeServiceData();
  }, [render]);

  //accepting services

  const onAcceptService = async (data) => {
    const Header = {
      Authorization: `bearer ${sessionStorage.getItem("token")}`,
    };
    try {
      const payload = {
        serviceId: data._id,
        userId: data.userId,
        serviceType: data.serviceType,
        date: data.Date,
      };
      const serverResp = await onAcceptingNotification(payload, Header);
      if (serverResp.status == 200) {
        setRender("clear");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Deleting services

  const onRejectService = async (data) => {
    const Header = {
      Authorization: `bearer ${sessionStorage.getItem("token")}`,
    };
    try {
      const payload = {
        serviceId: data._id,
        userId: data.userId,
        serviceType: data.serviceType,
      };
      const serverResp = await onrejectingpoliceServ(payload, Header);

      setRender(serverResp);
    } catch (error) {
      console.log(error);
    }
  };

  //edit officer
  const [oEditshow, setOWditShow] = useState(false);
  const [officerDetail, setOfficerDetail] = useState({});

  const handleOfEditClose = () => setOWditShow(false);

  const handleOEditfShow = (data) => {
    setOWditShow(true);
    setOfficerDetail(data);
  };

  const onEditOfficer = async () => {
    try {
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };

      const serverResponse = await onUpdateOfficer(
        officerDetail._id,
        officerDetail,
        Header
      );
      console.log(serverResponse);
      if (serverResponse.status == 200) {
        toast.success("updated succesfully");
        handleOfEditClose();
        setRender(serverResponse);
      } else {
        toast.error("try again later");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [caseAssigment, setCaseAssigment] = useState("");

  const assignCase = async (data) => {
    if (caseAssigment) {
      const PayLoad = { serviceId: data._id, link: data.complaint };
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };

      try {
        const ApiResponse = await assignCasses(caseAssigment, PayLoad, Header);
        if (ApiResponse.status == 200) {
          toast.success("casses addigned successfully");
        }
        setRender("assigned");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please assign a officer");
    }
  };

  //onaccepting local request

  const onLocalServiceAccept = async (data) => {
    try {
      const payload = { serviceId: data._id, userId: data.userId };
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };
      const ApiResponse = await acceptingLocalService(payload, Header);
      if (ApiResponse.status == 200) {
        setRender(ApiResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //onAcceptingLeaves

  const onAccepting = async (data) => {
    console.log(data);
    const Header = {
      Authorization: `token ${sessionStorage.getItem("token")}`,
    };

    try {
      const ApiResponse = await acceptingLeaves(data, Header);
      setRender(ApiResponse);
    } catch (error) {
      console.log(error);
    }
  };

  //onDeletingLeaves
  const onDeleting = async (data) => {
    const Header = {
      Authorization: `token ${sessionStorage.getItem("token")}`,
    };

    try {
      const ApiResponse = await rejectingLeaves(data, Header);
      setRender(ApiResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const COLORS = {
    darkBlue: "#0a2540",
    primary: "#1976d2",
    primaryDark: "#0d47a1",
    accent: "#3f51b5",
    accentLight: "#7986cb",
    light: "#ffffff",
    lightBlue: "#e3f2fd",
    gradientLight: "rgba(25,118,210,0.6)", // changed from 0.25
    gradientDark: "rgba(1, 37, 91, 0.8)", // changed from 0.35
  };

  const Styles = {
    marquee: {
      background: `linear-gradient(90deg, ${COLORS.darkBlue} 0%, ${COLORS.gradientLight} 100%)`,
      border: "1px solid rgba(255,255,255,0.18)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      color: COLORS.light,
      fontWeight: 600,
      borderRadius: "12px",
      padding: "16px 0",
      margin: "24px 0",
      textAlign: "center",
      letterSpacing: "0.5px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden "
      style={{ height: "100%", backgroundColor: "#0a2540" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          minWidth: "100vw",
          minHeight: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <source src={justice} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* header  */}
      <div
        className="overflow-hidden"
        style={{
          minHeight: "100vh",

          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #0a2540, #0d47a1)",
              padding: "0 32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100px",
            }}
          >
            {/* <img className="ms-5" height="80px" src={Logo} alt="Main Logo" />
            <img
              className="img-fluid"
              style={{ height: "90px" }}
              src={sideLogo}
              alt="Side Logo"
            /> */}
          </div>

          <header
            style={{
              height: "80px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 32px",
              background: "linear-gradient(135deg, #0a2540, #0d47a1)",
              backdropFilter: "blur(12px)",
              position: "sticky",
              top: 0,
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <h1
              style={{ fontSize: "24px", fontWeight: "bold", color: "#ffffff" }}
            >
              CopConnect <i className="fa-solid fa-bars-staggered"></i>
            </h1>

            <div ref={popoverRef}>
              <button
                onClick={handlePopClick}
                className="btn"
                style={{
                  fontSize: "20px",
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                <i className="fa-solid fa-bell"></i>
              </button>

              <Overlay
                show={popshow}
                target={poptarget}
                placement="bottom"
                container={popoverRef.current}
                containerPadding={20}
              >
                <Popover
                  style={{
                    backdropFilter: "blur(10px)",
                    border: "1px solid #ccc",
                  }}
                >
                  <Popover.Header as="h3">Notifications</Popover.Header>
                  <Popover.Body style={{ height: "300px", width: "300px" }}>
                    <strong>No notifications</strong> — Check back later.
                  </Popover.Body>
                  <button
                    style={{
                      backgroundColor: "#1976d2",
                      color: "#ffffff",
                      borderRadius: "8px",
                      width: "100%",
                      padding: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    Clear All
                  </button>
                </Popover>
              </Overlay>
            </div>

            <div className="text-center ">
              <h2
                className="fs-2 fw-bolder"
                style={{
                  color: "#ffffff",

                  fontSize: "20px",
                }}
              >
                ADMINISTRATION PORTAL{" "}
                <i className="fa-solid fa-scale-balanced"></i>
              </h2>
            </div>

            <nav>
              <ul
                style={{
                  display: "flex",
                  gap: "16px",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  fontSize: "16px",
                }}
              >
                <li>
                  {/* <button
                    className="btn"
                    style={{
                      backgroundColor: "#1976d2",
                      color: "#ffffff",
                      borderRadius: "10px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    Punch In <i className="fa-solid fa-house"></i>
                  </button> */}
                </li>

                <li>
                  <Link to="/login">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#1976d2",
                        color: "#ffffff",
                        borderRadius: "10px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                      }}
                    >
                      Log Out <i className="fa-solid fa-door-open"></i>
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/cr">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#1976d2",
                        color: "#ffffff",
                        borderRadius: "10px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                      }}
                    >
                      Crime Records{" "}
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <div style={Styles.marquee}>
            <span
              style={{
                display: "inline-block",
                animation: "scroll-left 20s linear infinite",
                minWidth: "100%",
              }}
            >
              Welcome to CopConnect - Your Digital Police Service Portal | File
              Complaints | Book Appointments | Manage Criminal Data | Secure &
              Transparent Policing
            </span>
          </div>

          {/* CSS for marquee animation */}
          <style>
            {`
              @keyframes scroll-left {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
              @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(25,118,210,0.4); }
                70% { box-shadow: 0 0 0 12px rgba(25,118,210,0); }
                100% { box-shadow: 0 0 0 0 rgba(25,118,210,0); }
              }
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
              }
            `}
          </style>
        </div>

        <div>
          <div className="row ms-5 mb-5">
            <div
              className=" d-flex align-items-center justify-content-center col-2"
              style={{
                height: "250px",
                width: "450px",
                // position: "absolute",
                // top: "250px",
                background: "rgba(255, 255, 255, 0.15)",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  height: "200px",
                  width: "200px",
                  position: "relative",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src="https://img.freepik.com/premium-vector/supreme-court-with-judges-illustration_7737-1699.jpg"
                  alt=""
                />
              </div>
              <h3
                className="mb-5 fw-bold fs-2 ms-5  "
                style={{ color: " #1976d2" }}
              >
                WELCOME
              </h3>
              <button
                onClick={handleShow}
                className="btn text-white"
                style={{
                  position: "absolute",
                  left: "90px",
                  top: "390px",
                  backgroundColor: "#0d47a1 ",
                }}
              >
                service requests <i class="fa-solid fa-server"></i>
              </button>

              <Modal centered size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="ms-5">
                    SERVICE REQUESTS <i class="fa-solid fa-server"></i>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="table-responsive me-2">
                    {" "}
                    <table
                      className=" table-bordered text-center ms-3 me-5 mb-5"
                      style={{
                        backgroundColor: "#1976d2",
                        borderColor: "#3f51b5 ",
                        overflow: "hidden",

                        borderCollapse: "collapse",
                      }}
                    >
                      <thead
                        className="rounded-3 mb-4"
                        style={{
                          backgroundColor: "#3f51b5 ",
                          color: "white",
                          fontSize: "18px",
                          textTransform: "uppercase",
                        }}
                      >
                        <tr>
                          <th style={{ padding: "10px" }}>Civilian Name</th>
                          <th style={{ padding: "10px" }}>
                            Date of Submission
                          </th>
                          <th style={{ padding: "10px" }}>Requested service</th>
                          <th style={{ padding: "10px" }}>Civilian number</th>
                          <th style={{ padding: "10px" }}>Decision</th>
                        </tr>
                      </thead>
                      <tbody>
                        {serviceData.length > 0
                          ? serviceData
                              .filter((a) => a.serviceType == "requestservice")
                              .map((data) => (
                                <tr
                                  style={{
                                    backgroundColor: "#fff",
                                    fontSize: "16px",
                                  }}
                                >
                                  <td style={{ padding: "5px" }}>
                                    {data.name}
                                  </td>
                                  <td style={{ padding: "5px" }}>
                                    {new Date(data.Date).toLocaleDateString(
                                      "en-IN"
                                    )}
                                  </td>
                                  <td style={{ padding: "5px" }}>
                                    {data.description}{" "}
                                  </td>

                                  <td style={{ padding: "5px" }}>
                                    {data.number}
                                  </td>
                                  <td style={{ padding: "5px" }}>
                                    <button
                                      onClick={() => onLocalServiceAccept(data)}
                                      className="btn btn-success"
                                      style={{ marginBottom: "2px" }}
                                    >
                                      Accept<i class="fa-solid fa-check"></i>
                                    </button>{" "}
                                    <br />
                                    <button
                                      onClick={() => RejectService(data)}
                                      style={{ marginRight: "2px" }}
                                      className="btn btn-danger"
                                    >
                                      Reject{" "}
                                      <i className="fa-solid fa-square-xmark"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))
                          : ""}
                      </tbody>
                    </table>
                    <table
                      className=" table-bordered text-center ms-3 me-5 mb-5"
                      style={{
                        backgroundColor: "#d9d9d9",
                        borderColor: "#3f51b5 ",
                        overflow: "hidden",

                        borderCollapse: "collapse",
                      }}
                    >
                      <thead
                        className="rounded-3 mb-4"
                        style={{
                          backgroundColor: "#3f51b5 ",
                          color: "white",
                          fontSize: "18px",
                          textTransform: "uppercase",
                        }}
                      >
                        <tr>
                          <th style={{ padding: "10px" }}>Officer Name</th>
                          <th style={{ padding: "10px" }}>
                            Date of Submission
                          </th>
                          <th style={{ padding: "10px" }}>Requested service</th>
                          <th style={{ padding: "10px" }}>Officer number</th>
                          <th style={{ padding: "10px" }}>Decision</th>
                        </tr>
                      </thead>
                      <tbody>
                        {policeService?.length > 0
                          ? policeService?.map((data) => (
                              <tr
                                style={{
                                  backgroundColor: "#fff",
                                  fontSize: "16px",
                                }}
                              >
                                <td style={{ padding: "5px" }}>{data.name}</td>
                                <td style={{ padding: "5px" }}>{data.Date}</td>
                                <td style={{ padding: "5px" }}>
                                  {data.serviceType}
                                </td>
                                <td style={{ padding: "5px" }}>
                                  {data.number}
                                </td>
                                <td style={{ padding: "5px" }}>
                                  <button
                                    onClick={() => onAcceptService(data)}
                                    className="btn btn-success"
                                    style={{ marginBottom: "2px" }}
                                  >
                                    Accepted<i class="fa-solid fa-check"></i>
                                  </button>{" "}
                                  <br />
                                  <button
                                    onClick={() => onRejectService(data)}
                                    style={{ marginRight: "2px" }}
                                    className="btn btn-danger"
                                  >
                                    Reject{" "}
                                    <i className="fa-solid fa-square-xmark"></i>
                                  </button>
                                </td>
                              </tr>
                            ))
                          : ""}
                      </tbody>
                    </table>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="col-8 table-responsive me-2">
              {" "}
              <h2 className="text-center fw-bold" style={{ color: "#e3f2fd" }}>
                PETITIONS
              </h2>
              <table
                className=" table-bordered text-center ms-3 me-5"
                style={{
                  backgroundColor: "#d9d9d9",
                  borderColor: "#d9d9d9",
                  overflow: "hidden",

                  borderCollapse: "collapse",
                }}
              >
                <thead
                  className="rounded-3 mb-4"
                  style={{
                    backgroundColor: "#0d47a1",
                    color: "white",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  <tr>
                    <th style={{ padding: "10px" }}>Date of Submission</th>
                    <th style={{ padding: "10px" }}>petitioner name</th>
                    <th style={{ padding: "10px" }}>Details</th>
                    <th style={{ padding: "10px" }}>Officer Assigned</th>
                    <th style={{ padding: "10px" }}>Decision</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceData
                    .filter((a) => a.serviceType == "complaints")
                    .map((data, index) => (
                      <tr
                        key={index}
                        style={{ backgroundColor: "#fff", fontSize: "16px" }}
                      >
                        <td style={{ padding: "10px" }}>
                          {new Date(data.Date).toLocaleDateString("en-IN")}
                        </td>
                        <td style={{ padding: "10px" }}>{data.name}</td>
                        <td style={{ padding: "10px" }}>
                          {/* <button
                            style={{ marginRight: "5px" }}
                            className="btn btn-danger"
                          >
                            Reject <i className="fa-solid fa-square-xmark"></i>
                          </button> */}
                          <button
                            onClick={handleRevShow}
                            className="btn btn-primary mt-2"
                          >
                            Review <i className="fa-solid fa-eye"></i>
                          </button>
                        </td>

                        <Modal
                          centered
                          show={revshow}
                          onHide={handleRevClose}
                          size="xl"
                        >
                          <Modal.Header
                            style={{
                              background:
                                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                            }}
                            closeButton
                          >
                            <Modal.Title className="ms-5">
                              Review Complaint{" "}
                              <i class="fa-solid fa-pen-to-square fw-bold"></i>
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body
                            style={{
                              background:
                                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                              height: "600px",
                            }}
                          >
                            <iframe
                              style={{
                                height: "600px",
                                width: "100%",
                              }}
                              width="100%"
                              height="100%"
                              className="overflow-hidden img-fluid"
                              src={
                                data.complaint
                                  ? `http://localhost:3000/complaints/${data.complaint}`
                                  : "https://static.vecteezy.com/system/resources/previews/025/674/476/non_2x/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-empty-state-ui-infographic-icon-vector.jpg"
                              }
                              frameborder="0"
                            ></iframe>
                          </Modal.Body>
                          <Modal.Footer
                            style={{
                              background:
                                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                            }}
                          >
                            <Button
                              variant="secondary"
                              onClick={handleRevClose}
                            >
                              Close
                            </Button>
                            <Button variant="primary" onClick={handleRevClose}>
                              Submit
                            </Button>
                          </Modal.Footer>
                        </Modal>

                        <td style={{ padding: "10px" }}>
                          <select
                            className="form-control"
                            defaultValue={""}
                            onChange={(e) => setCaseAssigment(e.target.value)}
                          >
                            <option value="" disabled>
                              Assign to officers
                            </option>

                            {officerTable.map((a, index) => (
                              <option key={index} value={a._id}>
                                {a.username}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td style={{ padding: "10px" }}>
                          <button
                            onClick={() => assignCase(data)}
                            className="btn btn-success"
                            style={{ marginBottom: "5px" }}
                          >
                            Assign Case <i class="fa-solid fa-check"></i>
                          </button>{" "}
                          <br />
                          <button
                            onClick={() => onCaseDissmissal(data)}
                            className="btn btn-warning p-2"
                          >
                            case dismmised{" "}
                            <i className="fa-solid fa-timeline"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <section className="container mt-5">
            <div className="text-center">
              <h2
                className="fw-bold text-white p-3 rounded-3"
                style={{ backgroundColor: "#0d47a1" }}
              >
                OFFICERS RECORDS
              </h2>{" "}
              <button className="btn btn-light shadow " onClick={handleOfShow}>
                ADD OFFICERS
              </button>
            </div>
            <Modal centered size="lg" show={oshow} onHide={handleOfClose}>
              <Modal.Header
                closeButton
                style={{
                  background:
                    "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                }}
              >
                <Modal.Title>
                  Add Officers <i className="fa-solid fa-shield"></i>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                style={{
                  background:
                    "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                }}
              >
                <input
                  onChange={(e) => {
                    setofficerData({
                      ...officerData,
                      username: e.target.value,
                    });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Enter Officers name"
                />
                <input
                  onChange={(e) => {
                    setofficerData({
                      ...officerData,
                      fathersname: e.target.value,
                    });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Enter Officers fathers name"
                />
                <input
                  onChange={(e) => {
                    setofficerData({ ...officerData, batchNo: e.target.value });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="number"
                  placeholder="Enter  Officers Batch number"
                />
                <input
                  onChange={(e) => {
                    setofficerData({ ...officerData, email: e.target.value });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="email"
                  placeholder="Enter  Officers email"
                />
                <input
                  onChange={(e) => {
                    setofficerData({
                      ...officerData,
                      password: e.target.value,
                    });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Enter  Officers password"
                />
                <input
                  onChange={(e) => {
                    setofficerData({ ...officerData, number: e.target.value });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Enter  Officers contact number"
                />
                <input
                  onChange={(e) => {
                    setofficerData({
                      ...officerData,
                      designation: e.target.value,
                    });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Enter Designation"
                />
                <input
                  onChange={(e) => {
                    setofficerData({
                      ...officerData,
                      circleofduty: e.target.value,
                    });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Enter assigned circle ofduty"
                />
                <input
                  onChange={(e) => {
                    setofficerData({
                      ...officerData,
                      serviceperiod: e.target.value,
                    });
                  }}
                  className="form-control w-100 mb-2"
                  required
                  type="number"
                  placeholder="Enter service period"
                />
              </Modal.Body>
              <Modal.Footer
                style={{
                  background:
                    "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                }}
              >
                <Button variant="secondary" onClick={handleOfClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={onAddOfficer}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>

            <div className="input-group w-25">
              <span
                className="input-group-text"
                id="search-icon"
                style={{ color: "#023eca" }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
              onChange={(e)=>setSearchCircle(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Search officer with Circle of duty"
                aria-label="Search"
                aria-describedby="search-icon"
              />
            </div>

            <div className="table-responsive mt-4">
              <table
                className="table table-bordered text-center w-100"
                style={{
                  backgroundColor: "#0a2540",
                  borderCollapse: "collapse",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  fontFamily: "'Segoe UI', sans-serif",
                }}
              >
                <thead
                  style={{
                    background: "#0a2540",
                    color: "white",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Father's Name</th>
                    <th className="p-3">Batch Number</th>
                    <th className="p-3">E-mail</th>
                    <th className="p-3">Password</th>
                    <th className="p-3">Phone Number</th>
                    <th className="p-3">Designation</th>
                    <th className="p-3">Circle of Duty</th>
                    <th className="p-3">Service Period</th>
                    <th className="p-3">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {officerTable?.length > 0 &&
                    officerTable.map((data, index) => (
                      <tr
                        key={index}
                        style={{ fontSize: "16px", color: "#333" }}
                      >
                        <td className="p-3">{data.username}</td>
                        <td className="p-3">{data.fathersname}</td>
                        <td className="p-3">{data.batchNo}</td>
                        <td
                          className="p-3"
                          style={{
                            wordBreak: "break-word",
                            whiteSpace: "normal",
                            maxWidth: "200px",
                          }}
                        >
                          {data.email}
                        </td>
                        <td className="p-3">{data.password}</td>
                        <td className="p-3">{data.number}</td>
                        <td className="p-3">{data.designation}</td>
                        <td className="p-3">{data.circleofduty}</td>
                        <td className="p-3">{data.serviceperiod}</td>
                        <td className="p-3">
                          <button
                            onClick={() => onDelete(data._id)}
                            className="btn"
                            style={{
                              backgroundColor: "#d9534f",
                              color: "#fff",
                              marginBottom: "8px",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              border: "none",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                            }}
                          >
                            Remove <i className="fa-solid fa-square-xmark"></i>
                          </button>
                          <br />
                          <button
                            className="btn"
                            onClick={() => handleOEditfShow(data)}
                            style={{
                              backgroundColor: "#1976d2",
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              border: "none",
                              boxShadow: "0 2px 4px rgba(25,118,210,0.35)",
                            }}
                          >
                            Review <i className="fa-solid fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <Modal
                centered
                size="lg"
                show={oEditshow}
                onHide={handleOfEditClose}
              >
                <Modal.Header
                  closeButton
                  style={{
                    background:
                      "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                  }}
                >
                  <Modal.Title>
                    Edit Officers <i className="fa-solid fa-shield"></i>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body
                  style={{
                    background:
                      "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                  }}
                >
                  <input
                    value={officerDetail?.username}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        username: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="text"
                    placeholder="Enter Officers name"
                  />
                  <input
                    value={officerDetail?.fathersname}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        fathersname: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="text"
                    placeholder="Enter Officers fathers name"
                  />
                  <input
                    value={officerDetail?.batchNo}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        batchNo: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="number"
                    placeholder="Enter  Officers Batch number"
                  />
                  <input
                    value={officerDetail?.email}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        email: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="email"
                    placeholder="Enter  Officers email"
                  />
                  <input
                    value={officerDetail?.password}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        password: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="text"
                    placeholder="Enter  Officers password"
                  />
                  <input
                    value={officerDetail?.number}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        number: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="text"
                    placeholder="Enter  Officers contact number"
                  />
                  <input
                    value={officerDetail?.designation}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        designation: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="text"
                    placeholder="Enter Designation"
                  />
                  <input
                    value={officerDetail?.circleofduty}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        circleofduty: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="text"
                    placeholder="Enter assigned circle ofduty"
                  />
                  <input
                    value={officerDetail?.serviceperiod}
                    onChange={(e) =>
                      setOfficerDetail({
                        ...officerDetail,
                        serviceperiod: e.target.value,
                      })
                    }
                    className="form-control w-100 mb-2"
                    required
                    type="number"
                    placeholder="Enter service period"
                  />
                </Modal.Body>
                <Modal.Footer
                  style={{
                    background:
                      "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                  }}
                >
                  <Button variant="secondary" onClick={handleOfEditClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={onEditOfficer}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </section>

          <section className="container mt-5">
            <div className="text-center">
              <h2
                className="fw-bold text-white p-3 rounded-3"
                style={{ backgroundColor: "#0d47a1 " }}
              >
                Leave Requests
              </h2>
            </div>

            <div className="table-responsive mt-4">
              <table
                className="table table-bordered text-center"
                style={{
                  backgroundColor: "#796F57",
                  borderColor: "#796F57",
                  overflow: "hidden",
                }}
              >
                <thead
                  style={{
                    backgroundColor: "#796F57",
                    color: "white",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  <tr>
                    <th className="p-3">Full Name</th>
                    <th className="p-3">Leave Type</th>
                    <th className="p-3">Reason</th>
                    <th className="p-3">Circle of Duty</th>
                    <th className="p-3">Starting Date</th>
                    <th className="p-3"> Ending Date</th>
                    <th className="p-3">Approve/reject</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveData.length > 0
                    ? leaveData.map((leaves, index) => (
                        <tr
                          key={index}
                          style={{ backgroundColor: "#fff", fontSize: "16px" }}
                        >
                          <td className="p-3">{leaves.name}</td>
                          <td className="p-3">{leaves.leaveType}</td>
                          <td className="p-3">{leaves.reason}</td>
                          <td className="p-3">{leaves.circle}</td>
                          <td className="p-3">
                            {" "}
                            {new Date(leaves.startDate).toLocaleDateString(
                              "en-IN"
                            )}
                          </td>
                          <td className="p-3">
                            {new Date(leaves.EndDate).toLocaleDateString(
                              "en-IN"
                            )}
                          </td>
                          <td className="p-3">
                            <Button
                              className="btn m-2 bg-success border-0"
                              onClick={() => onAccepting(leaves)}
                            >
                              Approve <i className="fa-solid fa-check"></i>
                            </Button>
                            <Button
                              className="bg-danger border-0"
                              onClick={() => onDeleting(leaves)}
                            >
                              Reject{" "}
                              <i className="fa-solid fa-square-xmark"></i>
                            </Button>
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jdash;
