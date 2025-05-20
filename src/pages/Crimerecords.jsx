import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/sideLogo.png";
import Footer from "../Components/Footer";
import { Button, Modal } from "react-bootstrap";
import {
  AddCriminals,
  deleteCriminals,
  editCriminals,
  getCriminals,
} from "../Services/AllApis";
import { toast } from "react-toastify";
import justice from '../assets/justice.mp4';


const Crimerecords = () => {
  const handleRevClose = () => setRevShow(false);
  const handleRevShow = () => setRevShow(true);
  const [revshow, setRevShow] = useState(false);

  //state for storing crime records
  const [render, setRender] = useState("");
  const [getCrimedata, setGetCrimeData] = useState([]);

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
    if (
      criminalDetails.criminalimage &&
      criminalDetails.criminalname &&
      criminalDetails.criminalfathersName &&
      criminalDetails.CriminalIdentificationMark &&
      criminalDetails.CNumber &&
      criminalDetails.TotalYearsofSentence &&
      criminalDetails.AdmittedDate &&
      criminalDetails.RelievingDate
    ) {
      if (
        criminalDetails.criminalimage.type == "image/jpg" ||
        criminalDetails.criminalimage.type == "image/png" ||
        criminalDetails.criminalimage.type == "image/jpeg"
          ? criminalDetails.criminalimage
          : toast.error("please upload required image format")
      ) {
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
          let requestHeader = {
            "Content-Type": "multipart/form-data",
            Authorization: `bearer ${sessionStorage.getItem("token")}`,
          };
          let apiResponse = await AddCriminals(payload, requestHeader);
          console.log(apiResponse);
          if (apiResponse.status == 201) {
            toast.success("Criminal added successfully");
            setRender(apiResponse);
            handleRevClose();
          } else {
            toast.error("registration failed check the C-Number");
          }
        } catch (error) {
          toast.error(error);
        }
      }
    } else {
      toast.error("fill all the required credentials");
    }
  };

  //gettingCriminals
   const[searchKey,setSearchKey]=useState('');

  const gettingAllCriminals = async () => {
    try {
      const Header = {
        Authorization: `nearer ${sessionStorage.getItem("token")}`,
      };

      const apiResp = await getCriminals(Header,searchKey);
      setGetCrimeData(apiResp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    gettingAllCriminals();
  }, [render,searchKey]);

  //deleting criminals
  const onDeleteCriminals = async (id) => {
    try {
      const Header = {
        Authorization: `nearer ${sessionStorage.getItem("token")}`,
      };

      const apiResponse = await deleteCriminals(id, Header);
      console.log(apiResponse);
      if (apiResponse.status == 200) {
        toast.success("criminal deleted succesfully");
        setRender("deleted");
      } else {
        toast.error("please try again later");
      }
    } catch (error) {
      console.log(error);
    }
  };

    const COLORS = {
    darkBlue: "#0a2540",
    primary: "#1976d2",
    primaryDark: "#0d47a1",
    accent: "#3f51b5",
    accentLight: "#7986cb",
    light: "#ffffff",
    lightBlue: "#e3f2fd",
    gradientLight: "rgba(25,118,210,0.6)", // changed from 0.25
    gradientDark: "rgba(1, 37, 91, 0.8)", // changed from 0.35
  };

  const Styles = {
    marquee: {
      background: `linear-gradient(90deg, ${COLORS.darkBlue} 0%, ${COLORS.gradientLight} 100%)`,
      border: "1px solid rgba(255,255,255,0.18)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      color: COLORS.light,
      fontWeight: 600,
      borderRadius: "12px",
      padding: "16px 0",
      margin: "24px 0",
      textAlign: "center",
      letterSpacing: "0.5px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },}
  //editing criminal
  const[editData,setEditData]=useState({


  })

  const [CEditshow, setOWCrEditShow] = useState(false);

  const handleCrEditClose = () => setOWCrEditShow(false);

  const handleCrEditfShow = (data) => {
    setEditData(data)
    
    setOWCrEditShow(true);
  };

  const onEditCriminals = async () => {
    const reqHeader = {
      Authorization: `bearer ${sessionStorage.getItem("token")}`,
    };

    try {
      const apiResponse = await editCriminals(
        editData._id,
        editData,
        reqHeader
      );
      console.log(editData);

      if (apiResponse.status == 200) {
        toast.success("success");
        handleCrEditClose();
        setRender("edited");
      } else {
        toast.error("try again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div
      className="relative min-h-screen overflow-hidden "
      style={{ height: "100%",backgroundColor: "#0a2540" }}
     
    >
      
               <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      minWidth: "100vw",
                      minHeight: "100vh",
                      objectFit: "cover",
                      zIndex: 0,
                      opacity: 0.04, 
                      pointerEvents: "none",
                    }}
                  >
                    <source src={justice} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
                 background: "linear-gradient(135deg, #0a2540, #0d47a1)",
              backdropFilter: "blur(12px)",
              }}
            >
              {/* <img className="ms-5" height={"100px"} src={Logo} alt="" /> */}
              {/* <img
                className="img-fluid mt-3"
                style={{
                  position: "absolute",
                  right: "100px",
                  height: "100px",
                }}
                src={sideLogo}
                alt=""
              /> */}
            </div>
            <header
              style={{
                height: "75px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 32px",
                 background: "linear-gradient(135deg, #0a2540, #0d47a1)",
              backdropFilter: "blur(12px)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
              }}
            >
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#e3f2fd",
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
                  backgroundColor: "#1976d2",
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
                    {/* <button
                      style={{ backgroundColor: "#1976d2" }}
                      className="btn text-white"
                    >
                      {" "}
                      Punch in <i className="fa-solid fa-house"></i>
                    </button> */}
                  </li>
                  <li>
                    <Link to={"/jd"}>
                      {" "}
                      <button
                        style={{ backgroundColor: "#1976d2" }}
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
            <div style={Styles.marquee}>
            <span
              style={{
                display: "inline-block",
                animation: "scroll-left 20s linear infinite",
                minWidth: "100%",
              }}
            >
              Welcome to CopConnect - Your Digital Police Service Portal | File
              Complaints | Book Appointments | Manage Criminal Data | Secure &
              Transparent Policing
            </span>
          </div>

          {/* CSS for marquee animation */}
          <style>
            {`
              @keyframes scroll-left {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
              @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(25,118,210,0.4); }
                70% { box-shadow: 0 0 0 12px rgba(25,118,210,0); }
                100% { box-shadow: 0 0 0 0 rgba(25,118,210,0); }
              }
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
              }
            `}
          </style>
       
          </div>
        </div>
        <section className="container mt-5    ">
          <center>
            <h2
              className="fw-bold  p-3 rounded-3"
              style={{ backgroundColor: "#0d47a1",color:"white" }}
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
           <div className="input-group w-25">
  <span className="input-group-text" id="search-icon" style={{color: "#023eca"}}>
    <i className="fa-solid fa-magnifying-glass"></i>
  </span>
  <input
  onChange={(e)=>setSearchKey(e.target.value)}
  
    type="text"
    className="form-control"
    placeholder="Search criminal"
    aria-label="Search"
    aria-describedby="search-icon"
  />
</div>
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
                onChange={(e) =>
                  setCriminalDetails({
                    ...criminalDetails,
                    criminalimage: e.target.files[0],
                  })
                }
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
                {getCrimedata?.length > 0
                  ? getCrimedata.map((data) => (
                      <tr style={{ backgroundColor: "#fff", fontSize: "16px" }}>
                        <td
                          className="p-3 img-fluid"
                          style={{ height: "100px", width: "100px" }}
                        >
                          <img
                            style={{ width: "100%" }}
                            src={
                              data.criminalimage
                                ? `http://localhost:3000/Media/${data.criminalimage}`
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVO3GNQRm6Ly9CrUTsDREMk08IvcAvJtlKg84q62up6DGGXB0jxoUem0NIwKxya0H0YwU&usqp=CAU"
                            }
                            alt="Criminalimage"
                          />
                        </td>
                        <td className="p-3">{data.criminalname}</td>
                        <td className="p-3">{data.criminalfathersName}</td>
                        <td className="p-3">
                          {data.CriminalIdentificationMark}
                        </td>
                        <td className="p-3">{data.CNumber}</td>
                        <td className="p-3">{data.TotalYearsofSentence}</td>
                        <td className="p-3">{data.AdmittedDate}</td>
                        <td className="p-3">{data.RelievingDate}</td>
                        <td className="p-3">
                          {" "}
                          <button
                            onClick={() => onDeleteCriminals(data._id)}
                            style={{ marginRight: "5px" }}
                            className="btn btn-danger"
                          >
                            Remove <i className="fa-solid fa-square-xmark"></i>
                          </button>
                          <button
                            className="btn btn-primary mt-2"
                            onClick={() => handleCrEditfShow(data)}
                          >
                            Review <i className="fa-solid fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>

            <Modal
              centered
              size="lg"
              show={CEditshow}
              onHide={handleCrEditClose}
            >
              <Modal.Header
                closeButton
                style={{
                  background:
                    "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                }}
              >
                <Modal.Title>
                  Edit Criminal <i className="fa-solid fa-shield"></i>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body
                style={{
                  background:
                    "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                }}
              >
                <input
                  className="form-control w-100 mb-2"
                  onChange={(e)=>setEditData({...editData,criminalimage:e.target.files[0]})}
                  required
                  type="file"
                  placeholder="Change  photo"
                />
                <input
                  value={editData?.criminalname}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      criminalname: e.target.value,
                    })
                  }
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Change criminal name"
                />
                <input
                  value={editData?.criminalfathersName}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      criminalfathersName: e.target.value,
                    })
                  }
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Change criminal fathers name"
                />
                <input
                  value={editData?.CriminalIdentificationMark}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      CriminalIdentificationMark: e.target.value,
                    })
                  }
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Change  criminal  identiFication mark "
                />

                <input
                  value={editData?.CNumber}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      CNumber: e.target.value,
                    })
                  }
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Change  criminal C-number"
                />
                <input
                  value={editData?.TotalYearsofSentence}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      TotalYearsofSentence: e.target.value,
                    })
                  }
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Change Total Years of Sentence"
                />
                <input
                  value={editData?.AdmittedDate}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      AdmittedDate: e.target.value,
                    })
                  }
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Change Admitted Date	"
                />
                <input
                  value={editData?.RelievingDate}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      RelievingDate: e.target.value,
                    })
                  }
                  className="form-control w-100 mb-2"
                  required
                  type="text"
                  placeholder="Change Relieving Date	"
                />
              </Modal.Body>
              <Modal.Footer
                style={{
                  background:
                    "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
                }}
              >
                <Button variant="secondary" onClick={handleCrEditClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={onEditCriminals}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Crimerecords;
