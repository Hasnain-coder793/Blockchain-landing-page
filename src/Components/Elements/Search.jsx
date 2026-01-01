import React from 'react'
import { motion } from 'framer-motion'

function Search() {
  return (
    <motion.div 
      className='absolute flex flex-col gap-4 top-15 p-6 -ml-90 w-85 bg-white rounded-lg overflow-hidden shadow-lg'
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <input 
        className='w-full text-black px-3 rounded-lg border-2 h-10 border-blue-500'
        type="text" 
        placeholder='Search' 
      />

      <ul className='flex flex-col px-3 gap-3 text-black'>
        <h1>Blocks</h1>
        <hr />
        <li className='hover:bg-gray-200 transition duration-200 p-2 hover:rounded-lg'>BTC Block</li>
        <hr />
        <li className='hover:bg-gray-200 transition duration-200 p-2 hover:rounded-lg'>BCH Block</li>
        <hr />
        <li className='hover:bg-gray-200 transition duration-200 p-2 hover:rounded-lg'>ETH Block</li>
      </ul>

      <div className='text-black flex gap-2'>
        <button className='bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition duration-300'>Price</button>
        <button className='bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition duration-300'>Block</button>
        <button className='bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition duration-300'>Transaction</button>
        <button className='bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition duration-300'>Charts</button>
      </div>
    </motion.div>
  )
}

export default Search