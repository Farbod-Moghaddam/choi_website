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
        <Route path="/" element={<Profile />} />
        <Route path="/research" element={<Research />} />
        <Route path="/team" element={<Team />} />
        <Route path="/protocols" element={<Protocols />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/positions" element={<Positions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
