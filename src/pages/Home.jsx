import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Video from '../assets/cop.mp4'

// Enhanced professional color palette
const COLORS = {
  darkBlue: "#0a2540",
  primary: "#1976d2",
  primaryDark: "#0d47a1", 
  accent: "#3f51b5",
  accentLight: "#7986cb",
  light: "#ffffff",
  lightBlue: "#e3f2fd",
  gradientLight: "rgba(25,118,210,0.25)",
  gradientDark: "rgba(13,71,161,0.35)"
};

// Enhanced professional styles with subtle shadows and refined glassmorphism
const styles = {
  pageContainer: {
    backgroundColor: COLORS.darkBlue,
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden"
  },
  videoOverlay: {
    position: "fixed", // Fixed to create a true background effect
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    zIndex: 0
  },
  videoBackground: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.15 // Slightly reduced opacity for better contrast
  },
  contentContainer: {
    position: "relative",
    zIndex: 1
  },
  sectionTitle: {
    color: COLORS.light,
    fontWeight: 700,
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "1.5rem",
    letterSpacing: "0.5px",
    position: "relative",
    display: "inline-block"
  },
  titleUnderline: {
    content: '""',
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "4px",
    background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
    borderRadius: "2px"
  },
  marquee: {
    background: `linear-gradient(90deg, ${COLORS.gradientDark} 0%, ${COLORS.gradientLight} 100%)`,
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
    whiteSpace: "nowrap"
  },
  serviceCard: {
    background: `linear-gradient(135deg, ${COLORS.gradientDark} 0%, ${COLORS.gradientLight} 100%)`,
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    color: COLORS.light,
    borderRadius: "16px",
    transition: "all 0.4s ease",
    height: "100%",
    cursor: "pointer",
    overflow: "hidden"
  },
  serviceCardHovered: {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.3)",
    background: `linear-gradient(135deg, ${COLORS.gradientDark} 10%, ${COLORS.gradientLight} 90%)`
  },
  serviceIcon: {
    fontSize: "3rem",
    color: COLORS.light,
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.accent} 100%)`,
    width: "90px",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    margin: "0 auto 1.5rem auto",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
  },
  serviceButton: {
    background: COLORS.primary,
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    color: COLORS.light,
    fontWeight: 600,
    borderRadius: "8px",
    padding: "10px 16px",
    transition: "all 0.3s ease",
    marginTop: "1.5rem",
    letterSpacing: "0.5px"
  },
  highlightBadge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.accentLight} 100%)`,
    color: COLORS.light,
    fontSize: "0.75rem",
    fontWeight: "bold",
    padding: "3px 10px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    letterSpacing: "0.5px"
  },
  serviceHeaderBg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "130px",
    background: `linear-gradient(180deg, ${COLORS.primary} 0%, transparent 100%)`,
    opacity: 0.15,
    zIndex: 0
  }
};

const Home = () => {
  const [hovered, setHovered] = useState([false, false, false, false, false]);

  const handleCardHover = (idx, isHover) => {
    setHovered((prev) => prev.map((h, i) => (i === idx ? isHover : h)));
  };


  const services = [
    {
      icon: "suitcase",
      title: "Request for Police Activities",
      description: "Schedule and request police presence for community events and activities with our streamlined process.",
      link: "/local",
      highlight: "Most Used",
      priority: "high"
    },
    {
      icon: "chart-line",
      title: "Request Statistics and Data",
      description: "Access comprehensive police statistics and data reports for your area with secure authentication.",
      link: "/login",
      highlight: null,
      priority: "medium"
    },
    {
      icon: "building-shield",
      title: "Officers Club Bookings",
      description: "Book facilities at the Officers Club for events and gatherings with our calendar-based reservation system.",
      link: "/login",
      highlight: null,
      priority: "medium"
    },
    {
      icon: "file-signature",
      title: "File a Complaint",
      description: "Submit and track complaints safely and securely through our portal with real-time status updates.",
      link: "/local",
      highlight: "Featured",
      priority: "high"
    },
    {
      icon: "handshake-angle",
      title: "Visit Inmates",
      description: "Schedule and manage visitation appointments with inmates through our secure verification process.",
      link: "/local",
      highlight: null,
      priority: "medium"
    }
  ];

  return (
    <div style={styles.pageContainer}>
      {/* Full-screen background video */}
      <div style={styles.videoOverlay}>
        <video
          src={Video}
          autoPlay
          loop
          muted
          playsInline
          style={styles.videoBackground}
        />
      </div>

      <div style={styles.contentContainer}>
        <Header />
        
        {/* Marquee announcement bar */}
        <div className="container-xl">
          <div style={styles.marquee}>
            <span
              style={{
                display: "inline-block",
                animation: "scroll-left 20s linear infinite",
                minWidth: "100%"
              }}
            >
              Welcome to CopConnect - Your Digital Police Service Portal | File Complaints | Book Appointments | Manage Criminal Data | Secure & Transparent Policing
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

          {/* Services Section - Immediately after marquee */}
          <div className="mt-3">
            <div className="text-center mb-4">
              <h2 style={styles.sectionTitle}>
                Our Services
                <div style={styles.titleUnderline}></div>
              </h2>
              <p className="text-white mb-4 mt-4 w-75 mx-auto opacity-90">
                Access our comprehensive range of police services designed to enhance community safety and streamline your interactions with law enforcement.
              </p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
              {services.map((service, idx) => (
                <div 
                  className="col" 
                  key={idx}
                  style={{
                    animation: service.priority === "high" ? "float 6s ease-in-out infinite" : "none",
                    animationDelay: `${idx * 0.2}s`
                  }}
                >
                  <Card
                    style={{
                      ...styles.serviceCard,
                      ...(hovered[idx] ? styles.serviceCardHovered : {}),
                      animation: service.highlight ? "pulse 2s infinite" : "none"
                    }}
                    onMouseEnter={() => handleCardHover(idx, true)}
                    onMouseLeave={() => handleCardHover(idx, false)}
                    className="h-100 position-relative"
                  >
                    {service.highlight && (
                      <div style={styles.highlightBadge}>
                        {service.highlight}
                      </div>
                    )}
                    <div style={styles.serviceHeaderBg}></div>
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4 position-relative">
                      <div 
                        style={{
                          ...styles.serviceIcon,
                          transform: hovered[idx] ? "scale(1.1) rotate(5deg)" : "scale(1)"
                        }}
                      >
                        <i className={`fa-solid fa-${service.icon}`}></i>
                      </div>
                      
                      <h3 className="h4 mb-3 fw-bold">{service.title}</h3>
                      
                      <Card.Text className="flex-grow-1">
                        {service.description}
                      </Card.Text>
                      
                      <Link to={service.link} className="mt-auto w-100">
                        <Button
                          style={{
                            ...styles.serviceButton,
                            background: hovered[idx] ? COLORS.primaryDark : COLORS.primary,
                            transform: hovered[idx] ? "scale(1.05)" : "scale(1)",
                            boxShadow: hovered[idx]
                              ? "0 8px 24px rgba(0,0,0,0.2)"
                              : styles.serviceButton.boxShadow
                          }}
                          className="w-100"
                        >
                          Apply Now <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;