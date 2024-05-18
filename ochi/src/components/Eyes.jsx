import React, { useEffect, useState } from "react";

function Eyes() {
    const [mouseAngle, setMouseAngle] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let MouseX =e.clientX;
            let MouseY =e.clientY;

            let delX = MouseX - window.innerWidth/2;
            let delY = MouseY - window.innerHeight/2;

            var angle = Math.atan2(delY, delX)*(180/Math.PI)
            setMouseAngle(angle-180)
        })
    })
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className='relative w-full  h-full bg-cover bg-center bg-[url("http://www.pixelstalk.net/wp-content/uploads/2016/06/Red-black-wallpaper-full-photos.jpg")]'>
        <div className="absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10">
          <div className="w-[13vw] h-[13vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div style={{transform:`translate(-50%, -50%) rotate(${mouseAngle}deg)`}} className={`line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10`}>
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw] bg-zinc-100 rounded-full flex items-center justify-center">
          <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
          <div style={{transform:`translate(-50%, -50%) rotate(${mouseAngle}deg)`}} className={`line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10`}>
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
