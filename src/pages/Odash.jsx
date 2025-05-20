import React, { useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import Logo from "../assets/sideLogo.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import justice from "../assets/cop.mp4";

import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import {
  addLeaves,
  bookSportsFacility,
  deleteServices,
  getCriminals,
  getLoggedOfficer,
  getServices,
  onApointmentStatus,
  onClearingNotification,
  uploadProPic,
} from "../Services/AllApis";
import { toast } from "react-toastify";

const Odash = () => {
  const [showSpModal, setshowSpModal] = useState(false);
  const handleSpModalClose = () => setshowSpModal(false);
  const handleSpModalShow = () => setshowSpModal(true);

  const [showStModal, setshowStModal] = useState(false);
  const handleStModalClose = () => setshowStModal(false);
  const handleStModalShow = () => setshowStModal(true);

  const [leaveData, setLeaveData] = useState({
    leaveType: "",
    name: "",
    circle: "",
    reason: "",
    startDate: "",
    EndDate: "",
  });
  const [show, setShow] = useState(false);
  const [appointmentTable, setAppointmentTable] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showMod, setShowMod] = useState(false);

  const handleCloseMod = () => setShowMod(false);
  const handleShowMod = () => setShowMod(true);
  const [render, setRender] = useState("");

  const [popshow, setPopShow] = useState(false);
  const [poptarget, PopsetTarget] = useState(null);
  const popoverRef = useRef(null);

  const handlePopClick = (event) => {
    setPopShow(!popshow);
    PopsetTarget(event.target);
  };
  const [sportsData, setSportsData] = useState({
    serviceType: "Sports Club Booking",
    name: "",
    Date: "",
    number: "",
    details: "",
  });
  const [staticData, setStaticData] = useState({
    serviceType: "Requesting Case Data",
    name: "",
    Date: "",
    number: "",
    details: "",
  });

      const[searchKey,setSearchKey]=useState('');


  const [getCrimedata, setGetCrimeData] = useState([]);

  const gettingAllCriminals = async () => {
    try {
      const Header = {
        Authorization: `nearer ${sessionStorage.getItem("token")}`,
      };

      const apiResp = await getCriminals(Header,searchKey);
      setGetCrimeData(apiResp.data);
    } catch (error) {
      console.log(error);
    }
  };

     

  useEffect(() => {
    gettingAllCriminals();
  }, [render,searchKey]);

  //gettservices
  const handleAppontments = async () => {
    try {
      const Header = {
        Authorization: `beares ${sessionStorage.getItem("token")}`,
      };

      const apiresponse = await getServices(Header);

      setAppointmentTable(apiresponse.data);
    } catch (error) {
      toast.error("table loading error");
      console.log(error);
    }
  };

  useEffect(() => {
    handleAppontments();
  }, [render]);

  //deleting appointment
  const onDeleteAppointment = async (id) => {
    try {
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };
      const apiRes = await deleteServices(id, Header);
      setRender(apiRes);
      console.log(apiRes);
    } catch (error) {
      toast.error("error");
      console.log(error);
    }
  };

  useEffect(() => {}, [render]);

  //get specefiocOfficer

  const [loggedOfficer, setoggedOfficer] = useState({});

  const getLogged = async () => {
    try {
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };
      const apiResponse = await getLoggedOfficer(Header);
      setoggedOfficer(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLogged();
  }, [render]);

  //posting leave application

  const onLeaveApplication = async () => {
    if (
      leaveData.name &&
      leaveData.circle &&
      leaveData.reason &&
      leaveData.EndDate &&
      leaveData.startDate &&
      leaveData.leaveType
    ) {
      try {
        const Header = {
          Authorization: `bearer ${sessionStorage.getItem("token")}`,
        };
        const apiResponse = await addLeaves(leaveData, Header);
        if (apiResponse.status == 201) {
          handleCloseMod();

          toast.success("Leave request successfull");
        } else {
          toast.error("Leave request failed");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Fill all the forms");
    }
  };

  //posting sports facility

  const clubFacility = async () => {
    if (
      sportsData.name &&
      sportsData.details &&
      sportsData.Date &&
      sportsData.number
    ) {
      try {
        const Header = {
          Authorization: `bearer ${sessionStorage.getItem("token")}`,
        };
        const apiResponse = await bookSportsFacility(sportsData, Header);
        if (apiResponse.status == 200) {
          toast.success("Sports club booking request send");
          handleSpModalClose();
          handleClose();
        } else {
          toast.error("try again later");
        }
      } catch (error) {
        toast.error("error");
        console.log(error);
      }
    } else {
      toast.error("fill all credentials");
    }
  };

  //posting static datas
  const staticDataApplication = async () => {
    if (
      staticData.name &&
      staticData.details &&
      staticData.Date &&
      staticData.number
    ) {
      try {
        const Header = {
          Authorization: `bearer ${sessionStorage.getItem("token")}`,
        };
        const apiResponse = await bookSportsFacility(staticData, Header);
        if (apiResponse.status == 200) {
          toast.success("static data request send");
          handleStModalClose();
          handleClose();
        } else {
          toast.error("try again later");
        }
      } catch (error) {
        toast.error("error");
        console.log(error);
      }
    } else {
      toast.error("fill all credentials");
    }
  };

  //clearing Notification
  const clearNotification = async () => {
    try {
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };
      const apiResponse = await onClearingNotification(Header);
      if (apiResponse.status == 200) {
        toast.success("notification clear");
        setRender("deleted");
        handlePopClick();
      }
    } catch (error) {
      console.log(error);
    }
  };
  //profilePic
  const [preview, setPreview] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const onShowProfilePic = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);

    setPreview(URL.createObjectURL(file));
  };

  const updateProfile = async () => {
    const Header = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    };
    const Form = new FormData();
    Form.append("profileImg", profilePic);

    try {
      const apiRes = await uploadProPic(Form, Header);
      if (apiRes.status == 200) {
        setPreview("");
        setRender("done ");
        toast.success("Profile pic uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //appointmentBooking
  const handleAppointmentStatus = async (visitorData, status) => {
    try {
      const Header = {
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      };
      const payload = {
        userId: visitorData.userId,
        appointmentId: visitorData._id,
        status: status,
        customMessage:
          status === "booked"
            ? "Your appointment to visit has been approved."
            : "Your appointment has been rejected.",
      };
      const apiRes = await onApointmentStatus(payload, Header);
      if (apiRes.status === 200) {
        toast.success("User notified");
        setRender("appointment-status-updated");
      } else {
        toast.error("Failed to notify user");
      }
    } catch (error) {
      toast.error("Error notifying user");
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
    gradientLight: "rgba(25,118,210,0.25)",
    gradientDark: "rgba(13,71,161,0.35)",
  };

  const Styles = {
    marquee: {
      background: `linear-gradient(90deg, ${COLORS.gradientDark} 0%, ${COLORS.gradientLight} 100%)`,
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
    <div className="m-0 overflow-hidden" style={{ position: "relative" }}>
      {/* Justice video as background */}
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
          opacity: 0.18, // subtle overlay
          pointerEvents: "none",
        }}
      >
        <source src={justice} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a2540 60%, #1976d2 100%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 0,
        }}
      >
        <div>
          <div
            style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}
          >
            <div
              style={{
                height: "100px",
                width: "100%",
                backgroundColor: "#0a2540 ",
              }}
            ></div>
            <header
              style={{
                height: "75px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 32px",
                backgroundColor: "#0a2540 ",
                position: "sticky",
                top: 0,
                zIndex: 1000,
              }}
            >
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#e3f2fd",
                  letterSpacing: "1px",
                }}
              >
                CopConnect
                <i className="fa-solid fa-bars-staggered"></i>
              </h1>
              <div ref={popoverRef} className="mb-5">
                <button
                  onClick={handlePopClick}
                  className="btn btn "
                  style={{
                    fontSize: "20px",
                    position: "absolute",
                    left: "300px",
                    color: "#e3f2fd",
                    borderRadius: "50%",

                    backgroundColor: "#0d47a1",
                  }}
                >
                  <i className="fa-solid fa-bell"></i>
                </button>

                <Overlay
                  className="d-flex flex-column w-100"
                  show={popshow}
                  target={poptarget}
                  placement="bottom"
                  container={popoverRef.current}
                  containerPadding={20}
                >
                  <Popover id="popover-contained">
                    <Popover.Header as="h3">Notifications</Popover.Header>
                    <Popover.Body style={{ height: "300px" }}>
                      <ul>
                        {loggedOfficer?.Notification?.length > 0 ? (
                          loggedOfficer?.Notification?.map((data, index) => (
                            <li className="mb-2 w-100" key={index}>
                              {data.message} <br />
                              <Link
                                className="w-100 text-primary"
                                to={`http://localhost:3000/complaints/${data.link}`}
                              >
                                {data?.link ? data.link : ""}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <strong>no notifications</strong>
                        )}
                      </ul>
                    </Popover.Body>

                    {loggedOfficer?.Notification?.length > 0 && (
                      <button
                        onClick={clearNotification}
                        style={{ backgroundColor: "#0a2540" }}
                        className="btn text-white w-100"
                      >
                        Clear all <i className="fa-solid fa-broom-ball"></i>
                      </button>
                    )}
                  </Popover>
                </Overlay>
              </div>

              <div
                className="d-flex align-content-center ms-5"
                style={{ position: "absolute", left: "400px" }}
              >
                <h2
                  style={{ padding: "10px ", color: "#e3f2fd" }}
                  className="fs-1 fw-bold  ms-5 "
                >
                  OFFICER PORTAL <i className="fa-solid fa-building-shield"></i>
                </h2>
              </div>

              <nav>
                <ul
                  style={{
                    display: "flex",
                    gap: "20px",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    fontSize: "18px",
                  }}
                >
                  <li
                    style={{
                      cursor: "pointer",
                      color: "white",
                      transition: "color 0.3s",
                    }}
                  >
                    {/* <button
                      style={{ backgroundColor: "#6D6249" }}
                      className="btn text-white"
                    >
                      {" "}
                      Punch in <i className="fa-solid fa-house"></i>
                    </button> */}
                  </li>
                  <li>
                    <button
                      onClick={handleShowMod}
                      style={{ backgroundColor: "#1976d2" }}
                      className="btn text-white"
                    >
                      Apply Leave <i className="fa-solid fa-couch"></i>
                    </button>
                  </li>
                  <Modal
                    size="lg"
                    centered
                    show={showMod}
                    onHide={handleCloseMod}
                    contentClassName="custom-modal-content"
                  >
                    <Modal.Header closeButton className="custom-modal-header">
                      <Modal.Title
                        className="ms-5 text-white fw-bold"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Leave Application{" "}
                        <i className="fa-solid fa-couch ms-2"></i>
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="custom-modal-body d-flex flex-column gap-3 justify-content-center align-items-center">
                      <select
                        onChange={(e) =>
                          setLeaveData({
                            ...leaveData,
                            leaveType: e.target.value,
                          })
                        }
                        className="form-control custom-input mt-3"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose leave type
                        </option>
                        <option value="casual">Casual Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="maternity">
                          Maternity/Paternity Leave
                        </option>
                        <option value="bereavement">Bereavement Leave</option>
                      </select>

                      <input
                        onChange={(e) =>
                          setLeaveData({ ...leaveData, name: e.target.value })
                        }
                        className="form-control custom-input"
                        type="text"
                        placeholder="Name"
                      />
                      <input
                        onChange={(e) =>
                          setLeaveData({ ...leaveData, circle: e.target.value })
                        }
                        className="form-control custom-input"
                        type="text"
                        placeholder="Circle of duty"
                      />
                      <input
                        onChange={(e) =>
                          setLeaveData({
                            ...leaveData,
                            startDate: e.target.value,
                          })
                        }
                        className="form-control custom-input"
                        type="date"
                        placeholder="Start Date"
                      />
                      <input
                        onChange={(e) =>
                          setLeaveData({
                            ...leaveData,
                            EndDate: e.target.value,
                          })
                        }
                        className="form-control custom-input"
                        type="date"
                        placeholder="End Date"
                      />
                      <textarea
                        onChange={(e) =>
                          setLeaveData({ ...leaveData, reason: e.target.value })
                        }
                        placeholder="Reason for leave and duration"
                        className="form-control custom-input"
                        rows={3}
                      />

                      <button
                        onClick={onLeaveApplication}
                        className="btn btn-primary w-50 mt-3"
                        style={{
                          backgroundColor: "#1976d2",
                          border: "none",
                          boxShadow: "0 4px 15px rgba(25,118,210,0.6)",
                          borderRadius: "10px",
                          fontWeight: "600",
                        }}
                      >
                        APPLY
                      </button>
                    </Modal.Body>

                    <Modal.Footer className="custom-modal-footer">
                      <Button variant="secondary" onClick={handleCloseMod}>
                        Close
                      </Button>
                    </Modal.Footer>

                    {/* Custom CSS styles */}
                    <style jsx>{`
                      .custom-modal-content {
                        background: rgba(10, 37, 64, 0.85);
                        backdrop-filter: blur(15px);
                        border-radius: 15px;
                        border: 1px solid rgba(25, 118, 210, 0.4);
                        color: white;
                      }
                      .custom-modal-header,
                      .custom-modal-footer {
                        background: rgba(25, 118, 210, 0.25);
                        backdrop-filter: blur(12px);
                        border-bottom: none;
                        border-top-left-radius: 15px;
                        border-top-right-radius: 15px;
                        border-bottom-left-radius: 15px;
                        border-bottom-right-radius: 15px;
                        color: white;
                      }
                      .custom-modal-body {
                        min-height: 400px;
                        padding: 2rem 3rem;
                        color: white;
                      }
                      .custom-input {
                        background: rgba(255, 255, 255, 0.1);
                        border: 1px solid rgba(25, 118, 210, 0.6);
                        color: white;
                        border-radius: 10px;
                        padding: 10px 15px;
                        font-weight: 500;
                        transition: background 0.3s ease, border-color 0.3s ease;
                      }
                      .custom-input:focus {
                        background: rgba(255, 255, 255, 0.2);
                        border-color: #1976d2;
                        outline: none;
                        box-shadow: 0 0 8px #1976d2;
                        color: white;
                      }
                      select.custom-input option {
                        background: #0a2540;
                        color: white;
                      }
                    `}</style>
                  </Modal>

                  <li
                    style={{
                      cursor: "pointer",
                      color: "white",
                      transition: "color 0.3s",
                    }}
                  >
                    <button
                      onClick={handleShow}
                      style={{
                        backgroundColor: "#1976d2",
                        borderRadius: "8px",
                        padding: "0.5rem 1rem",
                        boxShadow: "0 4px 8px rgba(25, 118, 210, 0.4)",
                        border: "none",
                        fontWeight: "600",
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        transition: "background-color 0.3s",
                      }}
                      className="btn text-white"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0d47a1")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#1976d2")
                      }
                    >
                      Book services <i className="fa-solid fa-server"></i>
                    </button>
                  </li>

                  <Modal size="lg" centered show={show} onHide={handleClose}>
                    <Modal.Header
                      closeButton
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(25,118,210,0.2), rgba(13,71,161,0.3))",
                        backdropFilter: "blur(12px)",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Modal.Title
                        className="ms-5 fw-bold"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(25,118,210,0.2), rgba(13,71,161,0.3))",
                          backdropFilter: "blur(12px)",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                          fontFamily:
                            "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        }}
                      >
                        SERVICES <i className="fa-solid fa-server"></i>
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body
                      className="d-flex gap-4 justify-content-center align-items-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(25,118,210,0.15), rgba(13,71,161,0.15))",
                        backdropFilter: "blur(12px)",
                        minHeight: "320px",
                      }}
                    >
                      {/* {[...Array of Cards...]}, */}

                      <Card
                        className="d-flex flex-column justify-content-center align-items-center text-center shadow-sm"
                        style={{
                          width: "18rem",
                          background:
                            "linear-gradient(135deg, #0a2540, #1976d2, #3f51b5)",
                          borderRadius: "12px",
                          color: "white",
                          boxShadow: "0 6px 12px rgba(25, 118, 210, 0.6)",
                        }}
                      >
                        <Card.Body>
                          <Card.Title style={{ fontSize: "50px" }}>
                            <i className="fa-solid fa-volleyball"></i>
                          </Card.Title>
                          <h4 className="fw-semibold">
                            Officers Club Facility Bookings
                          </h4>
                          <Button
                            className="mt-3 px-4 py-2"
                            style={{
                              backgroundColor: "#1976d2",
                              border: "none",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(25,118,210,0.6)",
                              fontWeight: "600",
                            }}
                            onClick={handleSpModalShow}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#0d47a1")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#1976d2")
                            }
                          >
                            Apply
                          </Button>
                        </Card.Body>
                      </Card>

                      <Card
                        className="d-flex flex-column justify-content-center align-items-center text-center shadow-sm"
                        style={{
                          width: "18rem",
                          background:
                            "linear-gradient(135deg, #0a2540, #1976d2, #3f51b5)",
                          borderRadius: "12px",
                          color: "white",
                          boxShadow: "0 6px 12px rgba(25, 118, 210, 0.6)",
                        }}
                      >
                        <Card.Body>
                          <Card.Title style={{ fontSize: "50px" }}>
                            <i className="fa-solid fa-square-poll-vertical"></i>
                          </Card.Title>
                          <h4 className="fw-semibold">
                            Request Statistics and Data
                          </h4>
                          <Button
                            className="mt-3 px-4 py-2"
                            style={{
                              backgroundColor: "#1976d2",
                              border: "none",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(25,118,210,0.6)",
                              fontWeight: "600",
                            }}
                            onClick={handleStModalShow}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#0d47a1")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#1976d2")
                            }
                          >
                            Apply
                          </Button>
                        </Card.Body>
                      </Card>

                      {/* Statistics Request Modal */}
                      <Modal
                        show={showStModal}
                        onHide={handleStModalClose}
                        centered
                        style={{ color: "#0a2540" }}
                      >
                        <Modal.Header
                          closeButton
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(25,118,210,0.25), rgba(13,71,161,0.35))",
                            color: "white",
                            backdropFilter: "blur(12px)",
                          }}
                        >
                          <Modal.Title className="fw-bold text-dark">
                            Request Case Data{" "}
                            <i className="fa-solid fa-suitcase"></i>
                          </Modal.Title>
                        </Modal.Header>

                        <Modal.Body
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(25,118,210,0.1), rgba(13,71,161,0.1))",
                            backdropFilter: "blur(12px)",
                            color: "#0a2540",
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="form-control mb-4"
                            onChange={(e) =>
                              setStaticData({
                                ...staticData,
                                name: e.target.value,
                              })
                            }
                            style={{
                              borderRadius: "8px",
                              borderColor: "#1976d2",
                            }}
                          />
                          <input
                            type="date"
                            placeholder="Enter date of submission"
                            required
                            className="form-control mb-4"
                            onChange={(e) =>
                              setStaticData({
                                ...staticData,
                                Date: e.target.value,
                              })
                            }
                            style={{
                              borderRadius: "8px",
                              borderColor: "#1976d2",
                            }}
                          />
                          <input
                            type="number"
                            placeholder="Enter your contact number"
                            required
                            className="form-control mb-4"
                            onChange={(e) =>
                              setStaticData({
                                ...staticData,
                                number: e.target.value,
                              })
                            }
                            style={{
                              borderRadius: "8px",
                              borderColor: "#1976d2",
                            }}
                          />
                          <input
                            type="text"
                            placeholder="Short description of the case data required"
                            required
                            className="form-control mb-4"
                            onChange={(e) =>
                              setStaticData({
                                ...staticData,
                                details: e.target.value,
                              })
                            }
                            style={{
                              borderRadius: "8px",
                              borderColor: "#1976d2",
                            }}
                          />
                        </Modal.Body>

                        <Modal.Footer
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(25,118,210,0.2), rgba(13,71,161,0.3))",
                            backdropFilter: "blur(12px)",
                            borderTop: "1px solid rgba(255,255,255,0.15)",
                          }}
                        >
                          <Button
                            variant="secondary"
                            onClick={handleStModalClose}
                            style={{
                              borderRadius: "8px",
                              fontWeight: "600",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                            }}
                          >
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            onClick={staticDataApplication}
                            style={{
                              backgroundColor: "#1976d2",
                              borderRadius: "8px",
                              fontWeight: "600",
                              boxShadow: "0 4px 8px rgba(25,118,210,0.6)",
                              border: "none",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#0d47a1")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#1976d2")
                            }
                          >
                            Submit
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Modal.Body>

                    <Modal.Footer
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(25,118,210,0.2), rgba(13,71,161,0.3))",
                        backdropFilter: "blur(12px)",
                        borderTop: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      <Button
                        variant="secondary"
                        onClick={handleClose}
                        style={{
                          borderRadius: "8px",
                          fontWeight: "600",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                        }}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal show={showSpModal} onHide={handleSpModalClose}>
                    <Modal.Header
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(25,118,210,0.25), rgba(13,71,161,0.35))",
                        backdropFilter: "blur(12px)",
                        color: "white",
                      }}
                      closeButton
                    >
                      <Modal.Title className="text-dark">
                        Club Facility Booking{" "}
                        <i className="fa-solid fa-suitcase fw-bold"></i>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(25,118,210,0.1), rgba(13,71,161,0.1))",
                        backdropFilter: "blur(12px)",
                        color: "#0a2540",
                      }}
                    >
                      {["name", "Date", "number", "details"].map(
                        (field, idx) => (
                          <input
                            key={idx}
                            onChange={(e) =>
                              setSportsData({
                                ...sportsData,
                                [field]: e.target.value,
                              })
                            }
                            className="form-control w-100 mb-4"
                            required
                            type={
                              field === "number"
                                ? "number"
                                : field === "Date"
                                ? "date"
                                : "text"
                            }
                            placeholder={
                              field === "details"
                                ? "Short description booking purpose and time slot required"
                                : `enter your ${field.toLowerCase()}`
                            }
                            style={{
                              borderRadius: "8px",
                              borderColor: "#1976d2",
                            }}
                          />
                        )
                      )}
                    </Modal.Body>
                    <Modal.Footer
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(25,118,210,0.25), rgba(13,71,161,0.35))",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <Button
                        variant="secondary"
                        onClick={handleSpModalClose}
                        style={{
                          borderRadius: "8px",
                          fontWeight: "600",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                        }}
                      >
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={clubFacility}
                        style={{
                          backgroundColor: "#1976d2",
                          borderRadius: "8px",
                          fontWeight: "600",
                          boxShadow: "0 4px 8px rgba(25,118,210,0.6)",
                          border: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#0d47a1")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "#1976d2")
                        }
                      >
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Link
                    to={"/login"}
                    style={{
                      cursor: "pointer",
                      color: "white",
                      transition: "color 0.3s",
                    }}
                  >
                    <button
                      style={{ backgroundColor: "#1976d2" }}
                      className="btn text-white"
                    >
                      {" "}
                      Log out <i class="fa-solid fa-door-open"></i>
                    </button>
                  </Link>
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
                Welcome to CopConnect - Your Digital Police Service Portal |
                File Complaints | Book Appointments | Manage Criminal Data |
                Secure & Transparent Policing
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
        </div>

        <div className="container mt-4">
          <div className="row justify-content-center">
            {/* Officer ID Card */}
            <div
              className="col-md-6 d-flex justify-content-center"
              style={{ marginBottom: "32px" }}
            >
              <div
                style={{
                  background: "rgba(13,71,161,0.18)",
                  borderRadius: "24px",
                  boxShadow: "0 8px 32px 0 rgba(25,118,210,0.18)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid rgba(25,118,210,0.18)",
                  padding: "32px 24px 24px 24px",
                  width: "100%",
                  maxWidth: "680px",
                  minHeight: "340px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "24px",
                  color: "#e3f2fd",
                }}
              >
                <div
                  style={{
                    height: "140px",
                    width: "140px",
                    overflow: "hidden",
                    borderRadius: "18px",
                    border: "2.5px solid #1976d2",
                    background: "#fff",
                    boxShadow: "0 2px 12px rgba(25,118,210,0.10)",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <label
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                  >
                    <input
                      type="file"
                      onChange={onShowProfilePic}
                      className="form-control"
                      style={{ display: "none" }}
                    />
                    <img
                      className="img-fluid"
                      src={
                        preview
                          ? preview
                          : loggedOfficer.proImage
                          ? `http://localhost:3000/Media/${loggedOfficer.proImage}`
                          : "https://thumbs.dreamstime.com/b/monochromatic-minimalist-police-officer-profile-icon-blue-background-uniform-stands-against-vibrant-portrait-captures-290771348.jpg"
                      }
                      alt="Officer"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                        transition: "0.2s",
                      }}
                    />
                    {preview ? (
                      <button
                        className="btn text-white rounded-5"
                        style={{
                          position: "absolute",
                          left: "50%",
                          bottom: "10px",
                          transform: "translateX(-50%)",
                          backgroundColor: "#1976d2",
                          fontWeight: 600,
                          fontSize: "14px",
                          padding: "4px 18px",
                          boxShadow: "0 2px 8px rgba(25,118,210,0.18)",
                        }}
                        onClick={updateProfile}
                      >
                        Save <i className="fa-solid fa-pen"></i>
                      </button>
                    ) : null}
                  </label>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="mb-2">
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "22px",
                        color: "#fff", // Officer name in white
                        letterSpacing: "1px",
                        textShadow: "0 1px 8px #1976d2",
                      }}
                    >
                      {loggedOfficer?.username || "Officer Name"}
                    </span>
                    <span
                      style={{
                        background: "#1976d2",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "12px",
                        borderRadius: "8px",
                        padding: "2px 10px",
                        marginLeft: "10px",
                        verticalAlign: "middle",
                      }}
                    >
                      {loggedOfficer?.designation || "Designation"}
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#e3f2fd",
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    <div>
                      <i className="fa-solid fa-user-tie me-2"></i>
                      Father's Name:{" "}
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {loggedOfficer?.fathersname}
                      </span>
                    </div>
                    <div>
                      <i className="fa-solid fa-id-card me-2"></i>
                      Batch No:{" "}
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {loggedOfficer?.batchNo}
                      </span>
                    </div>
                    <div>
                      <i className="fa-solid fa-phone me-2"></i>
                      Phone:{" "}
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {loggedOfficer?.number}
                      </span>
                    </div>
                    <div>
                      <i className="fa-solid fa-building-shield me-2"></i>
                      Station:{" "}
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {loggedOfficer?.circleofduty}
                      </span>
                    </div>
                    <div>
                      <i className="fa-solid fa-clock me-2"></i>
                      Service Period:{" "}
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {loggedOfficer?.serviceperiod}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* crime records */}

        <section className="container mt-5">
          <center>
            <h2
              className="fw-bold text-white p-3 rounded-3"
              style={{
                backgroundColor: "rgba(25,118,210,0.25)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Criminal Records
            </h2>
          </center>
<div className="input-group w-25">
  <span className="input-group-text" id="search-icon" style={{color: "#023eca"}}>
    <i className="fa-solid fa-magnifying-glass"></i>
  </span>
  <input
  onChange={(e)=>setSearchKey(e.target.value)}
  
    type="text"
    className="form-control"
    placeholder="Search criminal"
    aria-label="Search"
    aria-describedby="search-icon"
  />
</div>
          <div
            className="table-responsive mt-4 p-3 rounded-4"
            style={{
              background: "rgba(13,71,161,0.35)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
            }}
          >
            <table
              className="table table-bordered text-center text-white"
              style={{
                borderColor: "#3f51b5",
                fontSize: "16px",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                <tr>
                  <th className="p-3">Photo</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Father's Name</th>
                  <th className="p-3">Identification Mark</th>
                  <th className="p-3">C-Number</th>
                  <th className="p-3">Total Years of Sentence</th>
                  <th className="p-3">Admitted Date</th>
                  <th className="p-3">Relieving Date</th>
                </tr>
              </thead>
              <tbody>
                {getCrimedata.length > 0 ? (
                  getCrimedata.map((data, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      <td
                        className="p-3"
                        style={{ height: "100px", width: "100px" }}
                      >
                        <img
                          style={{
                            width: "100%",
                            borderRadius: "12px",
                            border: "2px solid #3f51b5",
                          }}
                          src={
                            data.criminalimage
                              ? `http://localhost:3000/Media/${data.criminalimage}`
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVO3GNQRm6Ly9CrUTsDREMk08IvcAvJtlKg84q62up6DGGXB0jxoUem0NIwKxya0H0YwU&usqp=CAU"
                          }
                          alt="Criminal"
                        />
                      </td>
                      <td className="p-3">{data.criminalname}</td>
                      <td className="p-3">{data.criminalfathersName}</td>
                      <td className="p-3">{data.CriminalIdentificationMark}</td>
                      <td className="p-3">{data.CNumber}</td>
                      <td className="p-3">{data.TotalYearsofSentence}</td>
                      <td className="p-3">{data.AdmittedDate}</td>
                      <td className="p-3">{data.RelievingDate}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center text-light p-4">
                      No criminal records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
        <section className="container mt-5">
          <center>
            <h2
              className="fw-bold text-white p-3 rounded-3"
              style={{
                backgroundColor: "rgba(25,118,210,0.25)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Visitors Application Data
            </h2>
          </center>

          <div
            className="table-responsive mt-4 p-3 rounded-4"
            style={{
              background: "rgba(13,71,161,0.35)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
            }}
          >
            <table
              className="table table-bordered text-center text-white"
              style={{
                borderColor: "#3f51b5",
                fontSize: "16px",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Father's Name</th>
                  <th className="p-3">Contact Number</th>
                  <th className="p-3">Criminal Name</th>
                  <th className="p-3">Relation with Criminal</th>
                  <th className="p-3">Date of Visit</th>
                  <th className="p-3">Reason for Visit</th>
                  <th className="p-3">Time Allotted</th>
                  <th className="p-3">Approve / Reject</th>
                </tr>
              </thead>
              <tbody>
                {appointmentTable
                  .filter((a) => a.serviceType === "appointment")
                  .map((visitorData, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      <td className="p-3">{visitorData.name}</td>
                      <td className="p-3">{visitorData.fathersname}</td>
                      <td className="p-3">{visitorData.number}</td>
                      <td className="p-3">{visitorData.criminalname}</td>
                      <td className="p-3">{visitorData.relationship}</td>
                      <td className="p-3">
                        {new Date(visitorData.Date).toLocaleDateString("en-IN")}
                      </td>
                      <td className="p-3">{visitorData.visitingreason}</td>
                      <td className="p-3">{visitorData.visitingtime}</td>
                      <td className="p-3 d-flex justify-content-center gap-2 flex-wrap">
                        <Button
                          className="btn bg-success text-white shadow-sm px-3 rounded-3"
                          onClick={() =>
                            handleAppointmentStatus(visitorData, "booked")
                          }
                        >
                          Approve <i className="fa-solid fa-check ms-2"></i>
                        </Button>
                        <Button
                          onClick={() => {
                            onDeleteAppointment(visitorData._id);
                            handleAppointmentStatus(visitorData, "rejected");
                          }}
                          className="bg-danger text-white shadow-sm px-3 rounded-3"
                        >
                          Reject{" "}
                          <i className="fa-solid fa-square-xmark ms-2"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Odash;
