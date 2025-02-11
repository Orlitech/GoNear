
import React from "react";
import "@fontsource/poppins";

const Footer = () => {
  return (
    <footer className="footer" style={{
      fontFamily: "'Poppins', sans-serif",
      padding: "10px 0",
      textAlign: "center",
      marginTop: "10px",
      width: "100%"
    }}>
      <div className="container" style={{ maxWidth: "100%", padding: "0 20px" }}>
        <span style={{ fontSize: "12px" }}>
          &copy; {new Date().getFullYear()} CodeWithMide. All Rights Reserved.
          
          | Built with ❤️ by <b>CodeWithMide</b>
       
        
        </span>
        
      
      
      </div>
    </footer>
  );
};

export default Footer;
