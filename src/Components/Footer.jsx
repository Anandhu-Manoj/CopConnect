import React from "react";
import Flogo from "../assets/Flogo.png"
const Footer = () => {
  return (
    <div style={{ margin: "0px",
      padding: '0px',boxSizing:"border-box"}}>
      <div 
        style={{
          marginTop:"100px",
          height: "100px",
          width: "100%",
          backgroundColor: "#796F57",
          position: "relative",
          bottom: "0",
          zIndex: "1",
         
        }}
      >
        <img 
          style={{
            width: "100%",
            position: "absolute",
            bottom: "10px",
            zIndex: "-1",
            marginTop:"50px"
          }}
          src="https://www.shjpolice.gov.ae/images/curves/lg-curve.png"
          alt=""
        />
         <div
        style={{
          position: "absolute",
          bottom: "100px",
          right: "10px",
          zIndex: "1",
        }}
      >
        <img
          className="img-fluid"
          width={"60px"}
          src={Flogo}
          alt=""
        />
      </div>
        <div className="row">
          <div className="col-2 ms-5 text-white">
            number of visitors <br />{" "}
            <span style={{ fontWeight: "bold" }}>
              38 million <i className="fa-solid fa-users"></i>{" "}
            </span>
          </div>

          <div className="col-1 text-white">
            Contact Us <i className="fa-solid fa-address-card"></i>
          </div>
          <div className="col-8">
            <ul
              className="d-flex  justify-center align-inline gap-1 text-white"
              style={{ listStyle: "none" }}
            >
              <li>Disclaimer</li>|<li>Copyright</li>|<li>Privacy polict</li>|
              <li>Site map</li>|
              <li>We promises for future service</li>|
              <li>Accessibility</li>|<li>Terms and conditions</li>|
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-center text-white">
          All rights reserved @ 2025
        </div>
      </div>

     
    </div>
  );
};

export default Footer;
