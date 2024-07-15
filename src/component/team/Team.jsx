import React, { useState } from 'react';
import './Team.css';



// Lead
import Aniket from "../../assets/Lead/Aniket.jpg";
import deeksha from "../../assets/Lead/deeksha.png"
import Devesh from "../../assets/Lead/Devesh.jpg"
import Anant from "../../assets/Lead/Anant.jpg"
// Tech 
import BharatKhatwani from "../../assets/Tech/Bharat.jpg"
import Bharat from "../../assets/Tech/Bharat.jpg"
import Ravi from "../../assets/Tech/Ravi.jpg"
import Shivanshi from "../../assets/Tech/Shivanshi.jpg"
import Palak from "../../assets/Tech/Palak.jpg"
import Ananya from "../../assets/Tech/Ananya.jpg"



//Management
import Sakshi from "../../assets/Management/Sakshi.jpg"
import Ashley from "../../assets/Management/Ashley.jpg"
import Shreya from "../../assets/Management/Shreya.jpg"
import Shrishti from "../../assets/Management/Shrishti.jpg"
import Shubh from "../../assets/Management/Shubh.jpg"
import Tanisha from "../../assets/Management/Tanisha.jpg"

// Curation
import Aditya from "../../assets/Curation/Aditya.jpg"
import Khushi from "../../assets/Curation/Khushi.jpg"
import Soumya from "../../assets/Curation/Soumya.jpg"
import Bhuvneshwari from "../../assets/Curation/Bhuvneshwari.jpg"
import Anushka from "../../assets/Curation/AnushkaM.jpg"
import Vishal from "../../assets/Curation/Vishal.jpg"

// Design
import Aadeesh from "../../assets/Design_Video/Aadeesh.jpg";
import Anjali from "../../assets/Design_Video/Anjali.jpg";
import Meet from "../../assets/Design_Video/Meet.jpg";
import jeny from "../../assets/Design_Video/Jeny.jpg";
import tanishq from "../../assets/Design_Video/tanishq.png"
import hardik from "../../assets/Design_Video/Hardik.jpg"

// Social Media 
import Sonali from "../../assets/Social/SONALI.jpg"
import devanshi from "../../assets/Social/Devanshi.jpg"
import sanjeet from "../../assets/Social/Sanjeet.jpg"
import savan from "../../assets/Social/Savan.jpg"
import Paridhi from "../../assets/Social/Paridhi Mandloi.jpg"


const teamData = {
  Lead: [
    { name: 'Anant Pawar', img: Anant },
    { name: 'Aniket Singh', img: Aniket },
    { name: 'Deeksha Jain', img: deeksha },
    { name: 'Parag Agarwal', img: BharatKhatwani },
    { name: 'Devesh Gurjar', img: Devesh }
  ],
  Tech: [
    { name: 'Bharat Khatwani', img: BharatKhatwani },
    { name: 'Shivanshi Gupta', img: Shivanshi },
    { name: 'Ravi Gautam', img: Ravi },
    { name: 'Palak Jaiswal', img: Palak },
    { name: 'Ananya Gupta', img:  Ananya},
    { name: 'Other', img: Bharat }
  ],
  Curation: [
    { name: 'Aditya Kumar Joshi', img: Aditya },
    { name: 'Khushi Nikam', img: Khushi },
    { name: 'Somya Kinkar', img: Soumya },
    { name: 'Bhuvneshwari Batham', img: Bhuvneshwari },
    { name: 'Vishal Kumar', img: Vishal },
    { name: 'Anushka Meena', img: Anushka  }
  ],
  Management: [
    { name: 'Sakshi Sharma', img: Sakshi },
    { name: 'Ashley Mathais', img: Ashley },
    { name: 'Shreya Tiwari', img: Shreya },
    { name: 'Shrishti Arya', img: Shrishti },
    { name: 'Shubh Jain', img: Shubh },
    { name: 'Tanisha Dhakad', img: Tanisha },
    { name: 'Poonam Mewada', img: Bharat }
  ],
  Design: [
    { name: 'Tanishq Thakur', img: tanishq },
    { name: 'Meet Yaduwanshi', img: Meet },
    { name: 'Aadeesh Singhai', img: Aadeesh },
    { name: 'Anjali Shukla', img: Anjali },
    { name: 'Jeny Jain', img: jeny },
    { name: 'Hardik Saini', img: hardik }
  ],
  Social_Media: [
    { name: 'Sonali Singh', img: Sonali },
    { name: 'Savan Lovanshi', img: savan },
    { name: 'Devanshi Neema', img: devanshi },
    { name: 'Sanjeet Singh Bhadoriya', img: sanjeet },
    { name: 'Krishna', img: Bharat },
    { name: 'Paridhi Mandloi ', img: Paridhi }
  ]
};


const Team = () => {
  const [activeCategory, setActiveCategory] = useState('Lead');

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  const getColumnCount = (teamSize) => {
    if (teamSize <= 5) return 5 ;
   
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
