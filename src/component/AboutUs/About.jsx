import React from 'react'
import video from "../../assets/video.mp4"
export default function About() {
  return (
    <div className='space-y-6 max-w-7xl mx-auto px-8 py-12'>
    <div className='flex items-center justify-center flex-col gap-4' >
    <div className='relative w-fit mx-auto'>
            <span className='h-[1px] w-36 bg-white absolute -bottom-2 -right-9'/>
            <span className='h-[1px] w-36 bg-white absolute -top-2 -left-9'/>
        <h1 className='text-center font-bold text-4xl'>About <span className='text-red-700'>Us</span></h1>
        </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      </div>
      <div className='rounded-3xl overflow-hidden relative h-80 w-full bg-emerald-400'>
      <video className='h-full overflow-hidden object-cover rounded-3xl absolute w-full' controls  autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className='flex justify-between items-center text-xs md:text-lg'>
        <article className='flex-1 p-6 space-y-4' >
          
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quasi blanditiis eum quod dolore ut illum rem at mollitia facilis!</p>
        </article>

        <article className='flex-1 p-6  space-y-4'>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quasi blanditiis eum quod dolore ut illum rem at mollitia facilis!</p>
        </article>
      </div>

      <div className='flex justify-between items-center text-xs md:text-base'>
        <ul className='flex-1 p-6 space-y-4 list-disc list-inside'>
          <li className='text-red-500'>Engaging talks from 7 industry leaders</li>
          <li>Entrepreneurship, partnership, and business strategies</li>
          <li className='text-red-500'>Network opportunities on business strategies</li>
        </ul>
        <ul className='flex-1 p-6 space-y-4 list-disc list-inside'>
          <li className='text-red-500'>Insights from elite panels</li>
          <li>Expos, Q&A aspects</li>
          <li className='text-red-500'>Explosive Q&A summaries</li>
          <li>Actionable takeaways for your business</li>
        </ul>
      </div>
    </div>
  )
}
