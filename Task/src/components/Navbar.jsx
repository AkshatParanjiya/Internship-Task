// import React from 'react'

// const Navbar = () => {
//   return (
//    <>
//     <div className='flex justify-around gap-10 h-[53px] w-full mt-[52px]'>
//         <div>
//          <img src="./Frame.png" alt="" />

//          </div>

//         {/* <div className='flex justify-between'> */}
//         <div className='flex'>
//             <ul className='flex gap-10 m-auto '>
//                 <li className='hover:bg-[#28B30E] p-2 rounded-xl'>Home</li>
//                 <li className='hover:bg-[#28B30E] p-2 rounded-xl'>Services</li>
//                 <li className='hover:bg-[#28B30E] p-2 rounded-xl'>Blogs</li>
//                 <li className='hover:bg-[#28B30E] p-2 rounded-xl'>About Us</li>
//                 <li className='hover:bg-[#28B30E] p-2 rounded-xl'>Contact</li>
//             </ul>
//         </div>
//         <div className='flex gap-10 items-center justify-center'>
//             <button className='bg-[#D6FFD0] hover:bg-[#28B30E] hover:text-black text-[#28B30E] font-medium rounded-[6px] w-[134px] h-[41px] p-[22px] flex items-center justify-center'>Login</button>
//             <button className='bg-[#28B30E] text-black font-medium rounded-[6px] w-[134px] h-[41px] p-[22px] flex items-center justify-center'>Book Demo</button>
//         </div>
//         {/* </div> */}
      
//       </div>
//    </>
//   )
// }

// export default Navbar



// 2ndtry


import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-screen-xl mx-auto px-5">
      <div className="flex justify-between items-center h-[60px]">
      
        <div>
          <img src="./Frame.png" alt="Logo" className="h-10" />
        </div>

        <ul className="hidden md:flex gap-8">
          <li className="hover:bg-[#28B30E] p-2 rounded-xl cursor-pointer">Home</li>
          <li className="hover:bg-[#28B30E] p-2 rounded-xl cursor-pointer">Services</li>
          <li className="hover:bg-[#28B30E] p-2 rounded-xl cursor-pointer">Blogs</li>
          <li className="hover:bg-[#28B30E] p-2 rounded-xl cursor-pointer">About Us</li>
          <li className="hover:bg-[#28B30E] p-2 rounded-xl cursor-pointer">Contact</li>
        </ul>

        <div className="hidden md:flex gap-6">
          <button className="bg-[#D6FFD0] hover:bg-[#28B30E] hover:text-black cursor-pointer text-[#28B30E] font-medium rounded-[6px] w-[134px] h-[41px]">
            Login
          </button>
          <button className="bg-[#28B30E] text-black font-medium rounded-[6px] w-[134px] h-[41px] cursor-pointer">
            Book Demo
          </button>
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md md:hidden">
          <li className="hover:bg-[#28B30E] p-2 rounded-xl w-full text-center cursor-pointer">
            Home
          </li>
          <li className="hover:bg-[#28B30E] p-2 rounded-xl w-full text-center cursor-pointer">
            Services
          </li>
          <li className="hover:bg-[#28B30E] p-2 rounded-xl w-full text-center cursor-pointer">
            Blogs
          </li>
          <li className="hover:bg-[#28B30E] p-2 rounded-xl w-full text-center cursor-pointer">
            About Us
          </li>
          <li className="hover:bg-[#28B30E] p-2 rounded-xl w-full text-center cursor-pointer">
            Contact
          </li>
          <button className="bg-[#D6FFD0] hover:bg-[#28B30E] text-[#28B30E] font-medium rounded-[6px] w-[120px] h-[35px]">
            Login
          </button>
          <button className="bg-[#28B30E] text-black font-medium rounded-[6px] w-[120px] h-[35px]">
            Book Demo
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

