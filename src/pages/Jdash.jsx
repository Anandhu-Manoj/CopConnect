import React from "react";
import Logo from "../assets/sideLogo.png";
import sideLogo from "../assets/logo.png";
import Video from "../assets/Jbg.mp4";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Jdash = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="relative min-h-screen overflow-hidden "
      style={{ height: "100%" }}
    >
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
              <button
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

              <div
                className="d-flex align-content-center ms-5"
                style={{ position: "absolute", left: "400px" }}
              >
                <h2
                  style={{ padding: "10px " }}
                  className="fs-1 fw-bold text-white   "
                >
                  ADMINISTRATION PORTAL{" "}
                  <i className="fa-solid fa-scale-balanced"></i>
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
                  <li>
                    <Link to={"/cr"}>
                      {" "}
                      <button
                        style={{ backgroundColor: "#6D6249" }}
                        className="btn text-white"
                      >
                        Crime Records{""}
                        <i className="fa-solid fa-right-to-bracket"></i>
                      </button>
                    </Link>
                  </li>
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

        <div>
          <div className="row ms-5 mb-5">
            <div
              className=" d-flex align-items-center justify-content-center col-2"
              style={{
                height: "250px",
                width: "450px",
                // position: "absolute",
                // top: "250px",
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
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
                style={{ color: " #796F57" }}
              >
                Welcome
              </h3>
              <button onClick={handleShow}
                className="btn text-white"
                style={{
                  position: "absolute",
                  left: "100px",
                  top: "390px",
                  backgroundColor: "#796F57",
                }}
              >
                service requests <i class="fa-solid fa-server"></i>
              </button>

              <Modal centered size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ms-5">SERVICE REQUESTS <i class="fa-solid fa-server"></i></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="table-responsive me-2">
              {" "}
              <table
                className=" table-bordered text-center ms-3 me-5 mb-5"
                style={{
                  backgroundColor: "#d9d9d9",
                  borderColor: "#796F57",
                  overflow: "hidden",

                  borderCollapse: "collapse",
                }}
              >
                <thead
                  className="rounded-3 mb-4"
                  style={{
                    backgroundColor: "#796F57",
                    color: "white",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  <tr>
                    <th style={{ padding: "10px" }}>Civilian Name</th>
                    <th style={{ padding: "10px" }}>Date of Submission</th>
                    <th style={{ padding: "10px" }}>Requested service</th>
                    <th style={{ padding: "10px" }}>Civilian number</th>
                    <th style={{ padding: "10px" }}>Decision</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                    <td style={{ padding: "5px" }}>Abhishek</td>
                    <td style={{ padding: "5px" }}>2-5-2018</td>
                    <td style={{ padding: "5px" }}>
                   Guarding
                    </td>
                    <td style={{ padding: "5px" }}>7878772212148</td>
                    <td style={{ padding: "5px" }}>
                      <button
                        className="btn btn-success"
                        style={{ marginBottom: "2px" }}
                      >
                        Accepted<i class="fa-solid fa-check"></i>
                      </button>{" "}
                      <br />
                      <button
                        style={{ marginRight: "2px" }}
                        className="btn btn-danger"
                      >
                        Reject <i className="fa-solid fa-square-xmark"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                className=" table-bordered text-center ms-3 me-5 mb-5"
                style={{
                  backgroundColor: "#d9d9d9",
                  borderColor: "#796F57",
                  overflow: "hidden",

                  borderCollapse: "collapse",
                }}
              >
                <thead
                  className="rounded-3 mb-4"
                  style={{
                    backgroundColor: "#796F57",
                    color: "white",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  <tr>
                    <th style={{ padding: "10px" }}>Officer Name</th>
                    <th style={{ padding: "10px" }}>Date of Submission</th>
                    <th style={{ padding: "10px" }}>Requested service</th>
                    <th style={{ padding: "10px" }}>Officer number</th>
                    <th style={{ padding: "10px" }}>Decision</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                    <td style={{ padding: "5px" }}>sharath</td>
                    <td style={{ padding: "5px" }}>2-5-2018</td>
                    <td style={{ padding: "5px" }}>
                   Guarding
                    </td>
                    <td style={{ padding: "5px" }}>987455874587</td>
                    <td style={{ padding: "5px" }}>
                      <button
                        className="btn btn-success"
                        style={{ marginBottom: "2px" }}
                      >
                        Accepted<i class="fa-solid fa-check"></i>
                      </button>{" "}
                      <br />
                      <button
                        style={{ marginRight: "2px" }}
                        className="btn btn-danger"
                      >
                        Reject <i className="fa-solid fa-square-xmark"></i>
                      </button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>


            </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
            </div>
            <div className="col-8 table-responsive me-2">
              {" "}
              <table
                className=" table-bordered text-center ms-3 me-5"
                style={{
                  backgroundColor: "#d9d9d9",
                  borderColor: "#796F57",
                  overflow: "hidden",

                  borderCollapse: "collapse",
                }}
              >
                <thead
                  className="rounded-3 mb-4"
                  style={{
                    backgroundColor: "#796F57",
                    color: "white",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  <tr>
                    <th style={{ padding: "10px" }}>Petition Number</th>
                    <th style={{ padding: "10px" }}>Date of Submission</th>
                    <th style={{ padding: "10px" }}>Status</th>
                    <th style={{ padding: "10px" }}>Officer Assigned</th>
                    <th style={{ padding: "10px" }}>Decision</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                    <td style={{ padding: "10px" }}>156</td>
                    <td style={{ padding: "10px" }}>2-5-2018</td>
                    <td style={{ padding: "10px" }}>
                      <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Reject <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button>
                    </td>
                    <td style={{ padding: "10px" }}>Sarath</td>
                    <td style={{ padding: "10px" }}>
                      <button
                        className="btn btn-success"
                        style={{ marginBottom: "5px" }}
                      >
                        Case Closed <i class="fa-solid fa-check"></i>
                      </button>{" "}
                      <br />
                      <button className="btn btn-warning p-2">
                        Postponed for Further Review{" "}
                        <i className="fa-solid fa-timeline"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              
            </div>
          </div>

          <section className="container mt-5">
            <div className="text-center">
              <h2
                className="fw-bold text-white p-3 rounded-3"
                style={{ backgroundColor: "#796F57" }}
              >
                OFFICERS RECORDS
              </h2>{" "}
              <button className="btn btn-light shadow ">ADD OFFICERS</button>
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
                    <th className="p-3">Name</th>
                    <th className="p-3">Fathers Name</th>
                    <th className="p-3">Batch Number</th>
                    <th className="p-3">Phone number</th>
                    <th className="p-3">Designation</th>
                    <th className="p-3">Circle of Duty</th>
                    <th className="p-3">Service period</th>
                    <th className="p-3">Review</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                    <td className="p-3">Arun</td>
                    <td className="p-3">Nath</td>
                    <td className="p-3">10</td>
                    <td className="p-3">808045457721</td>
                    <td className="p-3">SI</td>
                    <td className="p-3">PATTOM</td>
                    <td className="p-3">10</td>
                    <td className="p-3">
                      {" "}
                      <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="container mt-5">
            <div className="text-center">
              <h2
                className="fw-bold text-white p-3 rounded-3"
                style={{ backgroundColor: "#796F57" }}
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
                    <th className="p-3">Name</th>
                    <th className="p-3">Batch Number</th>
                    <th className="p-3">Reason</th>
                    <th className="p-3">Reporting Officer</th>
                    <th className="p-3">Circle of Duty</th>
                    <th className="p-3">Leaves Remaining</th>
                    <th className="p-3">Approve/reject</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                    <td className="p-3">Arun</td>
                    <td className="p-3">12</td>
                    <td className="p-3">Sick Leave</td>
                    <td className="p-3">Sarath</td>
                    <td className="p-3">PATTOM</td>
                    <td className="p-3">10</td>
                    <td className="p-3">
                      <Button className="btn m-2 bg-success border-0">
                        Approve <i className="fa-solid fa-check"></i>
                      </Button>
                      <Button className="bg-danger border-0">
                        Reject <i className="fa-solid fa-square-xmark"></i>
                      </Button>
                    </td>
                  </tr>
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
