import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Localac = () => {
  return (
    <div style={{ margin: "0px",
      padding: '0px',boxSizing:"border-box"}}>
      <div
        className="d-flex justify-content-center align-items-center flex-column text-center gap-3 mt-3"
        style={{ height: "110vh", marginTop: "100px" }}
      >
        <h2>
          <i className="fa-solid fa-fingerprint fs-1 fw-bolder"></i>
        </h2>
        <h2 className="d-flex justify-content-center">Sign up</h2>
        <label>
          <input
            style={{ height: "70px", display: "none" }}
            className="form-control w-25 shadow rounded-3"
            type="file"
            name=""
            id=""
            placeholder="upload your id"
          />
          <h4>Upload your ID</h4>
          <div
            className="w-25"
            style={{
              overflow: "hidden",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px"
            }}
          >
            <img
              src="https://www.medianama.com/wp-content/uploads/2023/03/aadhaar-card-7579588_1280.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </label>
        <input
          style={{ height: "50px" }}
          className="form-control w-25 shadow rounded-3"
          type="text"
          name=""
          id=""
          placeholder="Add user name"
        />
        <input
          style={{ height: "50px" }}
          className="form-control w-25 shadow rounded-3"
          type="text"
          name=""
          id=""
          placeholder="Enter your address details"
        />
        <input
          style={{ height: "50px" }}
          className="form-control w-25 shadow rounded-3"
          type="password"
          name=""
          id=""
          placeholder="Create your password"
        />
        <input
          style={{ height: "50px" }}
          className="form-control w-25 shadow rounded-3"
          type="text"
          name=""
          id=""
          placeholder="Enter your Aadhar number"
        />
        <button
          className="w-25 rounded-3 border-0 shadow mt-2"
          style={{ height: "50px", backgroundColor: "#ADB2D4" }}
        >
          Sign Up
        </button>
        <div className="mt-3">
          <p>
            <Link to="/local" className="text-success">
              Back to login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Localac;