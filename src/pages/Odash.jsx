import React from "react";
import Footer from "../Components/Footer";
import Logo from "../assets/sideLogo.png";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement } from "chart.js";
import { Button } from "react-bootstrap";

const Odash = (Tooltip, Legend, ArcElement) => {
  return (
    <div className="m-0">
      <div
        style={{
          height: "100vh",
          backgroundColor: "#EAD196",
          backgroundImage: "url('')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <nav
          className="navbar "
          style={{ backgroundColor: "#796F57", height: "100px" }}
        >
          <div className="container-fluid">
            <div
              className="img-fluid "
              style={{ height: "70px", width: "70px" }}
            >
              <img style={{ width: "100%" }} src={Logo} alt="" />
            </div>
            <div className="d-flex gap-3 ">
            <Button>Punch IN</Button>
            <Button>Apply Leave</Button>

            </div>

            
          </div>
        </nav>
        <center>
          <h2
            style={{ backgroundColor: "#543A14" }}
            className="fs-1 fw-bold text-white"
          >
            {" "}
            OFFICER PORT <i className="fa-solid fa-building-shield"></i>
          </h2>
        </center>

        <div className="row">
          <div className="col-5 rounded-4 overflow-hidden  ">
            {/* <img
              className="img-fluid overflow-hidden"
              src="https://vizzlo.com/site/uploads/pie-chart-lines-new-styling_text.gif"
              alt=""
            />{" "} */}
          </div>
          <div className="col-7 m-0 rounded-5 container" style={{position:"relative",backgroundImage:"url()",backgroundColor:"#796F57",height:"400px"}}>
            <div className="d-flex flex-column ">
              
              <div className="mt-3"
                style={{
                  height: "200px",
                  width: "200px",
                  overflow: "hidden",
                  position: "absolute",
                  right: "30px",
                }}
              >
                <img
                  className="img-fluid"
                  src="https://garhwalpost.in/wp-content/uploads/2023/12/facebook_1657033495063_6950102216479217718.jpg"
                  alt=""
                />
              </div>
              <div className="mt-3 text-white ms-5" style={{position:"absolute",left:"0",}}>
             <p className="fs-5 fw-bold "> <span >Name: </span>Sarath</p>
              <p className="fs-5 fw-bold">
                <span> Fathers Name: </span>Lal
              </p>

              <p className="fs-5 fw-bold">
                <span>Batch No :</span>12
              </p>
              <p className="fs-5 fw-bold">
                <span>Phone No :</span>9876455448
              </p>
              <p className="fs-5 fw-bold">
                <span>Designation :</span>D.S.P
              </p>
              <p className="fs-5 fw-bold">
                <span>Station Of Duty :</span>Pattom
              </p>
              <p className="fs-5 fw-bold">
                <span>Task Status: </span>Completed
              </p>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Odash;
