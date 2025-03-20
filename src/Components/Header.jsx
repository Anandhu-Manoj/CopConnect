import React from "react";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import LogoL from "../assets/sideLogo.png"
import LogoR from "../assets/logo.png"
import Flogo from "../assets/Flogo.png"
const Header = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div style={{ margin: "0px",
      padding: '0px',boxSizing:"border-box"}}>
      <div style={{ height: "100px", width: "100%", backgroundColor: "white" }}>
        <img
          className="ms-5"
          height={"100px"}
          src={LogoL}
          alt=""
        />
        <img
          className="img-fluid mt-3 "
          style={{ position: "absolute", right: "100px", height: "100px" }}
          src={LogoR}
          alt=""
        />
      </div>
      <header
        style={{
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
          <i class="fa-solid fa-bell"></i>
        </button>

       <Link to={'/local'}> <button
          className="btn-white rounded-3"
          style={{ width: "300px", height: "45px" }}
        >
          <i className="fa-solid fa-fingerprint me-3"> </i> sign in with ID
          Proof
        </button></Link>


        <div ref={ref}>
          <Button className="m-0 border-0" style={{ backgroundColor: "#6D6249" }} onClick={handleClick}>
          <i class="fa-solid fa-language"></i>  Languages  <i class="fa-solid fa-caret-down"></i>
          </Button>

          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Header as="h3">Languages</Popover.Header>
              <Popover.Body>
                <strong>English</strong> Check this info.
              </Popover.Body>
              <Popover.Body>
                <strong>Malayalam</strong> Check this info.
              </Popover.Body>
            </Popover>
          </Overlay>
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
              <button className="btn btn-white text-white m-0 ">
                {" "}
                Home <i class="fa-solid fa-house"></i>
              </button>
            </li>
            <li
              className="mt-1"
              style={{
                cursor: "pointer",
                color: "#F1F1F1",
                transition: "color 0.3s",
              }}
              //   onMouseOver={(e) => e.target.style.color = "#FF4C29"}
              //   onMouseOut={(e) => e.target.style.color = "#F1F1F1"}
            >
              About
            </li>
            <li
              className="mt-1"
              style={{
                cursor: "pointer",
                color: "#F1F1F1",
                transition: "color 0.3s",
              }}
              //   onMouseOver={(e) => e.target.style.color = "#FF4C29"}
              //   onMouseOut={(e) => e.target.style.color = "#F1F1F1"}
            >
              Contact
            </li>
            <li
              style={{
                cursor: "pointer",
                color: "#F1F1F1",
                transition: "color 0.3s",
              }}
              //   onMouseOver={(e) => e.target.style.color = "#FF4C29"}
              //   onMouseOut={(e) => e.target.style.color = "#F1F1F1"}
            >
              <button
                style={{ backgroundColor: "#6D6249" }}
                className="btn  text-white"
              >
                Login <i class="fa-solid fa-right-to-bracket"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
