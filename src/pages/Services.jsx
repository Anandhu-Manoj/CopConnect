import React, { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import {
  clearNotify,
  getCivillanNotification,
  onserviceApplication,
} from "../Services/AllApis";

// Background video component
const BackgroundVideo = () => {
  return (
    <div className="background-container">
      <video
        autoPlay
        loop
        muted
        className="background-video"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-2",
          opacity: "0.15" // Specified opacity in theme
        }}
      >
        <source src="/videos/blue-particles.mp4" type="video/mp4" />
      </video>
      <div
        className="gradient-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(10, 37, 64, 0.95), rgba(13, 71, 161, 0.85))",
          zIndex: "-1"
        }}
      ></div>
    </div>
  );
};

// Glassmorphism card component
const GlassCard = ({  icon, title, onClick }) => {
  return (
    <Card
      className="glass-card"
      style={{
        width: "28rem",
        height: "300px",
        background: "linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(121, 134, 203, 0.15))",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px 0 rgba(10, 37, 64, 0.37)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 15px 35px 0 rgba(10, 37, 64, 0.5)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(10, 37, 64, 0.37)";
      }}
    >
      <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
        <Card.Title style={{ fontSize: "50px", color: "#7986cb" }}>
          <i className={icon}></i>
        </Card.Title>
        <h4 className="fs-2 fw-bold" style={{ color: "#e3f2fd" }}>{title}</h4>
        <Button
          onClick={onClick}
          style={{ 
            background: "linear-gradient(135deg, #1976d2, #0d47a1)",
            border: "none",
            borderRadius: "25px",
            padding: "10px 30px",
            marginTop: "24px",
            color: "#ffffff",
            fontWeight: "500",
            boxShadow: "0 4px 15px rgba(25, 118, 210, 0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          }}
          className="mt-3 w-75"
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(25, 118, 210, 0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(25, 118, 210, 0.3)";
          }}
        >
          Apply
        </Button>
      </Card.Body>
    </Card>
  );
};

// Custom glass input component
const GlassInput = ({ type, placeholder, onChange, className }) => {
  return (
    <div className="glass-input-container" style={{ marginBottom: "20px", position: "relative" }}>
      <i 
        className={`fa-solid ${
          type === "text" ? "fa-user" : 
          type === "number" ? "fa-phone" : 
          type === "date" ? "fa-calendar" : 
          type === "file" ? "fa-file" : "fa-pen"
        }`} 
        style={{ 
          position: "absolute", 
          left: "15px", 
          top: "50%", 
          transform: "translateY(-50%)",
          color: "#7986cb"
        }}
      ></i>
      <input
        onChange={onChange}
        className={`form-control ${className}`}
        required
        type={type}
        placeholder={placeholder}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          borderRadius: "25px",
          color: type === "date" ? "#222831" : "#222831", // dark text for all, especially date
          fontWeight: 500,
          padding: "12px 20px 12px 45px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease"
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = "0 5px 15px rgba(121, 134, 203, 0.3)";
          e.target.style.borderColor = "#7986cb";
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
          e.target.style.borderColor = "rgba(255, 255, 255, 0.18)";
        }}
      />
    </div>
  );
};

