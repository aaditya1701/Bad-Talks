import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
// import EventDetails from "./component/EventDetails/EventDetails";


import RegisterForm from "./component/RegisterForm/RegisterForm";
import "./App.css";
import Landing from "./component/Landing/Landing";

import NewSection from "./component/NewSection";
// import OurSpeaker from "./component/OurSpeaker";
import AboutUs from "./component/AboutUs/About";
import Team from "./component/team/Team";
import Ticket from "./component/Ticket/Ticket";
// import About from "./component/About/About";
import WhatisBad from "./component/Whatisbad/WhatIsBad";
import Map from "./component/Map";

import StartAttendanceScanner from './component/AttendanceScanner/StartAttendanceScanner';
import EndAttendanceScanner from './component/AttendanceScanner/EndAttendanceScanner';
import AdminPage from './component/AdminPage/AdminPage';
import AdminLogin from './component/AdminLogin/AdminLogin';
import StartEventQr from './component/EventQr/StartEventQr'; // Import StartEventQr
import EndEventQr from './component/EventQr/EndEventQr'; // Import EndEventQr

import Internship from "./component/Career/Career";



function App() {
  const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');

  useEffect(() => {
    const elements = document.querySelectorAll("section, img:not(.no-fade)");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="app bg-black ">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Landing />
            <WhatisBad />
            <AboutUs />
            <NewSection />
            <Map />
            <Footer />
          </>
        } />
        {/* <Route path="/speakers" element={<OurSpeaker />} /> */}

        <Route path="/Register" element={
          <>
            <Navbar />
            <RegisterForm />
          </>} />

        <Route path="/ourteam" element={
          <>
            <Navbar />
            <Team />
          </>} />

        <Route path="/ticket" element={<>
          <Navbar />
          <Ticket />
        </>} />

        <Route path="/ticket/:id" element={<>
          <Navbar />
          <Ticket />
        </>} />

        <Route path="/internship" element={
          <>
            <Navbar />
            <Internship />
          </>} />

      </Routes>

      <div className='AdminClass'>
        <Routes>
          <Route path="/EventStart" element={<StartAttendanceScanner />} />
          <Route path="/EventEnd" element={<EndAttendanceScanner />} />
          <Route path="/Admin" element={isAdminLoggedIn ? <AdminPage /> : <Navigate to="/adminlogin" />} />
          <Route path="/StartEventQr" element={isAdminLoggedIn ? <StartEventQr /> : <Navigate to="/" />} />
          <Route path="/EndEventQr" element={isAdminLoggedIn ? <EndEventQr /> : <Navigate to="/" />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </div >
    </div >
  );
}

export default App;
