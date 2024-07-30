import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";
import { Button } from "../../components/ui/button";
import confetti from "canvas-confetti";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import sendEmail from "@/sendEmail";

const RegisterForm = ({ Element }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    collegeName: "",
    otherCollegeName: "",
    year: "",
    computerCode: "",
    questionToSpeaker: "",
    referral: "",
  });

  const condition =
    formData.firstName !== "" &&
    formData.lastName !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.collegeName !== "" &&
    formData.year !== "" &&
    formData.questionToSpeaker !== "";

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const generateTicketID = (name) => {
    const initials = name.toUpperCase();
    const ticketID = `${initials}`;
    return ticketID;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getUserDataByEmail = async (email) => {
    try {
      const userCollectionRef = collection(db, "users");
      const querySnapshot = await getDocs(query(userCollectionRef, where("email", "==", email)));

      if (querySnapshot.empty) {
        console.log("No user found with this email.");
        return null;
      }

      const userData = querySnapshot.docs[0].data();
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert(error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (condition) {
        const userCollectionRef = collection(db, "users");

        const existingUserQuery = query(userCollectionRef, where("email", "==", formData.email));
        const existingUserSnapshot = await getDocs(existingUserQuery);
        if (!existingUserSnapshot.empty) {
          alert("Email already registered");
          console.error("Email already registered");
          return;
        }

        const ticketId = generateTicketID(formData.firstName);
        
        await addDoc(userCollectionRef, {
          ...formData,
          collegeName: formData.collegeName === "other" ? formData.otherCollegeName : formData.collegeName, // Adjusted for other college
          ticketId: ticketId,
        });

        const userData = await getUserDataByEmail(formData.email);
        console.log(userData);
        if (userData.ticketId) {
          handleConfetti();
          sendEmail({ ...formData, ticketId: userData.ticketId });
          console.log("User created successfully!");
          navigate(`/ticket/${userData.ticketId}`);
        }
      } else {
        alert("Please fill all details");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-0 md:space-y-4 backdrop-blur-md "
    >
      <div className="nameContainer">
        <div className="inputBox no-margin">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputBox no-margin">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="inputBox">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="inputBox">
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="inputBox">
        <select
          id="collegeName"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
          required
        >
          <option value="">Select your college</option>
          <option value="ips">IPS</option>
          <option value="other">Other College</option>
        </select>
      </div>

      {formData.collegeName === "other" && (
        <div className="inputBox">
          <input
            type="text"
            id="otherCollegeName"
            name="otherCollegeName"
            placeholder="Enter your college name"
            value={formData.otherCollegeName}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div className="yearCodeContainer">
        <div className="inputBox">
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select your year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

      <div className="inputBox">
        <input
          type="text"
          id="computerCode"
          name="computerCode"
          placeholder="Computer Code (Only for IPS college)"
          value={formData.computerCode}
          onChange={handleChange}
        />
      </div>

      <div className="inputBox">
        <input
          className=""
          type="text"
          id="questionToSpeaker"
          name="questionToSpeaker"
          placeholder="What's one question you'd ask the speakers?"
          value={formData.questionToSpeaker}
          onChange={handleChange}
          required
        />
      </div>

      <div className="inputBox">
        <input
          type="text"
          id="referral"
          name="referral"
          placeholder="Referral (Optional)"
          value={formData.referral}
          onChange={handleChange}
        />
      </div>

      <Button
        variant={"outline"}
        className="rounded-xl w-full mt-4 text-black"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default RegisterForm;
