import React from "react";
import Footer from "../Components/Footer";

const Odash = () => {
  return (
    <div>
      <div style={{ height: "100vh" ,backgroundColor:"#F5F1E6"}}>
        <nav
          className="navbar "
          style={{ backgroundColor: "#796F57", height: "100px" }}
        >
          <div className="container-fluid">
            <div
              className="img-fluid "
              style={{ height: "70px", width: "70px" }}
            >
              <img
                style={{ width: "100%" }}
                src="https://t4.ftcdn.net/jpg/07/29/34/35/360_F_729343514_Vd1VfwOsVmsvhMiR32V11yINk9Szo2Yq.jpg"
                alt=""
              />
            </div>
          </div>
        </nav>
        <center><h2 style={{backgroundColor:"#FAFAFA"}}>Welcome OFFICER <i className="fa-solid fa-building-shield"></i></h2></center>


      </div>

      <Footer />
    </div>
  );
};

export default Odash;
