import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAdminlogin } from "../Services/AllApis";
import { toast } from "react-toastify";
import justice from "../assets/justice.mp4";
import { addLoaderContext } from "../Contexts/LoaderContext";

// Enhanced professional color palette from Home component
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
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  videoOverlay: {
    position: "fixed",
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
    opacity: 0.18
  },
  loginCard: {
    background: `linear-gradient(135deg, ${COLORS.gradientDark} 0%, ${COLORS.gradientLight} 100%)`,
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "24px",
    padding: "2.5rem",
    maxWidth: "550px",
    width: "90%",
    position: "relative",
    zIndex: 1
  },
  cardTitle: {
    color: COLORS.light,
    fontWeight: 700,
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "2rem",
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
  formLabel: {
    background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "12px",
    color: COLORS.light,
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "0.75rem",
    display: "inline-block"
  },
  formInput: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    color: COLORS.light,
    padding: "12px 20px",
    width: "100%",
    marginBottom: "1.5rem",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "all 0.3s ease"
  },
  formInputFocus: {
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: `0 0 0 3px ${COLORS.gradientLight}`
  },
  formSelect: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    color: COLORS.light,
    padding: "12px 20px",
    width: "100%",
    marginBottom: "1.5rem",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    appearance: "none",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center"
  },
  primaryButton: {
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    color: COLORS.light,
    fontWeight: 600,
    borderRadius: "12px",
    padding: "12px 24px",
    transition: "all 0.3s ease",
    marginTop: "0.5rem",
    marginBottom: "1rem",
    width: "100%",
    fontSize: "1rem",
    letterSpacing: "0.5px",
    cursor: "pointer"
  },
  primaryButtonHover: {
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    transform: "translateY(-2px)"
  },
  secondaryButton: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: COLORS.light,
    fontWeight: 600,
    borderRadius: "12px",
    padding: "12px 24px",
    transition: "all 0.3s ease",
    width: "100%",
    fontSize: "1rem",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    cursor: "pointer"
  },
  secondaryButtonHover: {
    background: "rgba(255,255,255,0.2)",
    border: "1px solid rgba(255,255,255,0.25)"
  },
  forgotLink: {
    color: COLORS.lightBlue,
    textDecoration: "none",
    fontSize: "0.9rem",
    marginBottom: "1.5rem",
    display: "block",
    textAlign: "right",
    transition: "all 0.3s ease"
  },
  forgotLinkHover: {
    color: COLORS.light,
    textDecoration: "underline"
  }
};

const Login = () => {
    const { setLoader } = useContext(addLoaderContext);
  
    useEffect(() => {
      setLoader(true); 
      
      setTimeout(() => {
        setLoader(false); 
      }, 1500);
    }, [setLoader]);
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
  });
  
  // UI state for hover effects
  const [hovered, setHovered] = useState({
    submit: false,
    back: false,
    forgot: false,
    emailInput: false,
    passwordInput: false
  });

  const handleSubmit = async () => {
    if (data.email && data.password && data.role) {
      try {
        const apiResp = await onAdminlogin(data);
        if (apiResp.status === 200) {
          if (apiResp.data.role === "admin") {
            sessionStorage.setItem("token", apiResp.data.token);
            navigate("/jd");
          } else {
            sessionStorage.setItem("token", apiResp.data.token);
            navigate("/od");
          }
        } else {
          toast.error("Invalid credentials");
        }
      } catch (error) {
        console.log(error);
        toast.error("Login failed. Please try again.");
      }
    } else {
      toast.warning("Please fill all the fields");
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Background video */}
      <div style={styles.videoOverlay}>
        <video
          src={justice}
          autoPlay
          loop
          muted
          playsInline
          style={styles.videoBackground}
        />
      </div>
     
      <div style={styles.loginCard}>
        <div className="text-center mb-4">
          <h2 style={styles.cardTitle}>
            CopConnect Portal
            <div style={styles.titleUnderline}></div>
          </h2>
        </div>
        
        <div className="d-flex flex-column">
          <label className="align-self-start" style={styles.formLabel}>
            <i className="fa-solid fa-building-shield me-2"></i>Department
          </label>
          
          <select
            value={data.role}
            onChange={(e) => setData({ ...data, role: e.target.value })}
            style={styles.formSelect}
            className="form-select"
          >
            <option value="" disabled>Choose your Department</option>
            <option className="text-white" value="admin">ADMINISTRATION</option>
            <option className="text-white" value="Officer">OFFICER</option>
          </select>
          
          {/* Username Field */}
          <label className="align-self-start" style={styles.formLabel}>
            <i className="fa-solid fa-user me-2"></i>Username
          </label>
          
          <input
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            style={{
              ...styles.formInput,
              ...(hovered.emailInput ? styles.formInputFocus : {})
            }}
            placeholder="Enter your username"
            onFocus={() => setHovered({...hovered, emailInput: true})}
            onBlur={() => setHovered({...hovered, emailInput: false})}
          />
          
          {/* Password Field */}
          <label className="align-self-start" style={styles.formLabel}>
            <i className="fa-solid fa-lock me-2"></i>Password
          </label>
          
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            style={{
              ...styles.formInput,
              ...(hovered.passwordInput ? styles.formInputFocus : {})
            }}
            placeholder="Enter your password"
            onFocus={() => setHovered({...hovered, passwordInput: true})}
            onBlur={() => setHovered({...hovered, passwordInput: false})}
          />
          
          {/* Forgot Password Link */}
          <Link 
            to="/forgot-password"
            style={{
              ...styles.forgotLink,
              ...(hovered.forgot ? styles.forgotLinkHover : {})
            }}
            onMouseEnter={() => setHovered({...hovered, forgot: true})}
            onMouseLeave={() => setHovered({...hovered, forgot: false})}
          >
            Forgot username or password?
          </Link>
          
          {/* Action Buttons */}
          <button
            onClick={handleSubmit}
            style={{
              ...styles.primaryButton,
              ...(hovered.submit ? styles.primaryButtonHover : {})
            }}
            onMouseEnter={() => setHovered({...hovered, submit: true})}
            onMouseLeave={() => setHovered({...hovered, submit: false})}
          >
            <i className="fa-solid fa-right-to-bracket me-2"></i>
            Login
          </button>
          
          <Link to="/" className="text-decoration-none">
            <button
              style={{
                ...styles.secondaryButton,
                ...(hovered.back ? styles.secondaryButtonHover : {})
              }}
              onMouseEnter={() => setHovered({...hovered, back: true})}
              onMouseLeave={() => setHovered({...hovered, back: false})}
            >
              <i className="fa-solid fa-arrow-left me-2"></i>
              Back to Home
            </button>
          </Link>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .form-select option {
            background-color: ${COLORS.darkBlue};
            color: ${COLORS.light};
          }
          
          input:focus, select:focus, button:focus {
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default Login;