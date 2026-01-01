import React from 'react'
import Left5 from './Left5'
import Right5 from './Right5'

function Section5() {
  return (
    <div className='w-screen flex justify-center mt-250 h-screen'>

      <div className='max-w-7xl w-full bg-[#fff9f3] rounded-2xl flex gap-3 overflow-hidden'>

        <Left5 />
        <Right5 />

      </div>
    </div>
  )
}

export default Section5
