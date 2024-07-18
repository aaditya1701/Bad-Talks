  import React from 'react';
import './WhatIsBad.css';
import Img1 from '../../assets/Whatis/bad-1.webp';
import Img2 from '../../assets/Whatis/bad-2.webp';
import Img3 from '../../assets/Whatis/bad-3.webp';
import Img4 from '../../assets/Whatis/bad-4.webp';

const WhatisBad = () => {
  return (
    <section className="whatisbad-section pt-24 overflow-hidden" id="why-attend">
      <div className="whatisbad-top">
      
      <div className='relative w-fit mx-auto'>
            <span className='h-[1px] w-36 bg-white absolute -bottom-2 -right-9'/>
            <span className='h-[1px] w-36 bg-white absolute -top-2 -left-9'/>
        <h1 className='text-center font-bold text-4xl'>Why  <span className='text-red-700'> B.A.D. Talks</span> <h1 className='text-center font-bold text-4xl'>is a Must-Attend Event? </h1> </h1>
        </div>
       
    
        <div className="whatisbad-separator">
     
          <h3 className="whatisbad-separator-line"> Uncover the Benefits!</h3>
       
        </div>
      </div>
      <div className="whatisbad-image-container">
        <div className="whatisbad-image">
          <img src={Img1} alt="Image 1" className="whatisbad-circle" />
          <p className="whatisbad-desc">Internship Opportunities</p>
        </div>
        <div className="whatisbad-image">
          <img src={Img2} alt="Image 2" className="whatisbad-circle" />
          <p className="whatisbad--desc">Inspirational Stories</p>
        </div>
        <div className="whatisbad-image">
          <img src={Img1} alt="Image 3" className="whatisbad-circle" />
          <p className="whatisbad-desc">Career Guidance and Mentorship
</p>
        </div>
        <div className="whatisbad-image">
          <img src={Img4} alt="Image 4" className="whatisbad-circle" />
          <p className="whatisbad-desc">Round Table Conference</p>
        </div>
      </div>
    </section>
  );
}

export default WhatisBad;
