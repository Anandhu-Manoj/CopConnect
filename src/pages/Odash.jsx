import React from "react";
import Footer from "../Components/Footer";
import Logo from "../assets/sideLogo.png";
import sideLogo from "../assets/logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Odash = () => {
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
                height:"75px",
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

              <div className="d-flex align-content-center ms-5">
          <h2
            style={{  padding: "10px " }}
            className="fs-1 fw-bold text-white ms-5 "
          >
            OFFICER PORTAL <i className="fa-solid fa-building-shield"></i>
          </h2>
        </div >

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
                      style={{ backgroundColor: "#6D6249" }}
                      className="btn text-white"
                    >
                      Apply Leave{" "}
                      <i className="fa-solid fa-couch"></i>
                    </button>
                  </li>
                  <Link to={'/login'}
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
                src="https://raw.githubusercontent.com/Spyna/react-svg-radar-chart/HEAD/demo.gif"
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
                  border: "5px solid #796F57",
                }}
              >
                <img
                  className="img-fluid"
                  src="https://garhwalpost.in/wp-content/uploads/2023/12/facebook_1657033495063_6950102216479217718.jpg"
                  alt="Officer"
                />
              </div>
              <div className="mt-3 text-dark" style={{ paddingLeft: "20px" }}>
                <p className="fs-5 fw-bold">
                  <span>Name: </span>Sarath
                </p>
                <p className="fs-5 fw-bold">
                  <span>Father's Name: </span>Lal
                </p>
                <p className="fs-5 fw-bold">
                  <span>Batch No: </span>12
                </p>
                <p className="fs-5 fw-bold">
                  <span>Phone No: </span>9876455448
                </p>
                <p className="fs-5 fw-bold">
                  <span>Designation: </span>D.S.P
                </p>
                <p className="fs-5 fw-bold">
                  <span>Station Of Duty: </span>Pattom
                </p>
                <p className="fs-5 fw-bold">
                  <span>Casses Assigned : </span><button className="btn  w-25 text-white" style={{backgroundColor:"#6D6249"}}>View <i class="fa-solid fa-eye"></i></button>
                </p>
                <p className="fs-5 fw-bold">
                  <span>Service period: </span>10
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
                  <th className="p-3">Cell Number</th>
                  <th className="p-3">Total Years of Sentence</th>
                  <th className="p-3">Admitted Date</th>
                  <th className="p-3">Relieving Date</th>
                </tr>
              </thead>

              <tbody>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                </tr>
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
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td className="p-3">Akhil</td>
                  <td className="p-3">Ajith</td>
                  <td className="p-3">808045533357</td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Friend</td>
                  <td className="p-3">10-5-2010</td>
                  <td className="p-3">Casual visit</td>
                  <td className="p-3">10-05-2010</td>
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

      <Footer />
    </div>
  );
};

export default Odash;
