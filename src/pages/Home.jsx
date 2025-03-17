import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="ms-5 me-5 " ><marquee    behavior="" direction=""  >
        Welcome to CopConnect - Your Digital Police Service Portal | File
        Complaints | Book Appointments | Manage Criminal Data | Secure &
        Transparent Policing{" "}
      </marquee></div>
      

      <Footer />
    </div>
  );
};

export default Home;
