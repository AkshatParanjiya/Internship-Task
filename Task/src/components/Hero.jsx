// import React from 'react'

// const Hero = () => {
//   return (
//     <>
//     <div className='flex m-25 '>

//         <div className='w-[800px] h-[474px] flex flex-col m-auto'>

//           <div className='w-[234px] h-[45px] bg-[#070708] text-[#AFB0B6] p-2 pr-5 rounded-3xl font-medium text-[12px] flex items-center justify-center'>👋 Let's Save our Environment</div>

//         <div className='flex flex-col '>
//             <h1 className='text-[#2D2D2D] font-bold text-[64px]'>Optimize your eco reporting with</h1>
//             <div className='font-bold text-[64px] bg-[#FEAB4F] w-[600px] h-[97px] text-white rounded-4xl px-[20px] '>CARBON CRUNCH</div>

//          <h1 className='text-2xl mt-5     '> <span className='text-green-500 font-bold'>95% </span>Accurtate Carbon Calculation Trusted by Industry </h1>
//          <h1 className='text-2xl   ' >Leaders</h1>

//         </div>

//       <div className='flex mt-8 '>

//       <button className='hover:bg-[#28B30E] hover:text-black text-[#28B30E] text-xl font-bold text- rounded-[6px] w-[200 px] h-[41px] p-[22px] flex items-center justify-center mr-3'>Free Calculator</button>
//       <button className='bg-[#28B30E] text-black font-medium rounded-[6px] w-[134px] h-[41px] p-[22px] flex items-center justify-center'>Book Demo</button>

//       </div>

//         </div>

//       <div>
//         <img className='rounded-2xl' src="./Rectangle.png" alt="" /></div>

//    </div>

//    <div className='flex gap-10 my-40 ml-10'>
//     <div className='w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl'>
//         <h1 className='font-bold text-5xl text-white'>98%</h1>
//         <h1 className='font- text-[18px] text-white mt-2'>of CEOs agree sustainability is their responsibility</h1>
//         </div>
//     <div className='w-[331px] h-[133px] bg-[#28B30E] p-2 rounded-2xl'>
//         <h1 className='font-bold text-5xl text-[#222222]'>3X</h1>
//         <h1 className='font- text-[18px] text-[#222222] mt-2'>ESG High Performer Deliver a Higher Total Shareholder Return</h1>
//         </div>
//     <div className='w-[331px] h-[133px] bg-[#F6F6F6] p-2 rounded-2xl'>
//         <h1 className='font-bold text-5xl text-[#28B30E]'>37%</h1>
//         <h1 className='font- text-[18px] text-[#28B30E] mt-2'></h1>of the world's largest companies have a public net zero target. Nearly all are off track
//         </div>
//     <div className='w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl'>
//         <h1 className='font-bold text-5xl text-white'>18%</h1>
//         <h1 className=' text-[18px] text-white mt-2'>of companies are cutting emissions fast enough to reach net zero by 2050</h1>
//         </div>

//    </div>

//       </>
//   )
// }

// export default Hero

// slider

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Features from "./Features";
// import Services from "./sERVICES.JSX";

