import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function Left3() {
  return (
    <div className='w-1/2 h-full '>

        <div className='flex flex-col items-start  gap-5'>

            <div className='flex flex-col items-start px-25 py-15 gap-8'>

                <div className='flex items-center gap-3 bg-[#eeedfe] text-2xl p-5 hover:opacity-80 rounded-xl text-[#5223e5]'>
                    <IoPhonePortraitOutline />
                    <button>Wallet</button>

                </div>

                <h1 className='text-4xl font-bold text-[#5223e5]'>The only crypto wallet you'll ever need</h1>
    
                <h2 className='text-lg text-[#5223e5]  shadow-[0_0_0_1px_rgba(82,35,229,0.15)] p-3 rounded-lg font-sm'>Buy sell and swap with ease</h2>

                <p className='text-lg text-[#5223e5] shadow-[0_0_0_1px_rgba(82,35,229,0.15)] p-3 rounded-lg font-sm bg-[#eeedfe]'>
                <span className='font-medium'>Earn rewards on your crypto</span> <br />
                Get  up to 10% in annual rewards by putting your crypto to work.</p>

                <h2 className='text-lg text-[#5223e5] shadow-[0_0_0_1px_rgba(82,35,229,0.15)] p-3 rounded-lg font-sm'>Be your own Bank with self-custody</h2>

                <h2 className='text-lg text-[#5223e5] shadow-[0_0_0_1px_rgba(82,35,229,0.15)] p-3 rounded-lg font-sm'>Connect to DeFi</h2>

            </div>
            {/* ............ */}
            <button className='ml-25 px-5 py-4 text-white font-medium text-lg hover:opacity-80 rounded-2xl bg-[#7349f2]'>
                Get Started
            </button>
        </div>
    </div>
  )
}
