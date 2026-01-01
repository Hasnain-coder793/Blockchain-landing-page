import React from 'react'
export default function Section2() {
  return (
    <div className='bg-[#f9f8fb] w-screen h-auto'>

        <div className='flex px-60 gap-8 -mt-20 relative z-10'>

           {/* card 1  */}

            <div className='bg-white hover:bg-gray-200 flex flex-col gap-10 w-60 px-5 py-2 h-40 rounded-lg shadow-lg transition duration-300'> 

             <div className='flex gap-10 items-center'>
                <img src="/Images/bitcoin.svg"/>
                <h1 className='text-purple-600 bg-purple-200 p-1 rounded-sm'>Buy</h1>
                <h1 className='text-green-500 bg-green-200 p-1 rounded-sm'>Trade</h1>
             </div>

            <div className='font-medium flex flex-col gap-2'>
                 <h1>Bitcoin  <span className='text-blue-500'>BTC</span></h1>
                 <h1>$87,768.00-2.36% <span className='text-red-500'>-2.36%</span></h1>
            </div>

         </div>

         {/* card 2  */}

            <div className='bg-white hover:bg-gray-200 flex flex-col gap-10 w-60 px-5 py-2 h-40 rounded-lg shadow-lg transition duration-300'> 

             <div className='flex gap-10 items-center'>

                <img src="/Images/logo.svg"/>
                <h1 className='text-purple-600 bg-purple-200 p-1 rounded-sm'>Buy</h1>
                <h1 className='text-green-500 bg-green-200 p-1 rounded-sm'>Trade</h1>

             </div>

            <div className='font-medium flex flex-col gap-2'>
                 <h1>Etherium <span className='text-gray-500'>ETC</span></h1>
                 <h1>2,955.64<span className='text-red-500'>-3.30%</span></h1>
            </div>

         </div>

        {/* card 3  */}

            <div className='bg-white hover:bg-gray-200 flex flex-col gap-10 w-60 px-5 py-2 h-40 rounded-lg shadow-lg transition duration-300'> 

             <div className='flex gap-10 items-center'>
                <img src="/Images/doge.svg"/>
                <h1 className='text-purple-600 bg-purple-200 p-1 rounded-sm'>Buy</h1>
                <h1 className='text-green-500 bg-green-200 p-1 rounded-sm'>Trade</h1>
             </div>

            <div className='font-medium flex flex-col gap-2'>
                 <h1>DogeCoin <span className='text-gray-500'>DOGE</span></h1>
                 <h1>$0.13 <span className='text-red-500'>-1.81%</span></h1>
            </div>

         </div>

        {/* card 4  */}

            <div className='bg-white hover:bg-gray-200 flex flex-col gap-10 w-60 px-5 py-2 h-40 rounded-lg shadow-lg transition duration-300'> 

             <div className='flex gap-10 items-center'>
                <img 
                className='w-8'
                src="/Images/sol.svg"/>
                <h1 className='text-purple-600 bg-purple-200 p-1 rounded-sm'>Buy</h1>
                <h1 className='text-green-500 bg-green-200 p-1 rounded-sm'>Trade</h1>
             </div>

            <div className='font-medium flex flex-col gap-2'>
                 <h1>Solana <span className='text-gray-500'>SOL</span></h1>
                 <h1>$0.13<span className='text-red-500'>-2.08%</span></h1>
            </div>

         </div>

        </div>
        
        <div className='px-60 py-20'>
            {/* Add other content for Section2 below the overlapping cards */}
        </div>
    </div>
  )
}