import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const Services = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showModal, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);


  const [showMod, setModShow] = useState(false);
  const handleModClose = () => setModShow(false);
  const handleModShow = () => setModShow(true);
  return (
    <div className="overflow-hidden">
      {/* <Header /> */}

      <div style={{ height: "80vh" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#796F57",
            color: "white",
            height: "100px",
          }}
        >
          <h1 className=" text-center ">
            SERVICES <i class="fa-solid fa-server"></i>
          </h1>
        </div>

        <div className="d-flex gap-5 mt-5 justify-content-center  ms-4">
          <Card
            className="card me-5 d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              width: "28rem",
              height: "300px",
              background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                <i class="fa-solid fa-pen-to-square fw-bold"></i>
              </Card.Title>
              <h4 className="fs-2 fw-bold">File a complaint</h4>
              <Card.Text></Card.Text>
              <Button
                onClick={handleShow}
                style={{ backgroundColor: "#796F57", border: "0px" }}
                className="mt-5 w-100"
              >
                Apply
              </Button>
            </Card.Body>
          </Card>

          <Modal  centered show={show} onHide={handleClose}>
            <Modal.Header style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}} closeButton>
              <Modal.Title className="ms-5">Add Complaint <i class="fa-solid fa-pen-to-square fw-bold"></i>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}}>
             <input className="form-control w-100 mb-5" required type="text" placeholder="enter your name" />
             <input className="form-control w-100 mb-5" required type="number" placeholder="enter your contact  number" />
             <input className="form-control w-100 mb-5" required type="text" placeholder="enter your aadhar number " />
             <input className="form-control w-100" required type="file" placeholder="" />
             <p className="mt-2 ms-5 text-dark fw-lighter"> upload  written complaint in pdf format</p>
            </Modal.Body>
            <Modal.Footer style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
          <Card
            className="card me-5 d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              width: "28rem",
              height: "300px",
              background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                <i className="fa-solid fa-suitcase fw-bold"></i>
              </Card.Title>
              <h4 className="fs-2 fw-bold">
                Request for police activities and events
              </h4>
              <Card.Text></Card.Text>
              <Button onClick={handleModalShow}
                style={{ backgroundColor: "#796F57", border: "0px" }}
                className="mt-3 w-50"
              >
                Apply
              </Button>
            </Card.Body>
          </Card>
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}} closeButton>
              <Modal.Title>activities and events  <i className="fa-solid fa-suitcase fw-bold"></i></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}}>
             <input className="form-control w-100 mb-5" required type="text" placeholder="enter your name" />
             <input className="form-control w-100 mb-5" required type="number" placeholder="enter your contact  number" />
             <textarea className="form-control w-100 mb-5" required type="textArea" placeholder="Short discription of the required service " />
             {/* <input className="form-control w-100" required type="file" placeholder="" />
             <p className="mt-2 ms-5 text-dark fw-lighter"> upload  written complaint in pdf format</p> */}
            </Modal.Body>
            <Modal.Footer style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}}>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleModalClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Card
            className="card me-5 d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              width: "28rem",
              height: "300px",
              background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                <i class="fa-regular fa-lightbulb fw-bold"></i>
              </Card.Title>
              <h3 className="fw-bold fs-2 ">Suggestions</h3>
              <Card.Text></Card.Text>
              <Button onClick={handleModShow}
                style={{ backgroundColor: "#796F57", border: "0px" }}
                className="mt-5 w-100 "
              >
                Apply
              </Button>
            </Card.Body>
          </Card>
          <Modal show={showMod} onHide={handleModClose}>
            <Modal.Header  style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}} closeButton>
              <Modal.Title>Suggestions <i class="fa-regular fa-lightbulb fw-bold"></i></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}}>
             
             <textarea className="form-control w-100 mb-5" required type="textArea" placeholder="Submit your valuble suggesions about our service " />
             
            </Modal.Body>
            <Modal.Footer style={{ background:
                "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",}}>
              <Button variant="secondary" onClick={handleModClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleModClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <center>
            <Link to={'/local'}><Button
            className="btn  btn-outline mt-5 w-25 border-0"
            style={{ backgroundColor:"#796F57",
              padding: "10px 30px",
              borderRadius: "15px",
            }}
          >
            Log Out
          </Button></Link>
          
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
