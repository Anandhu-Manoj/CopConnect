import React from "react";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import LogoL from "../assets/sideLogo.png";
import LogoR from "../assets/logo.png";
import Flogo from "../assets/Flogo.png";

// Glassmorphism and dark blue theme
const DARK_BLUE = "#0a2540";
const GLASS_BG = "rgba(13, 71, 161, 0.25)";
const GLASS_BORDER = "1px solid rgba(255,255,255,0.18)";
const GLASS_SHADOW = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
const GLASS_BACKDROP = "blur(8px)";

const glassButtonStyle = {
  background: GLASS_BG,
  border: GLASS_BORDER,
  boxShadow: GLASS_SHADOW,
  backdropFilter: GLASS_BACKDROP,
  WebkitBackdropFilter: GLASS_BACKDROP,
  color: "#fff",
  fontWeight: 500,
  borderRadius: "12px",
  transition: "background 0.3s, box-shadow 0.3s",
};

const Header = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const [popshow, setPopShow] = useState(false);
  const [poptarget, PopsetTarget] = useState(null);
  const popoverRef = useRef(null);

  const handlePopClick = (event) => {
    setPopShow(!popshow);
    PopsetTarget(event.target);
  };

  return (
    <div style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}>
      <div style={{ height: "100px", width: "100%", backgroundColor: "rgba(10,37,64,0.5)" }}>
        <img
          className="ms-5"
          height={"100px"}
          src={LogoL}
          alt=""
        />
        <img
          className="img-fluid mt-3"
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
          backgroundColor: DARK_BLUE,
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(13,71,161,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: "1px",
            marginBottom: 0,
          }}
        >
          CopConnect
          <i className="fa-solid fa-bars-staggered ms-3"></i>
        </h1>
        <div ref={popoverRef} className="mb-5">
          <button
            onClick={handlePopClick}
            className="btn"
            style={{
              ...glassButtonStyle,
              fontSize: "20px",
              position: "absolute",
              left: "300px",
              padding: "8px 16px",
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
              <Popover.Header as="h3" style={{ backgroundColor: DARK_BLUE, color: "#fff" }}>
                Notifications
              </Popover.Header>
              <Popover.Body style={{ height: "300px", width: "300px" }}>
                <strong>no notifications</strong> Check this info.
              </Popover.Body>
              <button
                style={{
                  ...glassButtonStyle,
                  width: "100%",
                  marginTop: "8px",
                  background: "rgba(10,37,64,0.5)",
                }}
                className="btn"
              >
                Clear all
              </button>
            </Popover>
          </Overlay>
        </div>

        <Link to={"/localac"}>
          <button
            className="rounded-3"
            style={{
              ...glassButtonStyle,
              width: "300px",
              height: "45px",
              marginLeft: "16px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <i className="fa-solid fa-fingerprint me-3"></i> sign up with ID Proof
          </button>
        </Link>

        <div ref={ref}>
          <Button
            className="m-0 border-0"
            style={{
              ...glassButtonStyle,
              padding: "8px 20px",
              fontSize: "16px",
            }}
            onClick={handleClick}
          >
            <i className="fa-solid fa-language"></i> Languages{" "}
            <i className="fa-solid fa-caret-down"></i>
          </Button>
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Header as="h3" style={{ backgroundColor: DARK_BLUE, color: "#fff" }}>
                Languages
              </Popover.Header>
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
              alignItems: "center",
            }}
          >
            <li
              style={{
                cursor: "pointer",
                color: "#fff",
                transition: "color 0.3s",
                fontWeight: "500",
              }}
            >
              <button
                className="btn m-0"
                style={{
                  ...glassButtonStyle,
                  padding: "8px 20px",
                  fontSize: "16px",
                }}
              >
                Home <i className="fa-solid fa-house"></i>
              </button>
            </li>
            <li
              className="mt-1"
              style={{
                cursor: "pointer",
                color: "#b3c6e0",
                transition: "color 0.3s",
                fontWeight: "500",
              }}
            >
              About
            </li>
            <li
              className="mt-1"
              style={{
                cursor: "pointer",
                color: "#b3c6e0",
                transition: "color 0.3s",
                fontWeight: "500",
              }}
            >
              Contact
            </li>
            <li
              style={{
                cursor: "pointer",
                color: "#b3c6e0",
                transition: "color 0.3s",
                fontWeight: "500",
              }}
            >
              <Link to={"/login"}>
                <button
                  style={{
                    ...glassButtonStyle,
                    padding: "8px 20px",
                    fontSize: "16px",
                  }}
                  className="btn"
                >
                  Login <i className="fa-solid fa-right-to-bracket"></i>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;