// const HeroSlider = () => {
//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       pagination={{ clickable: true }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="w-full h-screen"
//     >
//       {/* Slide 1: Hero Section */}
//       <SwiperSlide>
//         <div className="flex m-25 ">
//           <div className="w-[800px] h-[474px] flex flex-col m-auto">
//             <div className="w-[234px] h-[45px] bg-[#070708] text-[#AFB0B6] p-2 pr-5 rounded-3xl font-medium text-[12px] flex items-center justify-center">
//               👋 Let's Save our Environment
//             </div>
//             <div className="flex flex-col ">
//               <h1 className="text-[#2D2D2D] font-bold text-[64px]">
//                 Optimize your eco reporting with
//               </h1>
//               <div className="font-bold text-[64px] bg-[#FEAB4F] w-[600px] h-[97px] text-white rounded-4xl px-[20px]">
//                 CARBON CRUNCH
//               </div>
//               <h1 className="text-2xl mt-5">
//                 {" "}
//                 <span className="text-green-500 font-bold">95% </span>
//                 Accurate Carbon Calculation Trusted by Industry
//               </h1>
//               <h1 className="text-2xl">Leaders</h1>
//             </div>
//             <div className="flex mt-8 ">
//               <button className="hover:bg-[#28B30E] hover:text-black text-[#28B30E] text-xl font-bold rounded-[6px] w-[200 px] h-[41px] p-[22px] flex items-center justify-center mr-3">
//                 Free Calculator
//               </button>
//               <button className="bg-[#28B30E] text-black font-medium rounded-[6px] w-[134px] h-[41px] p-[22px] flex items-center justify-center">
//                 Book Demo
//               </button>
//             </div>
//           </div>
//           <div>
//             <img className="rounded-2xl" src="./Rectangle.png" alt="" />
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Slide 2: Stats Section */}
//       <SwiperSlide>
//         <div className="flex gap-10 my-40 ml-10">
//           <div className="w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl">
//             <h1 className="font-bold text-5xl text-white">98%</h1>
//             <h1 className="font- text-[18px] text-white mt-2">
//               of CEOs agree sustainability is their responsibility
//             </h1>
//           </div>
//           <div className="w-[331px] h-[133px] bg-[#28B30E] p-2 rounded-2xl">
//             <h1 className="font-bold text-5xl text-[#222222]">3X</h1>
//             <h1 className="font- text-[18px] text-[#222222] mt-2">
//               ESG High Performer Deliver a Higher Total Shareholder Return
//             </h1>
//           </div>
//           <div className="w-[331px] h-[133px] bg-[#F6F6F6] p-2 rounded-2xl">
//             <h1 className="font-bold text-5xl text-[#28B30E]">37%</h1>
//             <h1 className="font- text-[18px] text-[#28B30E] mt-2">
//               of the world's largest companies have a public net zero target. Nearly all are off track
//             </h1>
//           </div>
//           <div className="w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl">
//             <h1 className="font-bold text-5xl text-white">18%</h1>
//             <h1 className=" text-[18px] text-white mt-2">
//               of companies are cutting emissions fast enough to reach net zero by 2050
//             </h1>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Slide 3: (Aur koi section agar hai toh yaha daal sakte ho) */}
//       <SwiperSlide>
//         <div className="flex items-center justify-center h-screen bg-gray-200">
//           {/* <h1 className="text-3xl font-bold">Another Section</h1> */}

//          <Features/>

//         </div>
//       </SwiperSlide>

//       <SwiperSlide>
//         <div className="flex items-center justify-center h-screen bg-gray-200">

//          <Services/>

//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default HeroSlider;

// 3rd try

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Features from "./Features";
// import Services from "./sERVICES.JSX";
// import Navbar from "./Navbar";

// const Hero = () => {
//   const [isSliderMode, setIsSliderMode] = useState(false);

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center">
//       <button
//         onClick={() => setIsSliderMode(!isSliderMode)}
//         className="bg-[#28B30E] text-white font-bold px-6 py-3 rounded-md mb-10"
//       >
//         {isSliderMode ? "Show as Normal" : "Show in Slider"}
//       </button>

