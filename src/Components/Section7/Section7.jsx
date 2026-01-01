import React from "react";
import "remixicon/fonts/remixicon.css";

function Section7() {
  return (
    <div className="w-screen h-screen">
      <div className="w-7xl h-full ml-35 mt-10">
        <div className="flex  items-center justify-between">
          <div className="flex items-center gap-5">
            
            <img src="/Images/logo.svg" />
            <h1 className="text-3xl font-bold">
              Blochain <span className="text-gray-400">.com</span>
            </h1>
          </div>

          <div className="border border-black w-200"></div>

          <div className="flex gap-5 items-center">
            <img src="/Images/x.png" />
            <img src="/Images/linkedin.png" />
            <img src="/Images/instagram.png" />
            <img src="/Images/facebook.png" />
          </div>
        </div>
        <br /> <br />
        <div className="flex items-center gap-20">
          <div className="flex flex-col gap-3">
            <img src="/Images/QR.png" />
            <h1 className="font-medium">Scan to Download</h1>
          </div>

          <div className="flex  gap-15">
            <ul className="flex flex-col gap-3 text-gray-400 cursor-pointer">
              <h1 className="font-bold text-black">Products</h1>
              <br />
              <li className="hover:font-medium  hover:text-[#121c32]">Wallet</li>
              <li className="hover:font-medium  hover:text-[#121c32]">Expchange</li>
              <li className="hover:font-medium  hover:text-[#121c32]">Explorer</li>
              <li className="hover:font-medium  hover:text-[#121c32]">Insituational</li>
              <li className="hover:font-medium  hover:text-[#121c32]">Earn</li>
              <li className="hover:font-medium  hover:text-[#121c32]">Pay</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-400 cursor-pointer">
              <h1 className="font-bold text-black">Resources</h1>
              <br />
              <li className="hover:font-medium hover:text-[#121c32]">API's</li>
              <li className="hover:font-medium hover:text-[#121c32]">Blog</li>
              <li className="hover:font-medium hover:text-[#121c32]">Podcast</li>
              <li className="hover:font-medium hover:text-[#121c32]">Bitcoin Price</li>
              <li className="hover:font-medium hover:text-[#121c32]">Etherium Price</li>
              <li className="hover:font-medium hover:text-[#121c32]">Solana Price</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-400 cursor-pointer">
              <h1 className="font-bold text-black">Company</h1>
              <br />
              <li className="hover:font-medium hover:text-[#121c32]">About</li>
              <li className="hover:font-medium hover:text-[#121c32]">Careers</li>
              <li className="hover:font-medium hover:text-[#121c32]">Ventures</li>
              <li className="hover:font-medium hover:text-[#121c32]">Support</li>
              <li className="hover:font-medium hover:text-[#121c32]">Legal & privacy</li>
              <li className="hover:font-medium hover:text-[#121c32]">EU regualtory Documents</li>
              <li className="hover:font-medium hover:text-[#121c32]">Mica white paper</li>
              <li className="hover:font-medium hover:text-[#121c32]">Complaints handling</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-400 cursor-pointer">
              <h1 className="font-bold text-black">Learn</h1>
              <br />
              <li className="hover:font-medium hover:text-[#121c32]">what is Bitcoin?</li>
              <li className="hover:font-medium hover:text-[#121c32]">what is cryoto Wallet?</li>
              <li className="hover:font-medium hover:text-[#121c32]">What is DEX?</li>
              <li className="hover:font-medium hover:text-[#121c32]">what assests do we support</li>
              <li className="hover:font-medium hover:text-[#121c32]">Learning Portal</li>
              <li className="hover:font-medium hover:text-[#121c32]">Buy Guides</li>
              <li className="hover:font-medium hover:text-[#121c32]">Buy BTC</li>
              <li className="hover:font-medium hover:text-[#121c32]">Buy ETH</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-black flex flex-col gap-2 ml-35 -mt-50">
        <div className="flex gap-3">
          <i className="ri-global-line"></i>
          <select className="w-fit">
            <option value="">English</option>
            <option value="">Espanol</option>
            <option value="">spanish</option>
            <option value="">Urdu</option>
          </select>
        </div>

        <div className="flex gap-3">
          <i className="ri-copyright-line"></i>
          <h1 className="font-medium">Blockchain.com</h1>
        </div>
      </div>
    </div>
  );
}

export default Section7;
