
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "@fontsource/poppins";

const Footer = () => {
  return (
    <footer className="footer bg-body-tertiary" style={{
      fontFamily: "'Poppins', sans-serif",
      padding: "10px 0",
      textAlign: "center",
      marginTop: "10px",
      width: "100%"
    }}>
      <div className="container" style={{ maxWidth: "100%", padding: "0 20px" }}>
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>
          &copy; {new Date().getFullYear()} CodeWithMide. All Rights Reserved.
        </span>
        <p style={{ marginTop: "10px", fontSize: "12px" }}>
          Built with ❤️ by <b>CodeWithMide</b>
        </p>
      
      
      </div>
    </footer>
  );
};

export default Footer;
