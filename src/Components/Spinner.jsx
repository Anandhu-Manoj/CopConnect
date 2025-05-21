import React, { useState, useEffect } from 'react';
import { ShieldAlert } from 'lucide-react';

const pulseAnimation = `
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

const Spinner = () => {
  const [pulseEffect, setPulseEffect] = useState(false);
  
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseEffect(prev => !prev);
    }, 1500);
    
    return () => clearInterval(pulseInterval);
  }, []);
  
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = pulseAnimation;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div style={styles.overlay}>
      <div style={{
        ...styles.glassmorphismContainer,
        transform: pulseEffect ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 1.5s ease-in-out'
      }}>
        <div style={styles.glow}></div>
        
        <div style={styles.loaderContainer}>
          <div style={styles.pulseRing}></div>
          <div style={{...styles.pulseRing, animationDelay: '0.3s'}}></div>
          <div style={styles.badgeContainer}>
            <ShieldAlert style={styles.shieldIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(10, 37, 64, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  glassmorphismContainer: {
    position: "relative",
    padding: "40px",
    borderRadius: "24px",
    background: "linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(13, 71, 161, 0.4))",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: "0 10px 40px 0 rgba(0, 0, 0, 0.4), inset 0 -3px 0 0 rgba(255, 255, 255, 0.1), inset 0 3px 0 0 rgba(255, 255, 255, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle, rgba(63, 81, 181, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
    pointerEvents: "none",
  },
  loaderContainer: {
    position: "relative",
    width: 120,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pulseRing: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "3px solid #1976d2",
    opacity: 1,
    animation: "pulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
  },
  badgeContainer: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    backgroundColor: "#1976d2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 20px rgba(25, 118, 210, 0.6)",
  },
  shieldIcon: {
    width: 40,
    height: 40,
    color: "#ffffff",
  }
};

export default Spinner;