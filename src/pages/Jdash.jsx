import React from "react";
import Logo from "../assets/sideLogo.png";
import sideLogo from "../assets/logo.png";
import Footer from "../Components/Footer";

const Jdash = () => {
  return (
    <div>

        {/* header  */}
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
                  style={{ padding: "10px " }}
                  className="fs-1 fw-bold text-white ms-5 "
                >
                  ADMINISTRATION PORTAL <i className="fa-solid fa-scale-balanced"></i>
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
                      style={{ backgroundColor: "#6D6249" }}
                      className="btn text-white"
                    >
                      Apply Leave{" "}
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </button>
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
      </div>



      <Footer/>
    </div>
  );
};

export default Jdash;
