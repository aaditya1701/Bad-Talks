import { BaggageClaim, CaseUpper, CheckCheck, GhostIcon } from 'lucide-react'
import React from 'react'

export default function NewSection() {
  return (
    <main className='h-full md:h-screen w-full flex flex-col justify-between gap-12 p-4  lg:p-16'>
        <article className='flex text-sm flex-col gap-8 '>
            <div className='flex flex-col gap-8'>
            <h3 className='text-white font-bold text-4xl '>Calling all Visionaries and Change-makers! </h3>
    {/* <p className='text-white/60 max-w-3xl'>Dive into the electrifying world of B.A.D. Talks, where innovation meets inspiration.</p> */}
    <p className='text-white/60 max-w-xl'>
    Dive into the electrifying world of B.A.D. Talks, where innovation meets inspiration. 
    We are committed to curating a dynamic platform where successful founders and entrepreneurs converge. Our mission is to amplify their voices, celebrate their triumphs, and inspire the next generation of visionaries.
    </p>
    <p className='text-white/60 max-w-xl'>Join a community of brilliant minds, learn from success stories, and ignite your entrepreneurial journey.</p>
            </div>
      
        </article>
   
        <div className='h-full lg:h-32 flex flex-col lg:flex-row  items-start sm:items-center pl lg:items-end px-4 py-12 lg:py-4 lg:p-0 gap-4 lg:gap-0   w-full  rounded-3xl bg-white relative'>
            <h4 className='py-3 px-12 font-semibold text-black text-xl  xl:text-3xl uppercase'>By joining B.A.D. Talks, you'll gain access to:</h4>
            <div className='flex items-center  justify-center gap-4 pl-8'>
            <div className='h-24 w-24 bg-black lg:absolute rounded-full -top-1/2 right-8 border flex items-center justify-center ' ><BaggageClaim size={40} /><span className=' hidden lg:absolute lg:block top-24 font-semibold max-w-32  text-black'>Super Cool Swags</span></div>
    <p className='text-black lg:hidden md:text-2xl font-semibold'>Super Cool Swags</p>
            </div>
            <div className='flex items-center justify-center gap-4 pl-8'>
            <div className='h-24 w-24 bg-black lg:absolute rounded-full -top-1/2 right-52 border flex items-center justify-center' ><CheckCheck size={40} /><span className='hidden lg:absolute lg:block top-24 font-semibold max-w-32  text-black'>Great Connections</span></div>
      
      <p className='text-black lg:hidden md:text-2xl font-semibold'>Great Connections</p>
            </div>
            <div className='flex items-center  justify-center gap-4 pl-8 sm:pl-24'>
            <div className='h-24 w-24 bg-black lg:absolute rounded-full -top-1/2 right-96 border flex items-center justify-center' ><CaseUpper size={40} /><span className='hidden lg:absolute lg:block top-24 font-semibold max-w-32  text-black'>Intrship Oppurtunities</span></div>
<p className='text-black lg:hidden md:text-2xl font-semibold p-4'>Internship opportunity</p>
            </div>
        </div>

      
    </main>    
  )
}
