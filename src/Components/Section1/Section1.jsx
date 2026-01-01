import React from 'react'

export default function Section1() {
  return (
    <div className='bg-[url("/Images/background.svg")] bg-cover bg-center bg-no-repeat text-white pt-60 px-60  relative w-screen h-auto min-h-[85vh]'>

        <div className='flex gap-5 flex-col'>

            <h1 className='text-5xl font-bold'>Be early to the future of finance</h1>
            <h2 className='text-2xl font-medium'>Buy Bitcoin, Ethereum, and other leading cryptocurrencies <br /> on a platform trusted by millions.</h2>

            <div className='flex gap-5'>
                <input 
                className='rounded-sm shadow-[0_0_2px_0_rgba(255,255,255,0.8)] w-100 active:border px-5'
                type="text" 
                placeholder='Your email address'/>
                <button className='bg-white text-blue-500 px-2 py-3 rounded-sm font-medium hover:bg-gray-200 transition duration-300'>Sign-Up</button>
            </div>
        </div>
    </div>
  )
}