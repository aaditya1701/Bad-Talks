import React from 'react';
import './WhatIsBad.css';
import Img1 from '../../assets/bad-1.jpeg';
import Img2 from '../../assets/bad-2.jpeg';
import Img3 from '../../assets/bad-3.avif';
import Img4 from '../../assets/bad-4.jpg';

const WhatisBad = () => {
  return (
    <section className="whatisbad-section pt-24" id="why-attend">
      <div className="whatisbad-top">
        <h3 className='whatisbad-why-attend'>WHY ATTEND</h3>
        <h1 className="whatisbad-main-head">Why Attend B.A.D. Talks? Uncover the Benefits!</h1>
        <h3>BENEFITS FOR STUDENTS</h3>
        <div className="whatisbad-separator">
          <hr />
          <h3 className="whatisbad-separator-line">BENEFITS FOR STUDENTS</h3>
          <hr />
        </div>
      </div>
      <div className="whatisbad-image-container">
        <div className="whatisbad-image">
          <img src={Img1} alt="Image 1" className="whatisbad-circle" />
          <p className="whatisbad-desc">INTERNSHIP OPPORTUNITIES</p>
        </div>
        <div className="whatisbad-image">
          <img src={Img2} alt="Image 2" className="whatisbad-circle" />
          <p className="whatisbad-desc">GAIN REAL-TIME INDUSTRY INSIGHTS</p>
        </div>
        <div className="whatisbad-image">
          <img src={Img3} alt="Image 3" className="whatisbad-circle" />
          <p className="whatisbad-desc">ENJOY REFRESHMENTS</p>
        </div>
        <div className="whatisbad-image">
          <img src={Img4} alt="Image 4" className="whatisbad-circle" />
          <p className="whatisbad-desc">Interactive Panel Discussion</p>
        </div>
      </div>
    </section>
  );
}

export default WhatisBad;
