import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { civilianLogin } from "../Services/AllApis";
import { toast } from "react-toastify";


// Import the video - assuming you're using the same video
import justiceVideo from "../assets/justice.mp4";

const Local = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    aadharNo: "",
  });
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      const apiResponse = await civilianLogin(loginData);
      if (apiResponse.status == 200) {
        sessionStorage.setItem("user", apiResponse.data.user.email);
        sessionStorage.setItem("token", apiResponse.data.token);
        toast.success("Login successful");
        console.log(apiResponse.data);

        navigate("/services");
      } else {
        apiResponse.status == 404;
        toast.error("Please enter correct credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div 
      style={{ 
        margin: 0, 
        padding: 0, 
        boxSizing: "border-box", 
        position: "relative", 
        minHeight: "100vh", 
        backgroundColor: "#0a2540" 
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.15, // Reduced opacity as per theme
        }}
      >
        <source src={justiceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for gradient effect */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(135deg, rgba(25,118,210,0.25) 0%, rgba(13,71,161,0.35) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* <Header /> */}

      {/* Login Card */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "90vh",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="card shadow-lg p-4"
          style={{
            background: "rgba(63, 81, 181, 0.2)", // Using accent color with transparency
            borderRadius: "16px",
            width: "400px",
            maxWidth: "90vw",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(10, 37, 64, 0.37)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="text-center gap-3 d-flex flex-column">
            {/* Icon Circle */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px auto",
                boxShadow: "0 4px 15px rgba(25, 118, 210, 0.4)",
              }}
            >
              <i className="fa-solid fa-fingerprint fs-1" style={{ color: "#ffffff" }}></i>
            </div>
            
            <h2 style={{ color: "#ffffff", fontWeight: 700, marginBottom: "20px" }}>
              Sign Up
            </h2>
            
            {/* Email Input */}
            <div className="input-group mb-3">
              <span className="input-group-text" style={{ 
                background: "rgba(121, 134, 203, 0.3)", 
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRight: "none",
                color: "#e3f2fd"
              }}>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                style={{ 
                  height: "55px", 
                  color: "#ffffff", 
                  background: "rgba(255, 255, 255, 0.1)", 
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderLeft: "none",
                  fontWeight: 500,
                  paddingLeft: "10px"
                }}
                className="form-control shadow"
                type="email"
                placeholder="Email"
              />
            </div>
            
            {/* Password Input */}
            <div className="input-group mb-3">
              <span className="input-group-text" style={{ 
                background: "rgba(121, 134, 203, 0.3)", 
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRight: "none",
                color: "#e3f2fd"
              }}>
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                style={{ 
                  height: "55px", 
                  color: "#ffffff", 
                  background: "rgba(255, 255, 255, 0.1)", 
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderLeft: "none",
                  fontWeight: 500,
                  paddingLeft: "10px"
                }}
                className="form-control shadow"
                type="password"
                placeholder="Password"
              />
            </div>
            
            {/* Aadhar Input */}
            <div className="input-group mb-4">
              <span className="input-group-text" style={{ 
                background: "rgba(121, 134, 203, 0.3)", 
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRight: "none",
                color: "#e3f2fd"
              }}>
                <i className="fa-solid fa-id-card"></i>
              </span>
              <input
                onChange={(e) => setLoginData({ ...loginData, aadharNo: e.target.value })}
                style={{ 
                  height: "55px", 
                  color: "#ffffff", 
                  background: "rgba(255, 255, 255, 0.1)", 
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderLeft: "none",
                  fontWeight: 500,
                  paddingLeft: "10px"
                }}
                className="form-control shadow"
                type="text"
                placeholder="Aadhar Number"
              />
            </div>
            
            {/* Login Button */}
            <button
              onClick={onLogin}
              className="rounded-pill border-0 shadow mt-2"
              style={{
                height: "55px",
                background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
                color: "#ffffff",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              LOGIN
            </button>
            
            {/* Back Button */}
            <Link to={"/"} className="mt-3">
              <button
                className="rounded-pill border-0 shadow"
                style={{
                  height: "45px",
                  width: "150px",
                  background: "rgba(121, 134, 203, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  fontWeight: "bold",
                  transition: "transform 0.3s ease, background 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.background = "rgba(121, 134, 203, 0.5)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(121, 134, 203, 0.3)";
                }}
              >
                BACK
              </button>
            </Link>
            
            {/* Registration Link */}
            <div className="mt-4">
              <p style={{ color: "#e3f2fd" }}>
                Don't have an INDIAN PASS account?{" "}
                <Link 
                  to={"/localac"} 
                  style={{ 
                    color: "#7986cb", 
                    fontWeight: "bold",
                    textDecoration: "none",
                    position: "relative",
                    display: "inline-block"
                  }}
                >
                  <span style={{
                    position: "relative",
                    zIndex: 1,
                  }}>
                    Create new account
                  </span>
                  <span style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: "linear-gradient(to right, #7986cb, #1976d2)",
                    transformOrigin: "right",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                  }}></span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Add CSS for hover effects */}
      <style jsx>{`
        .input-group:focus-within .input-group-text {
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(121, 134, 203, 0.5);
        }
        
        .input-group:focus-within input {
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.15);
        }
        
        a:hover span:last-child {
          transform: scaleX(1);
          transformOrigin: left;
        }
      `}</style>
    </div>
  );
};

export default Local;