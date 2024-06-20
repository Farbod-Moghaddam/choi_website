import React from "react";
import uofc from "../assests/UofC.jpeg";
import mccaig from "../assests/mccaig.jpeg";
import linkedin from "../assests/linkedin.jpeg";
import twitter from "../assests/x.png";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
        background: "#fff",
        color: "#fff",
        bottom: 0,
        width: "calc(100% - 40px)",
        zIndex: 1,
        padding: "0 20px",
      }}
    >
      <a href="https://www.ucalgary.ca/">
        <img
          src={uofc}
          alt="University Logo"
          style={{ maxWidth: "500px", maxHeight: "60px", alignSelf: "bottom" }}
        />
      </a>

      <div style={{ display: "flex", alignItems: "bottom" }}>
        <a href="https://mccaig.ucalgary.ca/">
          <img
            src={mccaig}
            alt="Institute Logo"
            style={{ maxWidth: "500px", maxHeight: "80px" }}
          />
        </a>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="https://www.linkedin.com/feed/">
          <img
            src={linkedin}
            alt="LinkedIn"
            style={{ maxWidth: "50px", maxHeight: "30px" }}
          />
        </a>
        <a href="https://x.com/home">
          <img
            src={twitter}
            alt="Twitter"
            style={{ maxWidth: "50px", maxHeight: "30px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
