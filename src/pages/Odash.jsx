import React, { useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import Logo from "../assets/sideLogo.png";
import sideLogo from "../assets/logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import {
  addLeaves,
  deleteServices,
  getCriminals,
  getLoggedOfficer,
  getServices,
} from "../Services/AllApis";
import { toast } from "react-toastify";

const Odash = () => {
  const [leaveData, setLeaveData] = useState({
    leaveType: "",
    name: "",
    circle: "",
    reason: "",
    startDate:"",
    EndDate:""

  });
  console.log(leaveData)
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

  const [getCrimedata, setGetCrimeData] = useState([]);

  const gettingAllCriminals = async () => {
    try {
      const Header = {
        Authorization: `nearer ${sessionStorage.getItem("token")}`,
      };

      const apiResp = await getCriminals(Header);
      setGetCrimeData(apiResp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingAllCriminals();
  }, [render]);

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
  }, []);

  const onLeaveApplication = async () => {
    if(leaveData.name&&leaveData.circle&&leaveData.reason&&leaveData.EndDate&&leaveData.startDate&&leaveData.leaveType){
      try {
      
        const Header={'Authorization':`bearer ${sessionStorage.getItem('token')}`}
        const apiResponse = await addLeaves(leaveData,Header);
        if(apiResponse.status==201){
          toast.success('Leave request successfull')
        }else{
          toast.error('Leave request failed')
        }
  
        
      } catch (error) {
        console.log(error)
        
      }
        
    }else{
      toast.error('Fill all the forms')
    }
    
    
    
  };

  return (
    <div className="m-0 overflow-hidden">
      <div
        style={{
          minHeight: "100vh",
          // backgroundColor: "#EAD196",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
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
                backgroundColor: "white",
              }}
            >
              <img className="ms-5" height={"100px"} src={Logo} alt="" />
              <img
                className="img-fluid mt-3"
                style={{
                  position: "absolute",
                  right: "100px",
                  height: "100px",
                }}
                src={sideLogo}
                alt=""
              />
            </div>
            <header
              style={{
                height: "75px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 32px",
                backgroundColor: "#796F57",
                position: "sticky",
                top: 0,
                zIndex: 1000,
              }}
            >
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#F1F1F1",
                  letterSpacing: "1px",
                }}
              >
                CopConnect
                <i className="fa-solid fa-bars-staggered"></i>
              </h1>
              <div ref={popoverRef} className="mb-5">
                <button
                  onClick={handlePopClick}
                  className="btn btn-white text-white"
                  style={{
                    fontSize: "20px",
                    position: "absolute",
                    left: "300px",

                    backgroundColor: "#6D6249",
                  }}
                >
                  <i className="fa-solid fa-bell"></i>
                </button>

                <Overlay
                  className="d-flex flex-column justify-content-center"
                  show={popshow}
                  target={poptarget}
                  placement="bottom"
                  container={popoverRef.current}
                  containerPadding={20}
                >
                  <Popover id="popover-contained">
                    <Popover.Header as="h3">Notifications</Popover.Header>
                    <Popover.Body style={{ height: "300px", width: "300px" }}>
                      <strong>no notifications</strong> Check this info.
                    </Popover.Body>

                    <button
                      style={{ backgroundColor: "#796F57" }}
                      className="btn  text-white w-100  "
                    >
                      Clear all{" "}
                    </button>
                  </Popover>
                </Overlay>
              </div>

              <div
                className="d-flex align-content-center ms-5"
                style={{ position: "absolute", left: "400px" }}
              >
                <h2
                  style={{ padding: "10px " }}
                  className="fs-1 fw-bold text-white ms-5 "
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
                    <button
                      style={{ backgroundColor: "#6D6249" }}
                      className="btn text-white"
                    >
                      {" "}
                      Punch in <i className="fa-solid fa-house"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleShowMod}
                      style={{ backgroundColor: "#6D6249" }}
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
                  >
                    <Modal.Header
                      closeButton
                      style={{
                        background:
                          "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                      }}
                    >
                      <Modal.Title className="ms-5">
                        Leave Application <i className="fa-solid fa-couch"></i>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                      style={{
                        background:
                          "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                        height: "400px",
                      }}
                      className="d-flex flex-column gap-3 justify-content-center align-items-center"
                    >
                      <select  onChange={(e) =>
                          setLeaveData({ ...leaveData, leaveType: e.target.value })
                        } className="form-control mt-3" name="" id="">
                        <option value="" selected disabled>
                          choose leave type
                        </option>
                        <option value="casual">Casual Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="meternity">
                          Meternity/Paternity Leave
                        </option>
                        <option value="bevarement">Bevarement Leave</option>
                      </select>
                      <input
                        onChange={(e) =>
                          setLeaveData({ ...leaveData, name: e.target.value })
                        }
                        className="form-control"
                        type="text"
                        placeholder=" name"
                      />
                      <input
                      onChange={(e) =>
                        setLeaveData({ ...leaveData, circle: e.target.value })
                      }
                        className="form-control"
                        type="text"
                        placeholder="circle of duty"
                      />
                      <input
                       onChange={(e) =>
                        setLeaveData({ ...leaveData, startDate: e.target.value })
                      }
                        className="form-control"
                        type="Date"
                        placeholder="Date of leave requirement"
                      />
                      <input
                       onChange={(e) =>
                        setLeaveData({ ...leaveData, EndDate: e.target.value })
                      }
                        className="form-control"
                        type="Date"
                        placeholder="until which date
                         of leave requirement"
                      />

                      <textarea
                      onChange={(e) =>
                        setLeaveData({ ...leaveData, reason: e.target.value })
                      }
                      
                        placeholder="reason for the leave  and time period of leave requirement"
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                      />
                      <button onClick={onLeaveApplication}
                        className="btn text-white w-50 mt-3 "
                        style={{ backgroundColor: "#796F57" }}
                      >
                        APPLY
                      </button>
                    </Modal.Body>
                    <Modal.Footer
                      style={{
                        background:
                          "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                      }}
                    >
                      <Button variant="secondary" onClick={handleCloseMod}>
                        Close
                      </Button>
                    </Modal.Footer>
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
                      style={{ backgroundColor: "#6D6249" }}
                      className="btn text-white"
                    >
                      {" "}
                      Book services <i class="fa-solid fa-server"></i>
                    </button>
                  </li>
                  <Modal size="lg" centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className="ms-5">
                        SERVICES <i class="fa-solid fa-server"></i>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                      style={{ height: "300px" }}
                      className="d-flex  gap-3 justify-content-center align-items-center"
                    >
                      {" "}
                      <Card
                        className="card d-flex flex-column justify-content-center align-items-center"
                        style={{
                          width: "18rem",
                          background:
                            "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                        }}
                      >
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                          <Card.Title
                            style={{ fontSize: "50px", color: "#796F57" }}
                          >
                            <i class="fa-solid fa-volleyball"></i>
                          </Card.Title>
                          <h4>Officers Club Facility Bookings</h4>
                          <Card.Text></Card.Text>

                          <Button
                            style={{
                              backgroundColor: "#796F57",
                              border: "0px",
                            }}
                            className="mt-3"
                          >
                            Apply
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card
                        className="card"
                        style={{
                          width: "18rem",
                          background:
                            "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                        }}
                      >
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                          <Card.Title
                            style={{ fontSize: "50px", color: "#796F57" }}
                          >
                            <i class="fa-solid fa-square-poll-vertical"></i>
                          </Card.Title>
                          <h4>Request statics and Data</h4>
                          <Card.Text></Card.Text>

                          <Button
                            style={{
                              backgroundColor: "#796F57",
                              border: "0px",
                            }}
                            className="mt-3"
                          >
                            Apply
                          </Button>
                        </Card.Body>
                      </Card>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
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
                      style={{ backgroundColor: "#6D6249" }}
                      className="btn text-white"
                    >
                      {" "}
                      Log out <i class="fa-solid fa-door-open"></i>
                    </button>
                  </Link>
                </ul>
              </nav>
            </header>
            <marquee behavior="" direction="">
              Welcome to CopConnect - Your Digital Police Service Portal | File
              Complaints | Book Appointments | Manage Criminal Data | Secure &
              Transparent Policing{" "}
            </marquee>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5 rounded-4 overflow-hidden">
              <img
                style={{ width: "100%" }}
                src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs10663-020-09486-2/MediaObjects/10663_2020_9486_Fig2_HTML.png"
                alt=""
              />
            </div>

            <div
              className="col-md-7 m-0 rounded-5"
              style={{
                position: "relative",
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                height: "400px",
                padding: "20px",
              }}
            >
              <div
                className="mt-3"
                style={{
                  height: "200px",
                  width: "200px",
                  overflow: "hidden",
                  position: "absolute",
                  right: "30px",
                  top: "20px",
                  borderRadius: "30%",
                  border: "0px solid #796F57",
                }}
              >
                <label>
                  <input
                    type="file"
                    name=""
                    id=""
                    className="form-control "
                    style={{ display: "none" }}
                  />
                  <img
                    className="img-fluid"
                    src="https://thumbs.dreamstime.com/b/monochromatic-minimalist-police-officer-profile-icon-blue-background-uniform-stands-against-vibrant-portrait-captures-290771348.jpg"
                    alt="Officer"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </label>
              </div>

              <button
                className="btn text-white rounded-5"
                style={{
                  position: "absolute",
                  left: "605px",
                  top: "220px",
                  backgroundColor: "#796F57",
                }}
              >
                save <i className="fa-solid fa-pen"></i>
              </button>
              <div className="mt-3 text-dark" style={{ paddingLeft: "20px" }}>
                <p className="fs-5 fw-bold">
                  <span>Name: </span>
                  {loggedOfficer?.username}
                </p>
                <p className="fs-5 fw-bold">
                  <span>Father's Name: </span>
                  {loggedOfficer?.fathersname}
                </p>
                <p className="fs-5 fw-bold">
                  <span>Batch No: </span>
                  {loggedOfficer?.batchNo}
                </p>
                <p className="fs-5 fw-bold">
                  <span>Phone No: </span>
                  {loggedOfficer?.number}
                </p>
                <p className="fs-5 fw-bold">
                  <span>Designation: </span>
                  {loggedOfficer?.designation}
                </p>
                <p className="fs-5 fw-bold">
                  <span>Station Of Duty: </span>
                  {loggedOfficer?.circleofduty}
                </p>
                <p className="fs-5 fw-bold">
                  <span>Casses Assigned : </span>
                  <button
                    className="btn  w-25 text-white"
                    style={{ backgroundColor: "#6D6249" }}
                  >
                    View <i class="fa-solid fa-eye"></i>
                  </button>
                </p>
                <p className="fs-5 fw-bold">
                  <span>Service period: </span>
                  {loggedOfficer.serviceperiod}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* crime records */}

        <section className="container mt-5">
          <center>
            <h2
              className="fw-bold text-white p-3 rounded-3"
              style={{ backgroundColor: "#796F57" }}
            >
              Criminal Records
            </h2>
          </center>

          <div className="table-responsive mt-4">
            <table
              className="table table-bordered text-center"
              style={{
                backgroundColor: "#d9d9d9",
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
                {getCrimedata.length > 0
                  ? getCrimedata.map((data) => (
                      <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                        <td
                          className="p-3 img-fluid"
                          style={{ height: "100px", width: "100px" }}
                        >
                          <img
                            style={{ width: "100%" }}
                            src={
                              data.criminalimage
                                ? `http://localhost:3000/Media/${data.criminalimage}`
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVO3GNQRm6Ly9CrUTsDREMk08IvcAvJtlKg84q62up6DGGXB0jxoUem0NIwKxya0H0YwU&usqp=CAU"
                            }
                            alt="Criminalimage"
                          />
                        </td>
                        <td className="p-3">{data.criminalname}</td>
                        <td className="p-3">{data.criminalfathersName}</td>
                        <td className="p-3">
                          {data.CriminalIdentificationMark}
                        </td>
                        <td className="p-3">{data.CNumber}</td>
                        <td className="p-3">{data.TotalYearsofSentence}</td>
                        <td className="p-3">{data.AdmittedDate}</td>
                        <td className="p-3">{data.RelievingDate}</td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </section>

        <section className="container mt-5">
          <center>
            <h2
              className="fw-bold text-white p-3 rounded-3"
              style={{ backgroundColor: "#796F57" }}
            >
              Visitors Application Data
            </h2>
          </center>

          <div className="table-responsive mt-4">
            <table
              className="table table-bordered text-center"
              style={{
                backgroundColor: "#d9d9d9",
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
                  <th className="p-3">Name</th>
                  <th className="p-3">Father's Name</th>
                  <th className="p-3">Contact Number</th>
                  <th className="p-3">Criminal Name</th>
                  <th className="p-3">Relation with Criminal</th>
                  <th className="p-3">Date of visit</th>
                  <th className="p-3">Reason for visit</th>
                  <th className="p-3">Time allotted</th>
                  <th className="p-3">Approve/Reject</th>
                </tr>
              </thead>

              <tbody>
                {appointmentTable
                  .filter((a) => a.serviceType == "appointment")
                  .map((visitorData) => (
                    <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                      <td className="p-3">{visitorData.name}</td>
                      <td className="p-3">{visitorData.fathersname}</td>
                      <td className="p-3">{visitorData.number}</td>
                      <td className="p-3">{visitorData.criminalname}</td>
                      <td className="p-3">{visitorData.relationship}</td>
                      <td className="p-3">
                        {new Date(visitorData.Date).toLocaleDateString("en-IN")}
                      </td>
                      <td className="p-3"> {visitorData.visitingreason}</td>
                      <td className="p-3">{visitorData.visitingtime}</td>
                      <td className="p-3">
                        <Button className="btn m-2 bg-success border-0">
                          Approve <i className="fa-solid fa-check"></i>
                        </Button>
                        <Button
                          onClick={() => onDeleteAppointment(visitorData._id)}
                          className="bg-danger border-0"
                        >
                          Reject <i className="fa-solid fa-square-xmark"></i>
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
