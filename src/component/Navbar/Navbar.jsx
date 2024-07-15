import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import logo from "../../assets/BAD_TALKS_LOGO.png"
import RegisterForm from "../RegisterForm/RegisterForm";
import confetti from "canvas-confetti";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <div className="flex justify-between py-4 px-8 h-20 sticky top-0 z-[999999]  items-center">
      <div className="Nav_left">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`hidden md:flex gap-6 rounded-full  bg-white/10 backdrop-blur-md py-4 px-12 ${isOpen ? "open" : ""}`}>
        <a href="/#home" className="text-white font-semibold hover:text-red-600">Home</a>
        <a href="/#about" className="text-white font-semibold hover:text-red-600">About Us</a>
        <a href="/speakers" className="text-white font-semibold hover:text-red-600">Our Speakers</a>
        <a href="/#whatisbad" className="text-white font-semibold hover:text-red-600">b.a.d?</a>
        <a href="/ourteam" className="text-white font-semibold hover:text-red-600">Our Team</a>
        <a href="/#contact" className="text-white font-semibold hover:text-red-600">Contact Us</a>
      </div>
     

      <div className="Nav_right">

      <Dialog  >
  <DialogTrigger className=' '>
  <div className="register-button" >
  Apply Now
  <svg fill="currentColor" viewBox="0 0 24 24" className="register-icon">
    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
  </svg>
</div>
  </DialogTrigger>
  <DialogContent className='bg-black/10 px-4 md:px-24 max-w-xs md:max-w-md backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
      <DialogTitle className='text-red-600 font-semibold text-3xl py-4'>Register</DialogTitle>
     <RegisterForm Element={ DialogClose}/>
  </DialogContent>
</Dialog>
      </div>
      <div className="Nav_toggler" onClick={toggleNavbar}>
        &#9776;
      </div>
    </div>
  );

}

export default Navbar;
