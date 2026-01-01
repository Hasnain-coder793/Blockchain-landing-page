import React from 'react'
import { motion } from 'framer-motion'

function DropDown() {
  return (
    <motion.div 
      className='absolute top-8 p-7 left-0 w-140 bg-white rounded-lg overflow-hidden shadow-lg -ml-90'
     initial={{opacity:0,y:-20}}
     animate={{opacity:1,y:0}}
     transition={{duration:0.3}}
    >
      <div className="flex gap-15">
            <ul className="flex flex-col gap-3 text-gray-400">
              <h1 className="font-bold text-black">Products</h1>
              <br />
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Wallet</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Expchange</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Explorer</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Insituational</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Earn</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Pay</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-400">
              <h1 className="font-bold text-black">Resources</h1>
              <br />
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>API's</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Blog</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Podcast</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Bitcoin Price</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Etherium Price</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Solana Price</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-400">
              <h1 className="font-bold text-black">Company</h1>
              <br />
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>About</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Careers</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Ventures</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Support</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Legal & privacy</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>EU regualtory Documents</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Mica white paper</li>
              <li className='hover:bg-gray-100 transition durtation-300 px-3 hover:rounded-lg'>Complaints handling</li>
            </ul>
          </div>
    </motion.div>
  )
}

export default DropDown