//       {isSliderMode ? (
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="w-full h-screen"
//         >
//           <SwiperSlide>
//             <div className="flex m-25">
//               <div className="w-full h-screen flex flex-col m-auto">
//                 <div className="w-[234px] h-[45px] bg-[#070708] text-[#AFB0B6] p-2 pr-5 rounded-3xl font-medium text-[12px] flex items-center justify-center">
//                   👋 Let's Save our Environment
//                 </div>
//                 <div className="flex flex-col">
//                   <h1 className="text-[#2D2D2D] font-bold text-[64px]">
//                     Optimize your eco reporting with
//                   </h1>
//                   <div className="font-bold text-[64px] bg-[#FEAB4F] w-[600px] h-[97px] text-white rounded-4xl px-[20px]">
//                     CARBON CRUNCH
//                   </div>
//                   <h1 className="text-2xl mt-5">
//                     {" "}
//                     <span className="text-green-500 font-bold">95% </span>
//                     Accurate Carbon Calculation Trusted by Industry
//                   </h1>
//                   <h1 className="text-2xl">Leaders</h1>
//                 </div>
//                 <div className="flex mt-8">
//                   <button className="hover:bg-[#28B30E] hover:text-black text-[#28B30E] text-xl font-bold rounded-[6px] w-[200 px] h-[41px] p-[22px] flex items-center justify-center mr-3">
//                     Free Calculator
//                   </button>
//                   <button className="bg-[#28B30E] text-black font-medium rounded-[6px] w-[134px] h-[41px] p-[22px] flex items-center justify-center">
//                     Book Demo
//                   </button>
//                 </div>
//               </div>
//               <div className="bg-red-800 h-96">
//                 <img
//                   className="rounded-2xl"
//                   src="./Rectangle.png"
//                   alt="image"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="flex gap-10 my-40 ml-10">
//               <div className="w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl">
//                 <h1 className="font-bold text-5xl text-white">98%</h1>
//                 <h1 className="font- text-[18px] text-white mt-2">
//                   of CEOs agree sustainability is their responsibility
//                 </h1>
//               </div>
//               <div className="w-[331px] h-[133px] bg-[#28B30E] p-2 rounded-2xl">
//                 <h1 className="font-bold text-5xl text-[#222222]">3X</h1>
//                 <h1 className="font- text-[18px] text-[#222222] mt-2">
//                   ESG High Performer Deliver a Higher Total Shareholder Return
//                 </h1>
//               </div>
//               <div className="w-[331px] h-[133px] bg-[#F6F6F6] p-2 rounded-2xl">
//                 <h1 className="font-bold text-5xl text-[#28B30E]">37%</h1>
//                 <h1 className="font- text-[18px] text-[#28B30E] mt-2">
//                   of the world's largest companies have a public net zero
//                   target. Nearly all are off track
//                 </h1>
//               </div>
//               <div className="w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl">
//                 <h1 className="font-bold text-5xl text-white">18%</h1>
//                 <h1 className=" text-[18px] text-white mt-2">
//                   of companies are cutting emissions fast enough to reach net
//                   zero by 2050
//                 </h1>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <Features />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Services />
//           </SwiperSlide>
//         </Swiper>
//       ) : (
//         <>
//           <Navbar />

//           <div className="flex m-25 ">
//             <div className="w-[800px] h-[474px] flex flex-col m-auto">
//               <div className="w-[234px] h-[45px] bg-[#070708] text-[#AFB0B6] p-2 pr-5 rounded-3xl font-medium text-[12px] flex items-center justify-center">
//                 👋 Let's Save our Environment
//               </div>

//               <div className="flex flex-col ">
//                 <h1 className="text-[#2D2D2D] font-bold text-[64px]">
//                   Optimize your eco reporting with
//                 </h1>
//                 <div className="font-bold text-[64px] bg-[#FEAB4F] w-[600px] h-[97px] text-white rounded-4xl px-[20px] ">
//                   CARBON CRUNCH
//                 </div>

//                 <h1 className="text-2xl mt-5     ">
//                   {" "}
//                   <span className="text-green-500 font-bold">95% </span>
//                   Accurtate Carbon Calculation Trusted by Industry{" "}
//                 </h1>
//                 <h1 className="text-2xl   ">Leaders</h1>
//               </div>

//               <div className="flex mt-8 ">
//                 <button className="hover:bg-[#28B30E] hover:text-black text-[#28B30E] text-xl font-bold text- rounded-[6px] w-[200 px] h-[41px] p-[22px] flex items-center justify-center mr-3">
//                   Free Calculator
//                 </button>
//                 <button className="bg-[#28B30E] text-black font-medium rounded-[6px] w-[134px] h-[41px] p-[22px] flex items-center justify-center">
//                   Book Demo
//                 </button>
//               </div>
//             </div>

