import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div>
        <div className="">
          <marquee behavior="" direction="">
            Welcome to CopConnect - Your Digital Police Service Portal | File
            Complaints | Book Appointments | Manage Criminal Data | Secure &
            Transparent Policing{" "}
          </marquee>

          <div
            className="d-flex flex-column gap-5  m-0 ms-5 mt-5 "
            style={{ width: "100px", position: "absolute" }}
          >
            <button
              className=" border-0 shadow fw-bold fs-3"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                backgroundColor: "#796F57",
                color: "white",
              }}
            >
              <i class="fa-solid fa-handshake  "></i>
            </button>
            <button
              className=" border-0 shadow fw-bold fs-3"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                backgroundColor: "#796F57",
                color: "white",
              }}
            >
              <i class="fa-solid fa-file"></i>
            </button>
            <button
              className=" border-0 shadow fw-bold fs-3"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                backgroundColor: "#796F57",
                color: "white",
              }}
            >
              <i class="fa-solid fa-star"></i>
            </button>
            <button
              className=" border-0 shadow fw-bold fs-3"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                backgroundColor: "#796F57",
                color: "white",
              }}
            >
              <i class="fa-solid fa-hand-point-up"></i>
            </button>
            <button
              className=" border-0 shadow fw-bold fs-3"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                backgroundColor: "#796F57",
                color: "white",
              }}
            >
              <i class="fa-solid fa-building-shield"></i>
            </button>
          </div>
          <div className="mt-5">
            <div
              className="d-flex justify-content-center mt-5  "
              style={{ position: "absolute", top: "200px", left: "260px" }}
            >
              <button
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#796F57";
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "black";
                }}
                className="border-0 rounded-3 "
                style={{ width: "250px", height: "50px", fontWeight: "bold" }}
              >
                Whats New
              </button>
              <button
                className="border-0 rounded-3"
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#796F57";
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "black";
                }}
                style={{ width: "250px", height: "50px", fontWeight: "bold" }}
              >
                Services
              </button>
              <button
                className="border-0  rounded-3"
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#796F57";
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "black";
                }}
                style={{ width: "250px", height: "50px", fontWeight: "bold" }}
              >
                Police Updates
              </button>
              <button
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#796F57";
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "black";
                }}
                className="border-0   rounded-3"
                style={{ width: "250px", height: "50px", fontWeight: "bold" }}
              >
                {" "}
                Support & Help
              </button>
            </div>
          </div>
          <div className="container d-flex justify-content-center ">
            <Carousel
              className="m-5 "
              style={{
                position: "relative",
                width: "1000px",
                margin: "20px auto",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              <Carousel.Item>
                <img
                  style={{ width: "100%", height: "400px" }}
                  src="https://img.jagranjosh.com/images/2023/May/2452023/New-Parliament-Building-Inauguration-min.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "100%", height: "400px" }}
                  src="https://uwm.edu/news/wp-content/uploads/sites/41/2019/02/Frontiers_BeneshSupremeCourt_BannerImage_1500x650_Group-1_FINAL.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "100%", height: "400px" }}
                  src="https://images.shiksha.com/mediadata/images/articles/1656504725phpBU8KDt.jpeg"
                  alt=""
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <section className="mt-5">
          <h1 className="d-flex justify-content-center">Our Services</h1>
          <div className="d-flex gap-3 justify-content-center align-center mb-5 mt-5 ">
            <Card
              className="card  ms-5"
              style={{
                width: "18rem",
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                  <i className="fa-solid fa-suitcase"></i>
                </Card.Title>
                <h4>Request for police activities and events</h4>
                <Card.Text></Card.Text>
                <Button
                  style={{ backgroundColor: "#796F57", border: "0px" }}
                  className="mt-3"
                >
                  Apply
                </Button>
              </Card.Body>
            </Card>
            <Card
              className="card"
              style={{
                width: "18rem",
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                  <i class="fa-solid fa-square-poll-vertical"></i>
                </Card.Title>
                <h4>Request statics and Data</h4>
                <Card.Text></Card.Text>
                <Button
                  style={{ backgroundColor: "#796F57", border: "0px" }}
                  className="mt-3"
                >
                  Apply
                </Button>
              </Card.Body>
            </Card>
            <Card
              className="card"
              style={{
                width: "18rem",
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                  <i class="fa-solid fa-volleyball"></i>
                </Card.Title>
                <h4>Officers Club Facility Bookings</h4>
                <Card.Text></Card.Text>
                <Button
                  style={{ backgroundColor: "#796F57", border: "0px" }}
                  className="mt-3"
                >
                  Apply
                </Button>
              </Card.Body>
            </Card>
            <Card
              className="card"
              style={{
                width: "18rem",
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Card.Title>
                <h4>File a complaint</h4>
                <Card.Text></Card.Text>
                <Button
                  style={{ backgroundColor: "#796F57", border: "0px" }}
                  className="mt-4"
                >
                  Apply
                </Button>
              </Card.Body>
            </Card>
            <Card
              className="card me-5"
              style={{
                width: "18rem",
                background:
                  "linear-gradient(135deg, #d9d9d9, #bfbfbf, #a6a6a6, #ffffff)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "50px", color: "#796F57" }}>
                  <i class="fa-regular fa-lightbulb"></i>
                </Card.Title>
                <h4>Suggesiions</h4>
                <Card.Text></Card.Text>
                <Button
                  style={{ backgroundColor: "#796F57", border: "0px" }}
                  className="mt-4"
                >
                  Apply
                </Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
