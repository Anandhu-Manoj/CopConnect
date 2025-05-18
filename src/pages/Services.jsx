import React, { useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import {
  clearNotify,
  getCivillanNotification,
  onserviceApplication,
} from "../Services/AllApis";

const Services = () => {
  const [render, setRender] = useState("");
  const [ServiceApplication, setServiceApplication] = useState({
    name: "",
    fathersname: "",
    Date: "",
    number: "",
    complaint: "",
    description: "",
    criminalname: "",
    visitingreason: "",
    relation: "",
    visitingtime: "",
  });
  console.log(ServiceApplication);

  const [preView, setPreView] = useState("");

  useEffect(() => {
    if (
      ServiceApplication.complaint &&
      ServiceApplication.complaint.type == "application/pdf"
    ) {
      const viewComplaint = URL.createObjectURL(ServiceApplication.complaint);
      console.log(viewComplaint);
      setPreView("you can submit now");
    } else {
      // alert("upload correct format");
      // handleClose();
    }
  }, [ServiceApplication.complaint]);

  const onApplly = async () => {
    if (
      ServiceApplication.name &&
      ServiceApplication.complaint &&
      ServiceApplication.number &&
      ServiceApplication.Date
    ) {
      const payload = new FormData();
      payload.append("serviceType", "complaints");

      payload.append("name", ServiceApplication.name);
      payload.append("complaint", ServiceApplication.complaint);
      payload.append("number", ServiceApplication.number);
      payload.append("Date", ServiceApplication.Date);

      try {
        const requestHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${sessionStorage.getItem("token")}`,
        };
        const apiResponse = await onserviceApplication(payload, requestHeader);
        if (apiResponse.status === 200) {
          alert("complainted registered");
          handleClose();
        } else {
          alert("unable to send try again later");
        }
      } catch (error) {
        console.log("api error");
        console.log(error);
      }
    } else {
      alert("fill all the fields");
    }
  };

  //serviceRequest

  const onServiceRequest = async () => {
    if (
      ServiceApplication.name &&
      ServiceApplication.Date &&
      ServiceApplication.number &&
      ServiceApplication.description
    ) {
      try {
        const payload = {
          name: ServiceApplication.name,
          Date: ServiceApplication.Date,
          serviceType: "requestservice",

          number: ServiceApplication.number,
          description: ServiceApplication.description,
        };
        const Header={Authorization :`bearer ${sessionStorage.getItem('token')}`}
        const apiResponse = await onserviceApplication(payload,Header);
        if (apiResponse.status === 200) {
          alert("Request send");
          handleModalClose();
        } else {
          alert("request sending failed try again later");
        }
      } catch (error) {
        console.log(error, "server error");
      }
    } else {
      alert("fill all the details");
    }
  };

  //apointment booking
  const onBookingAppontment = async () => {
    if (
      ServiceApplication.name &&
      ServiceApplication.fathersname &&
      ServiceApplication.number &&
      ServiceApplication.Date &&
      ServiceApplication.relationship &&
      ServiceApplication.visitingreason &&
      ServiceApplication.visitingtime &&
      ServiceApplication.criminalname
    ) {
      const payload = {
        serviceType: "appointment",
        name: ServiceApplication.name,
        fathersname: ServiceApplication.fathersname,
        number: ServiceApplication.number,
        Date: ServiceApplication.Date,
        relationship: ServiceApplication.relationship,
        visitingtime: ServiceApplication.visitingtime,
        criminalname: ServiceApplication.criminalname,
        visitingreason: ServiceApplication.visitingreason,
      };
      try {
        const Header={Authorization:`bearer ${sessionStorage.getItem('token')}`}
        const apiResponse = await onserviceApplication(payload,Header);
        if (apiResponse.status === 200) {
          alert("Appointment request send");
          handleModClose();
        } else "try again later for booking";
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("fill all the required details");
    }
  };
  //

  const [iseLoggedin, setIsLoggedin] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const [showMod, setModShow] = useState(false);
  const handleModClose = () => setModShow(false);
  const handleModShow = () => setModShow(true);

  const [popshow, setPopShow] = useState(false);
  const [poptarget, PopsetTarget] = useState(null);
  const popoverRef = useRef(null);

  const handlePopClick = (event) => {
    setPopShow(!popshow);
    PopsetTarget(event.target);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [iseLoggedin]);

  //getNotification
  const [notification, setNotification] = useState([]);

  const getServiceUPdate = async () => {
    const Header = {
      Authorization: `bearer ${sessionStorage.getItem("token")}`,
    };
    try {
      const apiresp = await getCivillanNotification(Header);
      setNotification(apiresp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceUPdate();
  }, [render]);

  const onClear = async () => {
    const Header = {
      Authorization: `bearer ${sessionStorage.getItem("token")}`,
    };
    try {
      const apiresp = clearNotify(Header);
      setRender(apiresp);
      handlePopClick()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* <Header /> */}

      <div style={{ height: "80vh" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#796F57",
            color: "white",
            height: "100px",
          }}
        >
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
                  <ul>
                    {notification?.length > 0 ? (
                      notification?.map((data) => <li>{data.message}</li>)
                    ) : (
                      <strong>no notifications</strong>
                    )}
                  </ul>
                </Popover.Body>

                <button
                  style={{ backgroundColor: "#796F57" }}
                  className="btn  text-white w-100  "
                  onClick={onClear}
                >
                  Clear all{" "}
                </button>
              </Popover>
            </Overlay>
          </div>

          <h1 className=" text-center ">
            SERVICES <i class="fa-solid fa-server"></i>
          </h1>
        </div>

        <div className="d-flex gap-5 mt-5 justify-content-center  ms-4">
          <Card
            className="card me-5 d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              width: "28rem",
              height: "300px",
              background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                <i class="fa-solid fa-pen-to-square fw-bold"></i>
              </Card.Title>
              <h4 className="fs-2 fw-bold">File a complaint</h4>
              <Card.Text></Card.Text>
              <Button
                onClick={handleShow}
                style={{ backgroundColor: "#796F57", border: "0px" }}
                className="mt-5 w-100"
              >
                Apply
              </Button>
            </Card.Body>
          </Card>
          {/* //complaints */}
          <Modal centered show={show} onHide={handleClose}>
            <Modal.Header
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
              closeButton
            >
              <Modal.Title className="ms-5">
                Add Complaint <i class="fa-solid fa-pen-to-square fw-bold"></i>
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
                  setServiceApplication({
                    ...ServiceApplication,
                    name: e.target.value,
                  });
                }}
                className="form-control w-100 mb-5"
                required
                type="text"
                placeholder="enter your name"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    Date: e.target.value,
                  });
                }}
                className="form-control w-100 mb-5"
                required
                type="date"
                placeholder="enter Date of submission"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    number: e.target.value,
                  });
                }}
                className="form-control w-100 mb-5"
                required
                type="number"
                placeholder="enter your contact  number"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    complaint: e.target.files[0],
                  });
                }}
                className="form-control w-100"
                required
                type="file"
                placeholder=""
              />
              <p className="mt-2 ms-5 text-dark fw-lighter">
                {preView ? preView : "upload written complaint in pdf format"}
              </p>
            </Modal.Body>
            <Modal.Footer
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={onApplly}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
          <Card
            className="card me-5 d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              width: "28rem",
              height: "300px",
              background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                <i className="fa-solid fa-suitcase fw-bold"></i>
              </Card.Title>
              <h4 className="fs-2 fw-bold">
                Request for police activities and events
              </h4>
              <Card.Text></Card.Text>
              <Button
                onClick={handleModalShow}
                style={{ backgroundColor: "#796F57", border: "0px" }}
                className="mt-3 w-50"
              >
                Apply
              </Button>
            </Card.Body>
          </Card>

          {/* service bookings */}
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
              closeButton
            >
              <Modal.Title>
                activities and events{" "}
                <i className="fa-solid fa-suitcase fw-bold"></i>
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
                  setServiceApplication({
                    ...ServiceApplication,
                    name: e.target.value,
                  });
                }}
                className="form-control w-100 mb-5"
                required
                type="text"
                placeholder="enter your name"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    Date: e.target.value,
                  });
                }}
                className="form-control w-100 mb-5"
                required
                type="date"
                placeholder="enter date of submission"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    number: e.target.value,
                  });
                }}
                className="form-control w-100 mb-5"
                required
                type="number"
                placeholder="enter your contact  number"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    description: e.target.value,
                  });
                }}
                className="form-control w-100 mb-5"
                required
                type="text"
                placeholder="Short discription of the required service "
              />
            </Modal.Body>
            <Modal.Footer
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={onServiceRequest}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
          <Card
            className="card me-5 d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              width: "28rem",
              height: "300px",
              background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                <i class="fa-solid fa-handshake-angle"></i>
              </Card.Title>
              <h3 className="fw-bold fs-2 ">Visit Inmates</h3>
              <Card.Text></Card.Text>
              <Button
                onClick={handleModShow}
                style={{ backgroundColor: "#796F57", border: "0px" }}
                className="mt-5 w-100 "
              >
                Apply
              </Button>
            </Card.Body>
          </Card>
          <Modal show={showMod} onHide={handleModClose}>
            <Modal.Header
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
              closeButton
            >
              <Modal.Title>
                Visit Inmates <i class="fa-solid fa-handshake-angle"></i>
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
                  setServiceApplication({
                    ...ServiceApplication,
                    name: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Enter your name"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    fathersname: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Enter your fathers name"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    number: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="number"
                placeholder="Enter  your contact number"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    criminalname: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Enter crminal  name"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    relationship: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Relatioship with criminal"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    Date: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="date"
                placeholder="Date of visit"
              />
              <textarea
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    visitingreason: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Reason for visit"
              />
              <input
                onChange={(e) => {
                  setServiceApplication({
                    ...ServiceApplication,
                    visitingtime: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Time of visit"
              />
            </Modal.Body>
            <Modal.Footer
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Button variant="secondary" onClick={handleModClose}>
                Close
              </Button>
              <Button variant="primary" onClick={onBookingAppontment}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <center>
          <Link to={"/local"}>
            <Button
              className="btn  btn-outline mt-5 w-25 border-0"
              style={{
                backgroundColor: "#796F57",
                padding: "10px 30px",
                borderRadius: "15px",
              }}
            >
              Log Out
            </Button>
          </Link>
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
