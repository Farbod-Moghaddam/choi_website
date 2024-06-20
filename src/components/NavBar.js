import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/OIG1.jpeg";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        background: "#333",
        color: "#fff",
        position: "fixed",
        top: 0,
        width: "calc(100% - 40px)",
        zIndex: 1,
        padding: "0 20px", // Add padding to the right
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ width: "50px", height: "50px" }} />
        <span style={{ marginLeft: "10px", color: "#fff" }}>Choi Lab</span>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/research" style={{ color: "#fff", textDecoration: "none" }}>
          Research
        </Link>
        <Link to="/team" style={{ color: "#fff", textDecoration: "none" }}>
          Team
        </Link>
        <a
          href="https://x.com/home"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          News
        </a>
        <Link to="/protocols" style={{ color: "#fff", textDecoration: "none" }}>
          Protocols
        </Link>
        <a
          href="https://www.researchgate.net/profile/May-Choi-2"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Publications
        </a>
        <Link to="/contacts" style={{ color: "#fff", textDecoration: "none" }}>
          Contacts
        </Link>
        <Link to="/Positions" style={{ color: "#fff", textDecoration: "none" }}>
          Positions
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
