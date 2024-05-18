import React from 'react'

function About() {
  return (
    <div className='w-full bg-zinc-800 p-20 rounded-tl-3xl rounded-tr-3xl'>
         <h1 className='font-["Neue Montreal Regular"] pr-[10vw] text-[2vw] leading-[3vw]'>Zeron helps your mitigate the third party risks with ease by dividing the whole process into well-manageable helping users with the Onboarding process & making it simpler for you. </h1>
         <div className='w-full border-t-[1px] border-zinc-300 mt-10 flex py-10'>
            <div className='w-1/2 text-[1vw]'>
                <p>What can you expect:</p>
            </div>
            <div className='w-1/4 flex flex-col gap-16 pr-[2vw] text-[1vw]'>
                <p >We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='w-1/4 flex pl-[10vw] flex-col text-[1vw] leading-9'>
                <p>S:</p>
                <a href=''>Instagram</a>
                <a href=''>Facebook</a>
                <a href=''>LinkedIn</a>
                <a href=''>X</a>
            </div>
         </div>
         <div className='border-t-[1px] font-["Neue Montreal Regular"] border-zinc-300 mt-1 flex py-10'>
            <div className='w-1/2'>
                <h1 className='font-bold text-[6vh]'>Our Approach:</h1>
                <button className='px-4 py-3 pl-6 uppercase bg-zinc-100 text-zinc-900 mt-10 rounded-full flex items-center gap-7'>
                    Read More
                    <div className='w-3 h-3 bg-zinc-900 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2'>
                <div className='w-full h-[30vh] bg-zinc-500 rounded-xl'>
                <img src="https://imagetolink.com/ib/07Lke4YI0H.png" alt="07Lke4YI0H"/>
                </div>
            </div>
         </div>
    </div>
    
  )
}

export default About
