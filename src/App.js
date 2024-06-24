import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Research from "./components/Research";
import Team from "./components/Team";
import Protocols from "./components/Protocols";
import Contacts from "./components/Contacts";
import Positions from "./components/Positions";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/choi_website/" element={<Profile />} />
        <Route path="/choi_website/research" element={<Research />} />
        <Route path="/choi_website/team" element={<Team />} />
        <Route path="/choi_website/protocols" element={<Protocols />} />
        <Route path="/choi_website/contacts" element={<Contacts />} />
        <Route path="/choi_website/positions" element={<Positions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
