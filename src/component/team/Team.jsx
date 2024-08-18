import React, { useState } from 'react';
import './Team.css';



// Lead
import Aniket from "../../assets/Teams/Lead/Aniket.webp";
import deeksha from "../../assets/Teams/Lead/deeksha.webp"
import Devesh from "../../assets/Teams/Lead/Devesh.webp"
import Anant from "../../assets/Teams/Lead/Anant.webp"
import Parag from "../../assets/Teams/Lead/parag.webp"
// Tech 
import BharatKhatwani from "../../assets/Teams/Tech/Bharat.webp"
import Ravi from "../../assets/Teams/Tech/Ravi.webp"
import Shivanshi from "../../assets/Teams/Tech/Shivanshi.webp"
import Palak from "../../assets/Teams/Tech/Palak.webp"
import Aaditya from "../../assets/Teams/Tech/AadityaMahashabde.webp"




//Management
import Sakshi from "../../assets/Teams/Management/Sakshi.webp"
import Ashley from "../../assets/Teams/Management/Ashley.webp"
import Shreya from "../../assets/Teams/Management/Shreya.webp"
import Shrishti from "../../assets/Teams/Management/Shrishti.webp"
import Shubh from "../../assets/Teams/Management/Shubh.webp"
import Tanisha from "../../assets/Teams/Management/Tanisha.webp"
import Poonam from "../../assets/Teams/Management/Poonam.webp"

// Curation
import Aditya from "../../assets/Teams/Curation/Aditya.webp"
import Khushi from "../../assets/Teams/Curation/Khushi.webp"
import Soumya from "../../assets/Teams/Curation/Soumya.webp"
import Anushka from "../../assets/Teams/Curation/AnushkaM.webp"
import Vishal from "../../assets/Teams/Curation/Vishal.webp"

// Design
import Aadeesh from "../../assets/Teams/Design/Aadeesh.webp";
import Anjali from "../../assets/Teams/Design/Anjali.webp";
import Meet from "../../assets/Teams/Design/Meet.webp";
import jeny from "../../assets/Teams/Design/Jeny.webp";
import tanishq from "../../assets/Teams/Design/tanishq.webp"
import hardik from "../../assets/Teams/Design/Hardik.webp"

// Social Media 
import Sonali from "../../assets/Teams/Social/SONALI.webp"
import devanshi from "../../assets/Teams/Social/Devanshi.webp"
import sanjeet from "../../assets/Teams/Social/Sanjeet.webp"
import savan from "../../assets/Teams/Social/Savan.webp"
import Paridhi from "../../assets/Teams/Social/Paridhi.webp"


const teamData = {
  Lead: [
    { name: 'Anant Pawar', img: Anant },
    { name: 'Aniket Singh', img: Aniket },
    { name: 'Parag Agrawal', img: Parag },
    { name: 'Devesh Gurjar', img: Devesh },
    { name: 'Deeksha Jain', img: deeksha }
  ],
  Tech: [
    { name: 'Bharat Khatwani', img: BharatKhatwani },
    { name: 'Shivanshi Gupta', img: Shivanshi },
    { name: 'Ravi Gautam', img: Ravi },
    { name: 'Palak Jaiswal', img: Palak },
    { name: 'Aaditya Mahashabde', img: Aaditya },
  ],
  Curation: [
    { name: 'Aditya Kumar Joshi', img: Aditya },
    { name: 'Khushi Nikam', img: Khushi },
    { name: 'Somya Kinkar', img: Soumya },
    { name: 'Vishal Kumar', img: Vishal },
    { name: 'Anushka Meena', img: Anushka }
  ],
  Management: [
    { name: 'Sakshi Sharma', img: Sakshi },
    { name: 'Ashley Mathais', img: Ashley },
    { name: 'Shrishti Arya', img: Shrishti },
    { name: 'Shubh Jain', img: Shubh },
    { name: 'Tanisha Dhakad', img: Tanisha },
    { name: 'Poonam Mewada', img: Poonam }
  ],
  Design: [
    { name: 'Tanishq Thakur', img: tanishq },
    { name: 'Meet Yaduwanshi', img: Meet },
    { name: 'Aadeesh Singhai', img: Aadeesh },
    { name: 'Anjali Shukla', img: Anjali },
    { name: 'Jeny Jain', img: jeny },
    { name: 'Hardik Saini', img: hardik }
  ],
  Social: [
    { name: 'Sonali Singh', img: Sonali },
    { name: 'Savan Lovanshi', img: savan },
    { name: 'Devanshi Nema', img: devanshi },
    { name: 'Sanjeet Singh Bhadoriya', img: sanjeet },
    { name: 'Paridhi Mandloi ', img: Paridhi }
  ]
};


const Team = () => {
  const [activeCategory, setActiveCategory] = useState('Lead');

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  const getColumnCount = (teamSize) => {
    if (teamSize <= 5) return 5;

    return 4;
  };

  const activeTeam = teamData[activeCategory];
  const columnCount = getColumnCount(activeTeam.length);

  return (
    <section className='team-section'>
      <div className="team-title">Meet Our Team</div>
      <div className="team-button-group">
        {Object.keys(teamData).map((category) => (
          <button
            key={category}
            className={`team-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleButtonClick(category)}
            aria-label={`Show ${category.charAt(0).toUpperCase() + category.slice(1)} team`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="team-grid" style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
        {activeTeam.map((member, index) => (
          <div className="team-custom-card" key={index}>
            <div className="team-image-container">
              <img src={member.img} alt={member.name} className="team-custom-image" />
            </div>
            <div className="team-name">{member.name}</div>
            <div className="team-additional-content">

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