//             <div>
//               <img className="rounded-2xl" src="./Rectangle.png" alt="" />
//             </div>
//           </div>

//           <div className="flex gap-10 my-40 ml-10">
//             <div className="w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl">
//               <h1 className="font-bold text-5xl text-white">98%</h1>
//               <h1 className="font- text-[18px] text-white mt-2">
//                 of CEOs agree sustainability is their responsibility
//               </h1>
//             </div>
//             <div className="w-[331px] h-[133px] bg-[#28B30E] p-2 rounded-2xl">
//               <h1 className="font-bold text-5xl text-[#222222]">3X</h1>
//               <h1 className="font- text-[18px] text-[#222222] mt-2">
//                 ESG High Performer Deliver a Higher Total Shareholder Return
//               </h1>
//             </div>
//             <div className="w-[331px] h-[133px] bg-[#F6F6F6] p-2 rounded-2xl">
//               <h1 className="font-bold text-5xl text-[#28B30E]">37%</h1>
//               <h1 className="font- text-[18px] text-[#28B30E] mt-2"></h1>of the
//               world's largest companies have a public net zero target. Nearly
//               all are off track
//             </div>
//             <div className="w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl">
//               <h1 className="font-bold text-5xl text-white">18%</h1>
//               <h1 className=" text-[18px] text-white mt-2">
//                 of companies are cutting emissions fast enough to reach net zero
//                 by 2050
//               </h1>
//             </div>
//           </div>

//           <Features />
//           <Services />
//         </>
//       )}
//     </div>
//   );
// };

// export default Hero;

// 4th

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Features from "./Features";
import Services from "./Services";
import { motion } from "framer-motion";

// import Services from "./components/sERVICES";
import Navbar from "./Navbar";