// Custom glass modal
const GlassModal = ({ show, onHide, title, icon, children, onSubmit }) => {
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      backdropClassName="modal-backdrop"
      style={{ zIndex: 1050 }}
    >
      <Modal.Header
        style={{
          background: "linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(13, 71, 161, 0.3))",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        closeButton
      >
        <Modal.Title className="d-flex align-items-center" style={{ color: "#222831" }}>
          <i className={`${icon} me-2`}></i> {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          background: "linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(13, 71, 161, 0.2))",
          backdropFilter: "blur(12px)",
          padding: "20px"
        }}
      >
        {children}
      </Modal.Body>
      <Modal.Footer
        style={{
          background: "linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(13, 71, 161, 0.2))",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        <Button 
          className="text-dark"
          variant="secondary" 
          onClick={onHide}
          style={{
            background: "rgba(227, 242, 253, 0.2)",
            backdropFilter: "blur(5px)",
            border: "none",
            borderRadius: "25px",
            color: "#222831", // dark text
            fontWeight: 600,
            transition: "all 0.3s ease"
          }}
        >
          Close
        </Button>
        <Button 
          variant="primary" 
          onClick={onSubmit}
          style={{
            background: "linear-gradient(135deg, #e3f2fd, #b0b6c9)", // lighter bg for contrast
            border: "none",
            borderRadius: "25px",
            color: "#222831", // dark text
            fontWeight: 600,
            transition: "all 0.3s ease"
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

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
  const [preView, setPreView] = useState("");
  const [iseLoggedin, setIsLoggedin] = useState(false);
  const [show, setShow] = useState(false);
  const [showModal, setModalShow] = useState(false);
  const [showMod, setModShow] = useState(false);
  const [popshow, setPopShow] = useState(false);
  const [poptarget, PopsetTarget] = useState(null);
  const [notification, setNotification] = useState([]);
  
  const popoverRef = useRef(null);

  // Handle complaint file preview
  useEffect(() => {
    if (
      ServiceApplication.complaint &&
      ServiceApplication.complaint.type === "application/pdf"
    ) {
      const viewComplaint = URL.createObjectURL(ServiceApplication.complaint);
      console.log(viewComplaint)
      setPreView("File uploaded successfully");
    }
  }, [ServiceApplication.complaint]);

  // Check if user is logged in
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [iseLoggedin]);

  // Get notifications
  useEffect(() => {
    getServiceUPdate();
  }, [render]);

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

  // Modal handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);
  const handleModClose = () => setModShow(false);
  const handleModShow = () => setModShow(true);

  // Notification popover handler
  const handlePopClick = (event) => {
    setPopShow(!popshow);
    PopsetTarget(event.target);
  };

  // Clear notifications
  const onClear = async () => {
    const Header = {
      Authorization: `bearer ${sessionStorage.getItem("token")}`,
    };
    try {
      const apiresp = clearNotify(Header);
      setRender(apiresp);
      handlePopClick();
    } catch (error) {
      console.log(error);
    }
  };

  // Submit complaint
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
          alert("Complaint registered successfully");
          handleClose();
        } else {
          alert("Unable to send complaint. Please try again later.");
        }
      } catch (error) {
        console.log("API error:", error);
      }
    } else {
      alert("Please fill all required fields");
    }
  };

  // Submit service request
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
        const Header = { Authorization: `bearer ${sessionStorage.getItem("token")}` };
        const apiResponse = await onserviceApplication(payload, Header);
        if (apiResponse.status === 200) {
          alert("Request sent successfully");
          handleModalClose();
        } else {
          alert("Request sending failed. Please try again later.");
        }
      } catch (error) {
        console.log(error, "Server error");
      }
    } else {
      alert("Please fill all required details");
    }
  };

  // Book appointment
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
        const Header = { Authorization: `bearer ${sessionStorage.getItem("token")}` };
        const apiResponse = await onserviceApplication(payload, Header);
        if (apiResponse.status === 200) {
          alert("Appointment request sent successfully");
          handleModClose();
        } else {
          alert("Please try again later for booking");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill all required details");
    }
  };

  return (
    <div style={{ background: "#0a2540", minHeight: "100vh", overflow: "hidden" }}>
      <BackgroundVideo />
      
      {/* Header Section */}
      <div
        className="d-flex justify-content-center align-items-center position-relative"
        style={{
          height: "120px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        <div ref={popoverRef} className="position-absolute" style={{ left: "20px", top: "50%", transform: "translateY(-50%)" }}>
          <button
            onClick={handlePopClick}
            className="btn"
            style={{
              background: "linear-gradient(135deg, rgba(25, 118, 210, 0.3), rgba(13, 71, 161, 0.5))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              color: "#e3f2fd",
              transition: "all 0.3s ease"
            }}
          >
            <i className="fa-solid fa-bell fa-lg"></i>
          </button>

          <Overlay
            show={popshow}
            target={poptarget}
            placement="bottom"
            container={popoverRef.current}
            containerPadding={20}
          >
            <Popover 
              id="popover-contained"
              style={{
                background: "linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(13, 71, 161, 0.3))",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                color: "#e3f2fd"
              }}
            >
              <Popover.Header 
                as="h3" 
                style={{
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "linear-gradient(135deg, rgba(25, 118, 210, 0.3), rgba(13, 71, 161, 0.4))",
                  color: "#ffffff",
                  padding: "12px 16px"
                }}
              >
                Notifications
              </Popover.Header>
              <Popover.Body style={{ height: "300px", width: "300px", padding: "16px" }}>
                <ul style={{ listStyleType: "none", padding: "0" }}>
                  {notification?.length > 0 ? (
                    notification?.map((data, index) => (
                      <li 
                        key={index}
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#e3f2fd"
                        }}
                      >
                        {data.message}
                      </li>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <i className="fa-regular fa-bell-slash fa-2x mb-3" style={{ color: "rgba(227, 242, 253, 0.6)" }}></i>
                      <p>No notifications</p>
                    </div>
                  )}
                </ul>
              </Popover.Body>

              <button
                className="btn w-100"
                onClick={onClear}
                style={{
                  background: "linear-gradient(135deg, #1976d2, #0d47a1)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "0 0 12px 12px",
                  padding: "12px",
                  transition: "all 0.3s ease"
                }}
              >
                Clear All <i className="fa-solid fa-broom ms-1"></i>
              </button>
            </Popover>
          </Overlay>
        </div>

        <h1 className="text-center m-0" style={{ color: "#e3f2fd", fontWeight: "600", letterSpacing: "1px" }}>
          SERVICES <i className="fa-solid fa-server ms-2"></i>
        </h1>
      </div>

      {/* Services Cards Section */}
      <div className="container">
        <div className="row justify-content-center py-5 mt-3 gap-4">
          {/* File Complaint Card */}
          <div className="col-md-4">
            <GlassCard 
              icon="fa-solid fa-pen-to-square" 
              title="File a Complaint" 
              onClick={handleShow}
            />
          </div>
          
          {/* Request Services Card */}
          <div className="col-md-4">
            <GlassCard 
              icon="fa-solid fa-suitcase" 
              title="Request Police Activities" 
              onClick={handleModalShow}
            />
          </div>
          
          {/* Visit Inmates Card */}
          <div className="col-md-4">
            <GlassCard 
              icon="fa-solid fa-handshake-angle" 
              title="Visit Inmates" 
              onClick={handleModShow}
            />
          </div>
        </div>
        
        {/* Logout Button */}
        <div className="text-center my-5">
          <Link to="/local">
            <Button
              style={{
                background: "linear-gradient(135deg, rgba(25, 118, 210, 0.4), rgba(13, 71, 161, 0.6))",
                backdropFilter: "blur(8px)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "30px",
                padding: "12px 40px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                fontSize: "16px",
                fontWeight: "500"
              }}
              className="btn-logout"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
              }}
            >
              Log Out <i className="fa-solid fa-right-from-bracket ms-2"></i>
            </Button>
          </Link>
        </div>
      </div>

      {/* Modals */}
      {/* File Complaint Modal */}
      <GlassModal
        show={show}
        onHide={handleClose}
        title="File a Complaint"
        icon="fa-solid fa-pen-to-square"
        onSubmit={onApplly}
      >
        <GlassInput
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              name: e.target.value,
            });
          }}
        />
        <GlassInput
          type="date"
          className="text-dark"
          placeholder="Enter date of submission"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              Date: e.target.value,
            });
          }}
        />
        <GlassInput
          type="number"
          placeholder="Enter your contact number"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              number: e.target.value,
            });
          }}
        />
        <div className="glass-file-upload" style={{ marginBottom: "20px" }}>
          <div 
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px dashed rgba(255, 255, 255, 0.3)",
              borderRadius: "12px",
              padding: "25px 15px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(121, 134, 203, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <i className="fa-solid fa-file-pdf fa-2x mb-3" style={{ color: "#7986cb" }}></i>
            <p style={{ color: "black", marginBottom: "5px" }}>
              Upload Written Complaint (PDF)
            </p>
            <p style={{ color: "rgba(0, 0, 0, 0.97)", fontSize: "14px" }}>
              {preView ? preView : "Click to upload or drag and drop"}
            </p>
            <input
              type="file"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer"
              }}
              onChange={(e) => {
                setServiceApplication({
                  ...ServiceApplication,
                  complaint: e.target.files[0],
                });
              }}
            />
          </div>
        </div>
      </GlassModal>

      {/* Request Service Modal */}
      <GlassModal
        show={showModal}
        onHide={handleModalClose}
        title="Request Police Activities"
        icon="fa-solid fa-suitcase"
        onSubmit={onServiceRequest}
      >
        <GlassInput
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              name: e.target.value,
            });
          }}
        />
        <GlassInput
          type="date"
          className="text-dark"
          placeholder="Enter date of submission"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              Date: e.target.value,
            });
          }}
        />
        <GlassInput
          type="number"
          placeholder="Enter your contact number"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              number: e.target.value,
            });
          }}
        />
        <div className="glass-textarea-container" style={{ marginBottom: "20px", position: "relative" }}>
          <i 
            className="fa-solid fa-comment" 
            style={{ 
              position: "absolute", 
              left: "15px", 
              top: "20px", 
              color: "#7986cb"
            }}
          ></i>
          <textarea
            onChange={(e) => {
              setServiceApplication({
                ...ServiceApplication,
                description: e.target.value,
              });
            }}
            className="form-control"
            required
            placeholder="Short description of the required service"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: "12px",
              color: "#e3f2fd",
              padding: "12px 20px 12px 45px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              minHeight: "120px",
              resize: "vertical"
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = "0 5px 15px rgba(121, 134, 203, 0.3)";
              e.target.style.borderColor = "#7986cb";
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.18)";
            }}
          ></textarea>
        </div>
      </GlassModal>

      {/* Visit Inmates Modal */}
      <GlassModal
        show={showMod}
        onHide={handleModClose}
        title="Visit Inmates"
        icon="fa-solid fa-handshake-angle"
        onSubmit={onBookingAppontment}
      >
        <GlassInput
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              name: e.target.value,
            });
          }}
        />
        <GlassInput
          type="text"
          placeholder="Enter your father's name"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              fathersname: e.target.value,
            });
          }}
        />
        <GlassInput
          type="number"
          placeholder="Enter your contact number"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              number: e.target.value,
            });
          }}
        />
        <GlassInput
          type="text"
          placeholder="Enter inmate name"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              criminalname: e.target.value,
            });
          }}
        />
        <GlassInput
          type="text"
          placeholder="Relationship with inmate"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              relationship: e.target.value,
            });
          }}
        />
        <GlassInput
          type="date"
          placeholder="Date of visit"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              Date: e.target.value,
            });
          }}
        />
        <GlassInput
          type="text"
          placeholder="Time of visit"
          onChange={(e) => {
            setServiceApplication({
              ...ServiceApplication,
              visitingtime: e.target.value,
            });
          }}
        />
        <div className="glass-textarea-container" style={{ marginBottom: "20px", position: "relative" }}>
          <i 
            className="fa-solid fa-comment" 
            style={{ 
              position: "absolute", 
              left: "15px", 
              top: "20px", 
              color: "#7986cb"
            }}
          ></i>
          <textarea
            onChange={(e) => {
              setServiceApplication({
                ...ServiceApplication,
                visitingreason: e.target.value,
              });
            }}
            className="form-control"
            required
            placeholder="Reason for visit"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: "12px",
              color: "black",
              padding: "12px 20px 12px 45px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              minHeight: "120px",
              resize: "vertical"
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = "0 5px 15px rgba(121, 134, 203, 0.3)";
              e.target.style.borderColor = "#7986cb";
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.18)";
            }}
          ></textarea>
        </div>
      </GlassModal>

      {/* Custom CSS */}
      <style jsx>{`
        /* Base styles */
        body {
          font-family: 'Poppins', sans-serif;
          color: #e3f2fd;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(25, 118, 210, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(25, 118, 210, 0.7);
        }
        
        /* Modal backdrop customization */
        .modal-backdrop {
          background-color: rgba(10, 37, 64, 0.8) !important;
          backdrop-filter: blur(5px) !important;
        }
        
        /* Button hover animation */
        .btn-logout:hover {
          text-decoration: none;
          color: #ffffff !important;
        }
        
        /* Form focus effects */
        .form-control:focus {
          box-shadow: 0 0 0 0.25rem rgba(121, 134, 203, 0.25);
          border-color: #7986cb;
        }
        
        /* Link styling */
        a {
          color: #7986cb;
          transition: all 0.3s ease;
          position: relative;
        }
        
        a:hover {
          color: #e3f2fd;
        }
        
        a.animated-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #7986cb;
          transition: width 0.3s ease;
        }
        
        a.animated-link:hover:after {
          width: 100%;
        }
        
        /* Modal close button custom styling */
        .btn-close {
          filter: invert(1) brightness(200%);
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        
        .btn-close:hover {
          opacity: 1;
        }
        
        /* Card container responsive fixes */
        @media (max-width: 992px) {
          .row.justify-content-center {
            flex-direction: column;
            align-items: center;
          }
          
          .glass-card {
            width: 90% !important;
            margin-bottom: 30px;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Services;