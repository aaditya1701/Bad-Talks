import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import "./RegisterForm.css";
import { Button } from "../../components/ui/button";
import confetti from "canvas-confetti";
import { addDoc, collection, doc, getDocs, setDoc, where, query } from "firebase/firestore";
import { db } from "../../firebase";
import sendEmail from "@/sendEmail";

const RegisterForm = ({ Element }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeName: "",
    year: "",
    why: "",
    referral: "",
  });
  const condition =
    formData.name !== "" &&
    formData.why !== "" &&
    formData.collegeName !== "" &&
    formData.phone !== "" &&
    formData.email !== "" 


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
      alert(error)
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(condition){
        const userCollectionRef = collection(db, "users");
  
        const existingUserQuery = query(userCollectionRef, where("email", "==", formData.email));
        const existingUserSnapshot = await getDocs(existingUserQuery);
        if (!existingUserSnapshot.empty) {
          alert("Email already registered");
          console.error("Email already registered");
          return;
        }
        const ticketId = generateTicketID(formData.name);
        await addDoc(userCollectionRef, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          collegeName: formData.collegeName,
          year: formData.year,
          why: formData.why,
          referral: formData.referral,
          ticketId: ticketId,
        });
  
        const userDaata = await getUserDataByEmail( formData.email)
        console.log(userDaata)
        if(userDaata.ticketId){
          handleConfetti();
          sendEmail({ ...formData, ticketId: userDaata.ticketId });
          console.log("User created successfully!");
          navigate(`/ticket/${userDaata.ticketId}`);
        }
      }
      else{
        alert("please fill all details")
      }
      

      
    } catch (error) {
      console.error("Error creating user:", error);
    }
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
    <form
      onSubmit={handleSubmit}
      className=" w-full space-y-0  md:space-y-4 backdrop-blur-md"
    >
      <div className="inputBox">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name" className="text-xs md:text-sm lg:text-base">
          Name:&nbsp;
        </label>
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
        <label htmlFor="email" className="text-xs md:text-sm lg:text-base">
          Email:&nbsp;
        </label>
      </div>

      <div className="inputBox">
        <input
          type="number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone" className="text-xs md:text-sm lg:text-base">
          Phone&nbsp;Number:
        </label>
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
        <label
          htmlFor="collegeName"
          className="text-xs md:text-sm lg:text-base"
        >
          College&nbsp;Name:
        </label>
      </div>

      <div className="inputBox">
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <label htmlFor="year" className="text-xs md:text-sm lg:text-base">
          Year&nbsp;Of&nbsp;Graduation:
        </label>
      </div>

      <div className="inputBox">
        <input
        className="mt-4  "
          type="text"
          id="why"
          name="why"
          value={formData.why}
          onChange={handleChange}
          required
        />
        <label htmlFor="why" className="text-xs md:text-sm lg:text-base  ">
        What's&nbsp; one&nbsp; question&nbsp; you'd&nbsp; ask&nbsp; the &nbsp; speakers? &nbsp;
        </label>
        
      </div>


      <div className="inputBox">
        <input
          type="text"
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
        
        />
        <label htmlFor="name" className="text-xs md:text-sm lg:text-base">
          Referral:&nbsp;
        </label>
      </div>
 
        <Button
        //  onClick={()=> handleSubmit()}
          variant={"outline"}
          className="rounded-xl w-full mt-4 text-black"
         type="submit"
          // disabled={!condition}
        >
          Submit
        
        </Button>
    </form>
  );
};

export default RegisterForm;