const Hero = () => {
  const [isSliderMode, setIsSliderMode] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsSliderMode(!isSliderMode)}
        className="bg-[#28B30E] text-white font-bold px-6 py-3 rounded-md mb-6 md:mb-10 cursor-pointer"
      >
        {isSliderMode ? "Show as Normal" : "Show in Slider"}
      </motion.button>

      {isSliderMode ? (
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-auto"
        >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="text-center lg:text-left">
                <div className="bg-black text-gray-400 p-2 px-4 rounded-3xl text-sm inline-block">
                  👋 Let's Save our Environment
                </div>
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[#2D2D2D] font-bold text-3xl md:text-5xl lg:text-6xl mt-4"
                >
                  Optimize your eco reporting with
                </motion.h1>
                <div className="font-bold text-3xl md:text-5xl lg:text-6xl bg-[#FEAB4F] inline-block text-white rounded-lg px-4 py-2">
                  CARBON CRUNCH
                </div>
                <p className="text-lg mt-4">
                  <span className="text-green-500 font-bold">95%</span> Accurate
                  Carbon Calculation Trusted by Industry Leaders
                </p>
                <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                  <button className="hover:bg-[#28B30E] hover:text-black text-[#28B30E] text-lg font-bold border-2 border-[#28B30E] rounded-lg px-6 py-2 cursor-pointer">
                    Free Calculator
                  </button>
                  <button className="bg-[#28B30E] text-black font-medium rounded-lg px-6 py-2 cursor-pointer">
                    Book Demo
                  </button>
                </div>
              </div>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl"
                onAnimationComplete={() => console.log("Animation completed!")}
                src="./Rectangle.png"
                alt="image"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Features />
          </SwiperSlide>
          <SwiperSlide>
            <Services />
          </SwiperSlide>
        </Swiper>
      ) : (
        <>
          <Navbar />
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10 ">
            <div className="text-center lg:text-left">
              <div className="bg-black text-gray-400 p-2 px-4 rounded-3xl text-sm inline-block">
                👋 Let's Save our Environment
              </div>
              <h1 className="text-[#2D2D2D] font-bold text-3xl md:text-5xl lg:text-6xl mt-4">
                Optimize your eco reporting with
              </h1>
              <div className="font-bold text-3xl md:text-5xl lg:text-6xl bg-[#FEAB4F] inline-block text-white rounded-lg px-4 py-2">
                CARBON CRUNCH
              </div>
              <p className="text-lg mt-4">
                <span className="text-green-500 font-bold">95%</span> Accurate
                Carbon Calculation Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                <button className="hover:bg-[#28B30E] hover:text-black text-[#28B30E] text-lg font-bold border-2 border-[#28B30E] rounded-lg px-6 py-2">
                  Free Calculator
                </button>
                <button className="bg-[#28B30E] text-black font-medium rounded-lg px-6 py-2">
                  Book Demo
                </button>
              </div>
            </div>

            <img
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl"
              src="./Rectangle.png"
              alt="image"
            />
          </div>

          {/* <div className='flex gap-10 my-40 ml-10'>
     <div className='w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl'>
         <h1 className='font-bold text-5xl text-white'>98%</h1>
         <h1 className='font- text-[18px] text-white mt-2'>of CEOs agree sustainability is their responsibility</h1>
         </div>
     <div className='w-[331px] h-[133px] bg-[#28B30E] p-2 rounded-2xl'>
        <h1 className='font-bold text-5xl text-[#222222]'>3X</h1>
        <h1 className='font- text-[18px] text-[#222222] mt-2'>ESG High Performer Deliver a Higher Total Shareholder Return</h1>
        </div>
     <div className='w-[331px] h-[133px] bg-[#F6F6F6] p-2 rounded-2xl'>
         <h1 className='font-bold text-5xl text-[#28B30E]'>37%</h1>
         <h1 className='font- text-[18px] text-[#28B30E] mt-2'></h1>of the world's largest companies have a public net zero target. Nearly all are off track
        </div>
     <div className='w-[331px] h-[133px] bg-[#3A3A3A] p-2 rounded-2xl'>
        <h1 className='font-bold text-5xl text-white'>18%</h1>
         <h1 className=' text-[18px] text-white mt-2'>of companies are cutting emissions fast enough to reach net zero by 2050</h1>
       </div>

   </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 px-4 md:px-10 my-10 md:my-40">
          
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[331px] h-[133px] bg-[#3A3A3A] p-4 rounded-2xl"
            >
              <h1 className="font-bold text-xl md:text-5xl text-white">98%</h1>
              <h1 className="text-sm md:text-[18px] text-white mt-2">
                of CEOs agree sustainability is their responsibility
              </h1>
            </motion.div>

            <motion.div

whileHover={{ scale: 1.05, rotate: -2 }}
transition={{ duration: 0.3 }}

             className="w-full md:w-[331px] h-[133px] bg-[#28B30E] p-4 rounded-2xl">
              <h1 className="font-bold text-xl md:text-5xl text-[#222222]">
                3X
              </h1>
              <h1 className="text-sm md:text-[18px] text-[#222222] mt-2">
                ESG High Performer Deliver a Higher Total Shareholder Return
              </h1>
            </motion.div>

           
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            className="w-full md:w-[331px] h-[133px] bg-[#F6F6F6] p-4 rounded-2xl">
              <h1 className="font-bold text-xl md:text-5xl text-[#28B30E]">
                37%
              </h1>
              <h1 className="text-sm md:text-[16px] pb-2 text-[#28B30E] mt-2">
                of the world's largest companies have a public net zero target.
                Nearly all are off track.
              </h1>
            </motion.div>

            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            className="w-full md:w-[331px] h-[133px] bg-[#3A3A3A] p-4 rounded-2xl">
              <h1 className="font-bold text-xl md:text-5xl text-white">18%</h1>
              <h1 className="text-sm md:text-[16px] text-white mt-2">
                of companies are cutting emissions fast enough to reach net zero
                by 2050.
              </h1>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Features />
            <Services />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Hero;
