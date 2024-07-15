import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import "./RegisterForm.css";
import { Button } from "../../components/ui/button";
import confetti from 'canvas-confetti';

const RegisterForm = ({Element})=> {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeName: "",
    year: "",
    why: "",
  });
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ticket/shiv213")
    console.log("Form Data:", formData);
    // Implement logic to handle form submission (e.g., send data to backend)
  };

  useEffect(() => {
    document.querySelectorAll("label").forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, i) =>
            `<span style="transition-delay:${i * 0}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
      <form onSubmit={handleSubmit} className=" w-full space-y-0  md:space-y-4 backdrop-blur-md">
        <div className="inputBox">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="text-xs md:text-sm lg:text-base">Name:&nbsp;</label>
        </div>

        <div className="inputBox">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="text-xs md:text-sm lg:text-base">Email:&nbsp;</label>
        </div>

        <div className="inputBox">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone" className="text-xs md:text-sm lg:text-base">Phone Number:</label>
        </div>

        <div className="inputBox">
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
          <label htmlFor="collegeName" className="text-xs md:text-sm lg:text-base">College Name:</label>
        </div>

        <div className="inputBox">
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min={1}
            max={4}
            required
          />
          <label htmlFor="year" className="text-xs md:text-sm lg:text-base">Year:&nbsp;</label>
        </div>

        <div className="inputBox">
          <input
            type="text"
            id="why"
            name="why"
            value={formData.why}
            onChange={handleChange}
            required
          />
          <label htmlFor="why" className="text-xs md:text-sm lg:text-base">Why &nbsp;do&nbsp; you&nbsp; want&nbsp; to&nbsp; register?</label>
       
        </div>
       <Element>
        <Button  onClick={handleConfetti} variant={'outline'} className='rounded-xl w-full mt-4 text-black' type="submit">Submit</Button>

       </Element>
          
       

      </form>
  );
};

export default RegisterForm;
