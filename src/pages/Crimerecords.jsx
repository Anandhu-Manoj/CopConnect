import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/sideLogo.png";
import sideLogo from "../assets/logo.png";
import Footer from "../Components/Footer";
import { Button, Modal } from "react-bootstrap";
import { AddCriminals } from "../Services/AllApis";
import { toast } from "react-toastify";

const Crimerecords = () => {
  const [revshow, setRevShow] = useState(false);

  //state for storing crime records
  const [criminalDetails, setCriminalDetails] = useState({
    criminalimage: "",
    criminalname: "",
    criminalfathersName: "",
    CriminalIdentificationMark: "",
    CNumber: "",
    TotalYearsofSentence: "",
    AdmittedDate: "",
    RelievingDate: "",
  });

  const onAddingCriminal = async () => {
  

    if (criminalDetails.criminalimage
    &&
          criminalDetails.criminalname &&
          criminalDetails.criminalfathersName &&
          criminalDetails.CriminalIdentificationMark &&
          criminalDetails.CNumber &&
          criminalDetails.TotalYearsofSentence &&
          criminalDetails.AdmittedDate &&
          criminalDetails.RelievingDate
    ) {
      if(   criminalDetails.criminalimage.type == "image/jpg" ||
        criminalDetails.criminalimage.type == "image/png" ||
        criminalDetails.criminalimage.type == "image/jpeg"
          ? criminalDetails.criminalimage
          : toast.error("please upload required image format")){
            const payload = new FormData();

            payload.append("criminalimage", criminalDetails.criminalimage);
            payload.append("criminalname", criminalDetails.criminalname);
            payload.append(
              "criminalfathersName",
              criminalDetails.criminalfathersName
            );
            payload.append(
              "CriminalIdentificationMark",
              criminalDetails.CriminalIdentificationMark
            );
            payload.append("CNumber", criminalDetails.CNumber);
            payload.append(
              "TotalYearsofSentence",
              criminalDetails.TotalYearsofSentence
            );
            payload.append("AdmittedDate", criminalDetails.AdmittedDate);
            payload.append("RelievingDate", criminalDetails.RelievingDate);
      
            try {
              let requestHeader = { "Content-Type": "multipart/form-data" };
              let apiResponse = await AddCriminals(payload, requestHeader);
              console.log(apiResponse);
              if (apiResponse.status == 201) {
                toast.success("Criminal added successfully");
                handleRevClose();
              }else{
                toast.error('registration failed check the C-Number')
              }
             
            } catch (error) {
              toast.error(error);
            }

          }
    
    }else{
      toast.error('fill all the required credentials')
    }
  };

  const handleRevClose = () => setRevShow(false);
  const handleRevShow = () => setRevShow(true);

  return (
    <div
      className="relative min-h-screen overflow-hidden "
      style={{ height: "100%" }}
    >
      <div
        className="overflow-hidden"
        style={{
          minHeight: "50vh",

          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <div
            style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}
          >
            <div
              style={{
                height: "100px",
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <img className="ms-5" height={"100px"} src={Logo} alt="" />
              <img
                className="img-fluid mt-3"
                style={{
                  position: "absolute",
                  right: "100px",
                  height: "100px",
                }}
                src={sideLogo}
                alt=""
              />
            </div>
            <header
              style={{
                height: "75px",
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
                <i className="fa-solid fa-bell"></i>
              </button>

              <div className="d-flex align-content-center ms-5">
                <h2
                  style={{ padding: "10px " }}
                  className="fs-1 fw-bold text-white ms-5 "
                >
                  ADMINISTRATION PORTAL{" "}
                  <i className="fa-solid fa-scale-balanced"></i>
                </h2>
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
                    <button
                      style={{ backgroundColor: "#6D6249" }}
                      className="btn text-white"
                    >
                      {" "}
                      Punch in <i className="fa-solid fa-house"></i>
                    </button>
                  </li>
                  <li>
                    <Link to={"/jd"}>
                      {" "}
                      <button
                        style={{ backgroundColor: "#6D6249" }}
                        className="btn text-white"
                      >
                        Back{""}
                        <i className="fa-solid fa-right-to-bracket"></i>
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
            <marquee behavior="" direction="">
              Welcome to CopConnect - Your Digital Police Service Portal | File
              Complaints | Book Appointments | Manage Criminal Data | Secure &
              Transparent Policing{" "}
            </marquee>
          </div>
        </div>
        <section className="container mt-5 ">
          <center>
            <h2
              className="fw-bold text-white p-3 rounded-3"
              style={{ backgroundColor: "#796F57" }}
            >
              Criminal Records
            </h2>
            <button
              className="btn btn-light shadow mt-2 "
              onClick={handleRevShow}
            >
              ADD CRIMINALS
            </button>
          </center>
          <Modal centered show={revshow} onHide={handleRevClose}>
            <Modal.Header
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
              closeButton
            >
              <Modal.Title className="ms-5">
                Review Complaint{" "}
                <i class="fa-solid fa-pen-to-square fw-bold"></i>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <input
                onChange={(e) => {
                  setCriminalDetails({
                    ...criminalDetails,
                    criminalimage: e.target.files[0],
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="file"
                placeholder="criminal image"
              />
              <input
                onChange={(e) => {
                  setCriminalDetails({
                    ...criminalDetails,
                    criminalname: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="criminal name"
              />
              <input
                onChange={(e) => {
                  setCriminalDetails({
                    ...criminalDetails,
                    criminalfathersName: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="criminal fathers name"
              />
              <input
                onChange={(e) => {
                  setCriminalDetails({
                    ...criminalDetails,
                    CriminalIdentificationMark: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="criminal identification mark"
              />
              <input
                onChange={(e) => {
                  setCriminalDetails({
                    ...criminalDetails,
                    CNumber: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder=" C-number"
              />
              <input
                onChange={(e) => {
                  setCriminalDetails({
                    ...criminalDetails,
                    TotalYearsofSentence: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Total years of Sentence"
              />
              <input
                onChange={(e) => {
                  setCriminalDetails({
                    ...criminalDetails,
                    AdmittedDate: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Admitted Date"
              />
              <input
                onChange={(e) => {
                  setCriminalDetails({
                    ...criminalDetails,
                    RelievingDate: e.target.value,
                  });
                }}
                className="form-control w-100 mb-2"
                required
                type="text"
                placeholder="Relieving Date"
              />
            </Modal.Body>
            <Modal.Footer
              style={{
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Button variant="secondary" onClick={handleRevClose}>
                Close
              </Button>
              <Button variant="primary" onClick={onAddingCriminal}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="table-responsive mt-4">
            <table
              className="table table-bordered text-center"
              style={{
                backgroundColor: "#d9d9d9",
                borderColor: "#796F57",
                overflow: "hidden",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#796F57",
                  color: "white",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                <tr>
                  <th className="p-3">Photo</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Father's Name</th>
                  <th className="p-3">Identification Mark</th>
                  <th className="p-3">C-Number</th>
                  <th className="p-3">Total Years of Sentence</th>
                  <th className="p-3">Admitted Date</th>
                  <th className="p-3">Relieving Date</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                  <td
                    className="p-3 img-fluid"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyO1bVGjNtceG2dUQMIqrKTSb9rIciYV5Vw&s"
                      alt=""
                    />
                  </td>
                  <td className="p-3">Thomas</td>
                  <td className="p-3">Shebly</td>
                  <td className="p-3">Scratch on forehead</td>
                  <td className="p-3">02</td>
                  <td className="p-3">10</td>
                  <td className="p-3">10-05-2000</td>
                  <td className="p-3">10-05-2010</td>
                  <td className="p-3">
                    {" "}
                    <button
                      style={{ marginRight: "5px" }}
                      className="btn btn-danger"
                    >
                      Remove <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <button className="btn btn-primary mt-2">
                      Review <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Crimerecords;
