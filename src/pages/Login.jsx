import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GetallOfficers, onAdminlogin } from "../Services/AllApis";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = async () => {
    if (data.email && data.password && data.role) {
      try {
        const apiResp = await onAdminlogin(data);
        if (apiResp.status == 200) {
          if (apiResp.data.role == "admin") {
            sessionStorage.setItem("token", apiResp.data.token);
            navigate("/jd");
          } else {
            sessionStorage.setItem("token", apiResp.data.token);

            navigate("/od");
          }
        } else {
          toast.error("invalid credentials");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("please fill all the form");
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden "
      style={{ height: "100%" }}
    >
      {/* header  */}
      <div
        className="overflow-hidden"
        style={{
          minHeight: "80vh",

          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp8977140.jpg')",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="container card text-white bg-transparent border-light p-3 "
            style={{
              backdropFilter: "blur(3px)",
              height: "650px",
              width: "800px",
              marginTop: "50px",
              borderRadius: "30px",
            }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center h-100  ">
              {/* <p className="fs-3 fw-bold" style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              color: "white",
              padding: "10px 30px",
              borderRadius: "15px",
            }} >select your Depatment</p> */}

              <select
                defaultValue=""
                onChange={(e) => setData({ ...data, role: e.target.value })}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  padding: "10px 30px",
                  borderRadius: "15px",
                }}
                name=""
                id=""
                className="w-75 mb-5 form-control text-center fw-bold"
              >
                <option value="" disabled>
                  Choose your Department
                </option>

                <option className="text-dark" value="admin">
                  ADMINISTRATION
                </option>
                <option className="text-dark" value="Officer">
                  Officer
                </option>
              </select>

              <p
                className="fs-5 mt-3 fw-bold"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  padding: "10px 30px",
                  borderRadius: "15px",
                }}
              >
                Enter your username
              </p>
              <input
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                }}
                className="w-75 form-control mb-3 text-center fw-bold text-light"
                type="text"
              />

              <p
                className="fs-5 fw-bold"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  padding: "10px 30px",
                  borderRadius: "15px",
                }}
              >
                Enter your password
              </p>
              <input
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  padding: "10px 30px",
                  borderRadius: "15px",
                }}
                className="w-75 form-control mb-3 text-center fw-bold "
                type="password"
              />
              <Link className="" style={{ textDecoration: "none" }}>
                <p>Forgot username or password</p>
              </Link>

              <button
                className="btn btn-success mb-3  "
                onClick={handleSubmit}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  padding: "10px 30px",
                  borderRadius: "15px",
                }}
              >
                submit
              </button>

              <Link to={"/"}>
                <button
                  className="btn btn-primary mb-3"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    padding: "10px 30px",
                    borderRadius: "15px",
                  }}
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
