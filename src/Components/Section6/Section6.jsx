import React from 'react'

function Section6() {
  return (
    <div className='relative flex justify-center items-center overflow-hidden w-screen mt-15 h-[30vh] bg-[#121c32]'>
   
    <img 
    className='absolute inset-0 object-cover h-full w-full'
    src="/Images/pattren.svg"/>

    <div className='text-white reltive z-10 flex gap-5 justify-center items-center font-medium'>
          <h1 className='text-5xl'>Let us take you from zero to crypto</h1>
          <button className='p-3 rounded-lg bg-white text-blue-500 hover:bg-gray-200 transition duration-300'>Get started</button>
      </div>
    </div>
  )
}

export default Section6