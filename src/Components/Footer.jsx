import React from "react";
import Flogo from "../assets/Flogo.png";

const COLORS = {
  darkBlue: "#0a2540",
  primary: "#1976d2",
  accent: "#3f51b5",
  accentLight: "#7986cb",
  light: "#ffffff",
  gradientLight: "rgba(25,118,210,0.25)",
  gradientDark: "rgba(13,71,161,0.35)"
};

const styles = {
  footerContainer: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    background: `linear-gradient(90deg, ${COLORS.gradientDark} 0%, ${COLORS.gradientLight} 100%)`,
    borderTop: `2px solid ${COLORS.primary}`,
    boxShadow: "0 -8px 32px rgba(0,0,0,0.22)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    color: COLORS.light,
    position: "relative",
    zIndex: 2,
    borderRadius: "32px 32px 0 0",
    overflow: "hidden",
    paddingTop: "36px"
  },
  curveImg: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.18
  },
  logoBox: {
    position: "absolute",
    top: "-36px",
    right: "40px",
    zIndex: 2,
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.accentLight} 100%)`,
    borderRadius: "50%",
    boxShadow: "0 6px 24px rgba(25,118,210,0.22)",
    padding: "12px",
    border: "2.5px solid #fff"
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "32px 48px 12px 48px",
    position: "relative",
    zIndex: 2,
    flexWrap: "wrap",
    gap: "24px"
  },
  visitors: {
    fontWeight: 700,
    fontSize: "1.15rem",
    letterSpacing: "0.5px"
  },
  contact: {
    fontWeight: 600,
    fontSize: "1.1rem",
    background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accentLight})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: "18px",
    listStyle: "none",
    margin: 0,
    padding: "8px 18px",
    fontSize: "1rem",
    opacity: 0.95,
    background: "rgba(13,71,161,0.10)",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(25,118,210,0.08)"
  },
  linkItem: {
    cursor: "pointer",
    transition: "color 0.2s, text-shadow 0.2s",
    color: COLORS.light,
    fontWeight: 500,
    padding: "0 2px",
    textShadow: "0 1px 4px rgba(25,118,210,0.12)"
  },
  copyright: {
    textAlign: "center",
    color: COLORS.light,
    opacity: 0.88,
    fontSize: "1.05rem",
    padding: "14px 0 22px 0",
    letterSpacing: "0.5px",
    zIndex: 2,
    position: "relative"
  }
};

const linkList = [
  "Disclaimer",
  "Copyright",
  "Privacy Policy",
  "Site Map",
  "Future Service Promise",
  "Accessibility",
  "Terms & Conditions"
];

const Footer = () => {
  // Simple hover effect using React state for demonstration
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  return (
    <div style={styles.footerContainer}>
      {/* Decorative curve background */}
      {/* <img
        style={styles.curveImg}
        src="https://www.shjpolice.gov.ae/images/curves/lg-curve.png"
        alt=""
      /> */}

      {/* Floating logo */}
      

      {/* Info Row */}
      <div style={styles.infoRow}>
        <div style={styles.visitors}>
          <span style={{ fontWeight: "bold", color: COLORS.accent }}>
            38 million <i className="fa-solid fa-users ms-1"></i>
          </span>
          <br />
          <span style={{ fontSize: "0.95rem", fontWeight: 400, opacity: 0.8 }}>
            Number of visitors
          </span>
        </div>
        <div style={styles.contact}>
          Contact Us <i className="fa-solid fa-address-card ms-1"></i>
        </div>
        <ul style={styles.links}>
          {linkList.map((text, idx) => (
            <React.Fragment key={text}>
              <li
                style={{
                  ...styles.linkItem,
                  ...(hoveredIdx === idx
                    ? {
                        color: COLORS.accentLight,
                        textShadow: "0 2px 8px rgba(25,118,210,0.25)"
                      }
                    : {})
                }}
                onMouseOver={() => setHoveredIdx(idx)}
                onMouseOut={() => setHoveredIdx(null)}
              >
                {text}
              </li>
              {idx < linkList.length - 1 && (
                <li style={{ opacity: 0.5, userSelect: "none" }}>|</li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div style={styles.copyright}>
        All rights reserved &copy; 2025 CopConnect
      </div>
    </div>
  );
};

export default Footer;