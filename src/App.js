import React from "react";
import "./App.css";
import InfoSection from "./components/InfoSection";
import LoginForm from "./components/LoginForm";
import ExistUser from "./components/ExistUser";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import VerificationCodeForm from "./components/VerficationCodeForm";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <div className="left-section">
          <InfoSection />
        </div>
        <Router>
          <div className="right-section">
            <div className="log">
              <Link to="/login"></Link>
              <Link to="/Exist"></Link>
              <Link to="/Verify"></Link>
            </div>
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/Exist" element={<ExistUser />} />
              <Route path="/Verify" element={<VerificationCodeForm />} />

              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
