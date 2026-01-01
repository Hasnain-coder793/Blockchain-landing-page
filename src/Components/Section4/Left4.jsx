import React from 'react'
import 'remixicon/fonts/remixicon.css';

export default function Left4() {
  return (
    <div className='w-1/2 flex flex-col px-30 justify-center items-start gap-5 h-full'>

        <div className='flex gap-2 bg-[#dfe2ea] p-4 rounded-xl text-gray-500 hover:opacity-80 font-medium text-2xl'>

        <i className="ri-bank-line"></i> 
         <button>Instituational</button>
         </div>

         <h1 className='font-bold text-4xl whitespace-nowrap'>High-touch crypto <br /> solutions for institutions</h1>

         <h2>Spot OTC, derivatives, structured products, and margin lending.</h2>

         <button className=' bg-[#667085] text-white px-5 py-3 rounded-lg hover:opacity-80'>Become a client</button>
    </div>
  )
}
