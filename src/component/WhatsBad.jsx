import React from 'react'
import event from '../assets/bad_taks_front_page.png'
import B from '../assets/B.png'
import A from '../assets/A.png'
import D from '../assets/D.png'
export default function WhatsBad() {
  return (
    <main id='whatisbad' className='h-full md:h-screen py-16'>
        <div className='relative w-fit mx-auto'>
            <span className='h-[1px] w-36 bg-white absolute -bottom-2 -right-9'/>
            <span className='h-[1px] w-36 bg-white absolute -top-2 -left-9'/>
        <h1 className='text-center font-bold text-4xl'>What does <span className='text-red-700'>B.A.D</span> means.?</h1>
        </div>

    <div className=' h-full flex flex-col lg:flex-row mt-36 lg:mt-0 items-center justify-center gap-24 lg:gap-12 px-4 lg:px-24   w-full'>

       <div className='w-full mx-auto md:h-fit lg:w-full max-w-96 lg:max-w-72 aspect-video  relative'>
<span className='h-[1px] w-24 bg-white absolute -top-4 -right-6'></span>
<img src={event} alt="Event"  className='h-[96] w-auto absolute'/>
<span className='h-[1px] w-24 bg-white absolute -bottom-4 -left-6'></span>

</div>
        <div className='flex-1 flex flex-col justify-center items-start gap-12'>



<section className='flex flex-col md:flex-row items-center justify-center gap-4'>
<img src={B} alt="img" className=" hover:lg:pl-16 transition-all duration-500 h-28 w-28 min-w-28 border-2 p-4 rounded-full border-white " />
<div className='bg-white text-black/40 h-full  lg:pr-16  w-full md:w-full rounded-3xl py-3 px-6'>
<span className='text-red-600 font-semibold '>Breakdown : </span>CEOs share their stories by breaking down their career paths, revealing the critical steps, failures, and learnings that shaped their success. This segment emphasizes understanding the foundational elements that contribute to their professional journeys
</div>
</section>
<section className=' pl-0 lg:pl-16 flex flex-col md:flex-row items-center justify-center gap-4'>
<img src={A} alt="img" className=" hover:lg:pl-16 transition-all duration-500 h-28 w-28 min-w-28 border-2 p-4 rounded-full border-white " />
<div className='bg-white text-black/40 h-full  w-full md:w-full rounded-3xl py-3 px-6'>
<span className='text-red-600 font-semibold'>Analysis : </span>This part involves an in-depth look at the business strategies,
                market dynamics, and leadership principles employed by these
                leaders. This segment provides a comprehensive understanding of
                the practical applications of business theories and models.
</div>
</section>
<section className='flex flex-col md:flex-row items-center justify-center gap-4'>
<img src={D} alt="img" className=" hover:lg:pl-16 transition-all duration-500 h-28 w-28 min-w-28 border-2 p-4 rounded-full border-white " />
<div className='bg-white text-black/40 h-full lg:pr-16  w-full md:w-full rounded-3xl py-3 px-6'>
<span className='text-red-600 font-semibold'>Decision : </span>Focuses on the creative and strategic aspects of leadership,
                where CEOs share their approaches to innovation, strategic
                planning, and problem-solving and how execute their ideas. It’s
                about designing a roadmap to success, highlighting the
                importance of foresight, adaptability, and innovation in the
                corporate world.
</div>
</section>
        </div>
      
    </div>
    </main>

  )
}
