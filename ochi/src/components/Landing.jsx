import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function Landing() {
  const [hoverEnter,setHoverEnter] = useState(false)
  return (
    <div className=" w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure mt-52 px-20">
        {
        // ["Vendor Pulse:","Mastering","Risk Management!"]
        ["Mitigate Risks,", "Elevate with","Vendor Pulse!"]
        .map((item, index) => {
            return (
                <div className="masker">
                    <div className="w-fit flex">
                        {index === 2 && <div className="w-[8.8vw] h-[5.2vw] relative top-[1vw] bg-red-500 mr-[0.8vw] ml-[0.5vw] rounded"></div>}
                        <h1 className="flex items-center uppercase text-[7.3vw] leading-[6.4vw] h-full font-['Neue Montreal Regular'] font-bold">
                            {item}
                        </h1>
                    </div>
                </div>
            )
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-[10vh] flex justify-between items-center py-5 px-20">
        {["For Public and Private Companies", "From the first Pitch to IPO"].map((item, index)=>
        <p className="text-md font-light tracking-tighter leading-none">{item}</p>
        )}
        <div onMouseEnter={()=>setHoverEnter(true)} onMouseLeave={()=>setHoverEnter(false)} className="start flex items-center gap-5">
            <div className={`px-5 py-2 border-[2px] rounded-full border-zinc-500 text-sm capitalize ${hoverEnter ? 'bg-zinc-300 ease-in-out duration-300 text-zinc-900 font-semibold cursor-pointer':'font-semibold'}`}> Start the Project</div>
            <div className={`w-10 h-10 border-[1px] flex items-center justify-center rounded-full ${hoverEnter && 'bg-zinc-300 ease-in-out duration-300 text-zinc-900 font-light'}`}>
                <span className="rotate-[45deg]">
                <FaArrowUpLong />
                </span>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
