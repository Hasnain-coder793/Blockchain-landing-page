import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import DropDown from '../Elements/DropDown';
import Search from '../Elements/Search';

export default function Navbar() {
  const [DropDownShow, setDropDownShow] = useState(false)
  const [searchdisplay, setSearchdisplay] = useState(false)
  return (
    <div className='w-screen cursor-pointer px-30 py-6 flex gap-20 shadow-[0_0_2px_0_rgba(255,255,255,0.8)] items-center bg-[#121c32] h-20 top-0 left-0 fixed z-50'>

        <div className='text-white flex items-center gap-3 text-3xl font-medium'>
            <img 
            className='w-10'
            src="/Images/logo.svg"/>
            <h1>Blockchain <span className='text-gray-500'>.com</span></h1>
        </div>

        <div className='flex items-center text-gray-300 text-lg font-medium list-none gap-10'>

              <li className='hover:bg-gray-100 hover:rounded-lg transition duration-300 p-1'>Wallet</li>

              <li className='hover:bg-gray-100 hover:rounded-lg transition duration-300 p-1'>Exchange</li>

              <li className='hover:bg-gray-100 hover:rounded-lg transition duration-300 p-1'>Explorer</li>

              <li className='hover:bg-gray-100 hover:rounded-lg transition duration-300 p-1'>Pay</li>

              <li className='hover:bg-gray-100 hover:rounded-lg transition duration-300 p-1'>Instituational</li>

              <li
              onMouseEnter={()=>setDropDownShow(true)} 
              onMouseLeave={()=>setDropDownShow(false)} 
              className='relative hover:bg-gray-400 hover:rounded-lg transition duration-300 p-1'>
                  ...
                  {DropDownShow && <DropDown />}
              </li>
        </div>

        <div className='flex text-white gap-10 items-center'>
            <i
           
            onClick={()=>{setSearchdisplay(!searchdisplay)}} 
            className="bg-gray-500 px-2 py-2 rounded-full ri-search-line hover:bg-gray-100 transition duration-300">
               {
              searchdisplay && <Search/>
               }
            </i>

            <button className='border-2 border-white px-5 py-2 rounded-lg hover:opacity-80 transition duration-300'>Log</button>

            <button className='rounded-lg w-20 py-2 bg-white text-black hover:opacity-80 transition duration-300'>Sign Up</button>
        </div>

    </div>
  )
}
