import React from "react";
import { motion } from "framer-motion";
function Marquee() {
  motion;
  return (
    <div className="py-10 w-full bg-red-900 rounded-tl-3xl rounded-tr-3xl ">
      <div className="text border-t-2 border-b-2 border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap text-zinc-200">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
          className='text-[10vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase'
        >
          Keep Your Pulse on Risk - Monitor, Manage, and Mitigate with
          Precision!
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
