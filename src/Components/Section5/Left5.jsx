import React from 'react'

function Left5() {
  return (
    <div className='w-1/2 h-full'>

      <div className='flex flex-col items-start gap-5'>

        <div className='flex flex-col items-start px-6 py-5 gap-8'>

          <div className='flex items-center gap-3 text-2xl p-5 rounded-xl text-[#f38b25]'>

            <button>Wallet</button> 

          </div>

          <h1 className='text-4xl font-bold text-[#f38b25]'>
            The only crypto wallet you'll ever need
          </h1>

          <h2 className='text-lg text-[#f38b25] shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-3 rounded-lg font-sm'>
            Buy sell and swap with ease
          </h2>

          <p className='text-lg text-[#f38b25] shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-3 rounded-lg font-sm'>

            <span className='font-medium'>Earn rewards on your crypto</span><br />
            Get up to 10% in annual rewards by putting your crypto to work.
          </p>

          <h2 className='text-lg text-[#f38b25] shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-3 rounded-lg font-sm'>
            Be your own Bank with self-custody
          </h2>

          <h2 className='text-lg text-[#f38b25] shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-3 rounded-lg font-sm'>
            Connect to DeFi
          </h2>

        </div>

        <button className='ml-6 px-5 py-4 text-white font-medium text-lg rounded-2xl bg-[#f38b25] hover:opacity-80'>
          Get Started
        </button>

      </div>

    </div>
  )
}

export default Left5
