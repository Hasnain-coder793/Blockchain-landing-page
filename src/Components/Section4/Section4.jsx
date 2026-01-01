import React from 'react'
import Left4 from './Left4';
import Right4 from './Right4';

export default function Section4() {
  return (
    <div className='w-screen flex justify-center absolute mt-15 h-[120vh]'>

        <div className='w-7xl bg-[#f0f3f6] rounded-2xl flex gap-3 overflow-hidden'>

             <Left4/>
             <Right4/>

        </div>
    </div>
  )
}

