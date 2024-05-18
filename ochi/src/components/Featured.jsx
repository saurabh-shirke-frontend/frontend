import React from 'react'

function Featured() {
  return (
    <div className='w-full p-10 pt-17 bg-zinc-700'>
        <h1 className='font-bold font-["Neue Montreal Regular"] text-[3vw] text-zinc-300'>Featured Projects:</h1>
        <div className='border-t-[1px] border-zinc-950 mt-10 p-5 flex gap-10'>
            <div className='w-1/2 bg-zinc-900 h-[32vw] rounded-xl'></div>
            <div className='w-1/2 bg-zinc-900 h-[32vw] rounded-xl'></div>
        </div>
    </div>
  )
}

export default Featured