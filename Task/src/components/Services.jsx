// import React from 'react'

// const Services = () => {
//   return (
//     <div className='flex'>
//       <div className='w-[808px] h-[657px]  mt-45'>
//         <img src="./3d-rendering-computer-desk 1.png" alt="" />
//       </div>
//       <div>
//       <div className='h-[135px] w-[650px]  p-2 m-10'>
//         <h1 className='text-[#239C0C] font-bold ml-10 mb-2 text-xl'>OUR SERVICES</h1>
//         <h1 className='text-[64px] font-bold'>What do <span className='text-[64px] font-bold text-[#FEAB4F]'>we do?</span></h1>
//       </div>

//      <div className='w-[750px] h-[606px] m-5 flex flex-col gap-5 p-2  mb-0 '>
//          <div className='w-[731px] h-[294px] bg-[#F5F5F8] p-10 rounded-2xl flex flex-col gap-5 '>
//                         {/* <div className='bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full m-3'><p className='text-2xl text-[#239C0C]'><BiSolidBinoculars/></p></div> */}
//                         <h1 className='font-bold text-[48px]'>GHG Accounting</h1>
//                         <h2>We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</h2>
//             <button className='bg-[#D6FFD0] hover:bg-[#28B30E] hover:text-black text-[#28B30E] font-medium rounded-[10px] w-[180px] h-[41px] p-[22px] flex items-center justify-center'>See more details</button>
                        
                        
//                          </div>
//                          <div className='w-[731px] h-[294px] bg-[#F5F5F8] p-10 rounded-2xl flex flex-col gap-5  '>
//                         {/* <div className='bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full m-3'><p className='text-2xl text-[#239C0C]'><BiSolidBinoculars/></p></div> */}
//                         <h1 className='font-bold text-[48px]'>GHG Accounting</h1>
//                         <h2>We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</h2>
//             <button className='bg-[#D6FFD0] hover:bg-[#28B30E] hover:text-black text-[#28B30E] font-medium rounded-[10px] w-[180px] h-[41px] p-[22px] flex items-center justify-center'>See more details</button>
                        
                        
//                          </div>
//      </div>
       
//       </div>
//     </div>
//   )
// }

// export default Services









// 2nd try








// import React from 'react';

// const Services = () => {
//   return (
//     <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center py-10">
      
      
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img className="max-w-[600px] md:max-w-[800px] h-auto object-cover" src="/3d-rendering-computer-desk 1.png" alt="Services" />
//       </div>

     
//       <div className="w-full md:w-1/2 flex flex-col items-start px-5">
//         <div className="w-full max-w-[650px] text-left p-2">
//           <h1 className="text-[#239C0C] font-bold text-xl">OUR SERVICES</h1>
//           <h1 className="text-[48px] md:text-[64px] font-bold">
//             What do <span className="text-[#FEAB4F]">we do?</span>
//           </h1>
//         </div>

        
//         {[
//           {
//             title: "GHG Accounting",
//             description: "We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint."
//           },
//           {
//             title: "GHG Accounting",
//             description: "We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint."
//           }
//         ].map((service, index) => (
//           <div key={index} className="w-full max-w-[731px] bg-[#F5F5F8] p-10 rounded-2xl mb-5 shadow-md">
//             <h1 className="font-bold text-[32px] md:text-[48px]">{service.title}</h1>
//             <h2 className="text-sm md:text-base">{service.description}</h2>
//             <button className="bg-[#D6FFD0] hover:bg-[#28B30E] hover:text-black text-[#28B30E] font-medium rounded-[10px] w-[180px] h-[41px] p-[22px] flex items-center justify-center mt-5">
//               See more details
//             </button>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Services;




// 3rd


import React from 'react'

const Services = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-10 gap-10">
      {/* Image Section */}
      <div className="w-full max-w-[800px]">
        <img
          className="w-full h-auto object-cover rounded-xl"
          src="/3d-rendering-computer-desk 1.png"
          alt="Services"
        />
      </div>

      {/* Text & Services */}
      <div className="w-full max-w-[750px]">
        {/* Heading */}
        <div className="mb-6 text-center lg:text-left">
          <h1 className="text-[#239C0C] font-bold text-xl">OUR SERVICES</h1>
          <h1 className="text-3xl md:text-5xl font-bold">
            What do <span className="text-[#FEAB4F]">we do?</span>
          </h1>
        </div>

        {/* Services Cards */}
        <div className="space-y-5">
          {[
            {
              title: "GHG Accounting",
              description:
                "We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.",
            },
            {
              title: "GHG Accounting",
              description:
                "We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="w-full bg-[#F5F5F8] p-6 rounded-2xl shadow-md flex flex-col gap-5"
            >
              <h1 className="font-bold text-2xl">{service.title}</h1>
              <h2 className="text-sm">{service.description}</h2>
              <button className="bg-[#D6FFD0] hover:bg-[#28B30E] hover:text-black text-[#28B30E] font-medium rounded-[10px] w-[180px] h-[41px] flex items-center justify-center">
                See more details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
