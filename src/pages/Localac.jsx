import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { CivilianRegister } from "../Services/AllApis";
import { toast } from "react-toastify";


// Import the video
import justiceVideo from "../assets/justice.mp4";

const Localac = () => {
  const navigate = useNavigate();
  const [onReg, setOnReg] = useState({
    adhaarImg: "",
    username: "",
    address: "",
    password: "",
    aadhar: "",
    userType: "Civilian",
    email: "",
  });

  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (
      onReg.adhaarImg.type === "image/jpg" ||
      onReg.adhaarImg.type === "image/png" ||
      onReg.adhaarImg.type === "image/jpeg"
    ) {
      const View = URL.createObjectURL(onReg.adhaarImg);
      setPreview(View);
    }
  }, [onReg.adhaarImg]);

  const onSignUp = async () => {
    if (
      onReg.aadhar &&
      onReg.address &&
      onReg.adhaarImg &&
      onReg.password &&
      onReg.username &&
      onReg.email
    ) {
      const payload = new FormData();

      payload.append("aadharNo", onReg.aadhar);
      payload.append("address", onReg.address);
      payload.append("adhaarImg", onReg.adhaarImg);
      payload.append("password", onReg.password);
      payload.append("username", onReg.username);
      payload.append("userType", onReg.userType);
      payload.append("email", onReg.email);

      try {
        let requestHeader = { "Content-Type": "multipart/form-data" };

        let apiResponse = await CivilianRegister(payload, requestHeader);
        console.log(apiResponse);
        if (apiResponse.status === 201) {
          toast("Registration successful");
          navigate("/local");
        } else {
          toast("Registration failed. Please try again later.");
        }
      } catch (error) {
        console.log(error);
        toast("Registration failed");
      }
    } else {
      toast("Please fill in all fields");
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box", position: "relative", minHeight: "100vh", backgroundColor: "#0a2540" }}>
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

      {/* Registration Form Card */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="card shadow-lg p-4"
          style={{
            background: "rgba(63, 81, 181, 0.2)", // Using accent color with transparency
            borderRadius: "16px",
            width: "450px",
            maxWidth: "90vw",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(10, 37, 64, 0.37)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="text-center gap-3 d-flex flex-column">
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                boxShadow: "0 4px 10px rgba(10, 37, 64, 0.3)",
              }}
            >
              <i className="fa-solid fa-fingerprint fs-2" style={{ color: "#ffffff" }}></i>
            </div>
            
            <h2 style={{ color: "#ffffff", fontWeight: 700 }}>Sign Up</h2>
            
            <label>
              <input
                onChange={(e) =>
                  setOnReg({ ...onReg, adhaarImg: e.target.files[0] })
                }
                style={{ height: "70px", display: "none" }}
                className="form-control"
                type="file"
                placeholder="Upload your ID"
              />
              <h5 style={{ color: "#e3f2fd", cursor: "pointer", fontWeight: 600, marginBottom: "12px" }}>
                Upload your ID
              </h5>
              <div
                style={{
                  overflow: "hidden",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "20px",
                  width: "150px",
                  height: "100px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                className="hover-effect"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={
                    preview
                      ? preview
                      : "https://www.medianama.com/wp-content/uploads/2023/03/aadhaar-card-7579588_1280.png"
                  }
                  className="img-fluid"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </label>
            
            <div className="input-group mb-3">
              <span className="input-group-text" style={{ 
                background: "rgba(121, 134, 203, 0.3)", 
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRight: "none",
                color: "#e3f2fd"
              }}>
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                onChange={(e) => setOnReg({ ...onReg, username: e.target.value })}
                style={{ 
                  height: "50px", 
                  color: "#ffffff", 
                  background: "rgba(255, 255, 255, 0.1)", 
                  border: "1px solid rgba(255, 255, 255, 0.2)", 
                  borderLeft: "none",
                  fontWeight: 500,
                  paddingLeft: "10px"
                }}
                className="form-control shadow"
                type="text"
                placeholder="Username"
              />
            </div>
            
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
                onChange={(e) => setOnReg({ ...onReg, email: e.target.value })}
                style={{ 
                  height: "50px", 
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
                onChange={(e) => setOnReg({ ...onReg, password: e.target.value })}
                style={{ 
                  height: "50px", 
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
            
            <div className="input-group mb-3">
              <span className="input-group-text" style={{ 
                background: "rgba(121, 134, 203, 0.3)", 
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRight: "none",
                color: "#e3f2fd"
              }}>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <input
                onChange={(e) => setOnReg({ ...onReg, address: e.target.value })}
                style={{ 
                  height: "50px", 
                  color: "#ffffff", 
                  background: "rgba(255, 255, 255, 0.1)", 
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderLeft: "none",
                  fontWeight: 500,
                  paddingLeft: "10px"
                }}
                className="form-control shadow"
                type="text"
                placeholder="Address"
              />
            </div>
            
            <div className="input-group mb-3">
              <span className="input-group-text" style={{ 
                background: "rgba(121, 134, 203, 0.3)", 
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRight: "none",
                color: "#e3f2fd"
              }}>
                <i className="fa-solid fa-id-card"></i>
              </span>
              <input
                onChange={(e) => setOnReg({ ...onReg, aadhar: e.target.value })}
                style={{ 
                  height: "50px", 
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
            
            <button
              className="rounded-pill border-0 shadow mt-2"
              style={{
                height: "50px",
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
              onClick={onSignUp}
            >
              SIGN UP
            </button>
            
            <div className="mt-3">
              <p style={{ color: "#e3f2fd" }}>
                Already have an account?{" "}
                <Link to="/local" style={{ 
                  color: "#7986cb", 
                  fontWeight: "bold",
                  textDecoration: "none",
                  position: "relative",
                  display: "inline-block"
                }}>
                  <span style={{
                    position: "relative",
                    zIndex: 1,
                  }}>
                    Login
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

export default Localac;