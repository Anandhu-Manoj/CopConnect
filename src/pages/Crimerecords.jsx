import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/sideLogo.png";
import sideLogo from "../assets/logo.png";
import Footer from '../Components/Footer';

const Crimerecords = () => {
  return (
    
         <div className="relative min-h-screen overflow-hidden " style={{height:"100%"}}>
      
      <div
        className="overflow-hidden"
        style={{
          minHeight: "50vh",

          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div >
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

              <div className="d-flex align-content-center ms-5">
                <h2
                  style={{ padding: "10px " }}
                  className="fs-1 fw-bold text-white ms-5 "
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
                  <li>

                    <Link to={'/jd'}>  <button
                      style={{ backgroundColor: "#6D6249" }}
                      className="btn text-white"
                    >
                      Back{""}
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </button></Link>
                  
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
        <section className="container mt-5 ">
          <center>
            <h2
              className="fw-bold text-white p-3 rounded-3"
              style={{ backgroundColor: "#796F57" }}
            >
              Criminal Records
            </h2><button className="btn btn-light shadow mt-2 ">ADD CRIMINALS</button>
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
                  <th className="p-3">Actions</th>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
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
                  <td className="p-3"> <button
                        style={{ marginRight: "5px" }}
                        className="btn btn-danger"
                      >
                        Remove <i className="fa-solid fa-square-xmark"></i>
                      </button>
                      <button className="btn btn-primary mt-2">
                        Review <i className="fa-solid fa-eye"></i>
                      </button></td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </section>
        </div>
 
<Footer/>
    </div>
  )
}

export default Crimerecords