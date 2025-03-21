// import React from 'react'
// import { BiSolidBinoculars } from "react-icons/bi";
// import { FiRefreshCcw } from "react-icons/fi";
// import { GiArtificialIntelligence } from "react-icons/gi";



// const Features = () => {
//   return (
//     <div>
//       <div className='h-[135px] w-[650px]  p-2 m-10'>
//         <h1 className='text-[#239C0C] font-bold ml-10 mb-2 text-xl'>FEATURES</h1>
//         <h1 className='text-[64px] font-bold'><span className='text-[64px] font-bold text-[#FEAB4F]'>Why</span> Carbon Crunch?</h1>
//       </div>

//         <div className='bg-[#F5F5F8] w-[1320px] h-[605px] m-auto flex flex-wrap gap-2 p-5'>


//             <div className='w-[415px] h-[273px] bg-white p-5 rounded-2xl'>
//                 <div className='bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full m-3'><p className='text-2xl text-[#239C0C]'><BiSolidBinoculars/></p></div>
//                 <h1 className='font-bold text-2xl'>Automated Data Collection</h1>
//                 <h2>Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</h2>
                
//                  </div>


//             <div className='w-[415px] h-[273px] bg-white  p-5 rounded-2xl'> <div className='bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full m-3'><p className='text-2xl text-[#239C0C]'><BiSolidBinoculars/></p></div>
//                 <h1 className='font-bold text-2xl'>Monitoring & Reporting</h1>
//                 <h2>Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.</h2>
//                 </div>
//             <div className='w-[415px] h-[273px] bg-white  p-5 rounded-2xl'> <div className='bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full m-3'><p className='text-2xl text-[#239C0C]'><BiSolidBinoculars/></p></div>
//                 <h1 className='font-bold text-2xl'>Monitoring & Reporting</h1>
//                 <h2>Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.</h2>
//                 </div>
//             <div className='w-[415px] h-[273px] bg-white  p-5 rounded-2xl'> <div className='bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full m-3'><p className='text-2xl text-[#239C0C]'><FiRefreshCcw /></p></div>
//                 <h1 className='font-bold text-2xl'>Simplified Certification Process</h1>
//                 <h2>Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.</h2>
//                 </div>
//             <div className='w-[415px] h-[273px] bg-white  p-5 rounded-2xl'> <div className='bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full m-3'><p className='text-3xl text-[#239C0C]'><GiArtificialIntelligence />
//             </p></div>
//                 <h1 className='font-bold text-2xl'>AI-Driven Insights</h1>
//                 <h2>Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.</h2>
//                 </div>
//             <div className='w-[415px] h-[273px] bg-white  p-5 rounded-2xl'> <div className='bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full m-3'><p className='text-3xl text-[#239C0C]'><GiArtificialIntelligence/></p></div>
//             <h1 className='font-bold text-2xl'>AI-Driven Insights</h1>
//             <h2>Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.</h2>
//                 </div>
            
//         </div> {/*  gray */}









//     </div>
//   )
// }

// export default Features






// // 2nd try

// import React from 'react';
// import { BiSolidBinoculars } from "react-icons/bi";
// import { FiRefreshCcw } from "react-icons/fi";
// import { GiArtificialIntelligence } from "react-icons/gi";

// const Features = () => {
//   return (
//     <div className="w-full min-h-screen flex flex-col  py-10 ml-7">
//       <div className="h-auto w-[650px] text-center p-2">
//         <h1 className="text-[#239C0C] font-bold text-xl mr-110">FEATURES</h1>
//         <h1 className="text-[48px] md:text-[64px] font-bold">
//           <span className="text-[#FEAB4F]">Why</span> Carbon Crunch?
//         </h1>
//       </div>

//       <div className="bg-[#F5F5F8] w-[90%] md:w-[1320px] min-h-[605px] flex flex-wrap gap-4 p-5 ">
       
//         {[
//           {
//             icon: <BiSolidBinoculars />,
//             title: "Automated Data Collection",
//             description: "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting."
//           },
//           {
//             icon: <BiSolidBinoculars />,
//             title: "Monitoring & Reporting",
//             description: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
//           },
//           {
//             icon: <FiRefreshCcw />,
//             title: "Simplified Certification Process",
//             description: "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance."
//           },
//           {
//             icon: <GiArtificialIntelligence />,
//             title: "AI-Driven Insights",
//             description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
//           },
//           {
//             icon: <GiArtificialIntelligence />,
//             title: "AI-Driven Insights",
//             description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
//           },
//           {
//             icon: <GiArtificialIntelligence />,
//             title: "AI-Driven Insights",
//             description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
//           }
//         ].map((feature, index) => (
//           <div key={index} className="w-[330px] md:w-[415px] h-[273px] bg-white p-5 rounded-2xl shadow-md">
//             <div className="bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full mb-3 text-2xl text-[#239C0C]">
//               {feature.icon}
//             </div>
//             <h1 className="font-bold text-xl md:text-2xl">{feature.title}</h1>
//             <h2 className="text-sm md:text-base">{feature.description}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Features;











// 3rd try


import React from 'react'
import { BiSolidBinoculars } from "react-icons/bi";
import { FiRefreshCcw } from "react-icons/fi";
import { GiArtificialIntelligence } from "react-icons/gi";

const Features = () => {
  return (
    <div className="w-full px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-[#239C0C] font-bold text-xl">FEATURES</h1>
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="text-[#FEAB4F]">Why</span> Carbon Crunch?
        </h1>
      </div>

      {/* Features Grid */}
      <div className="bg-[#F5F5F8] w-full max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 rounded-xl">
        {[
          {
            icon: <BiSolidBinoculars />,
            title: "Automated Data Collection",
            description:
              "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
          },
          {
            icon: <BiSolidBinoculars />,
            title: "Monitoring & Reporting",
            description:
              "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
          },
          {
            icon: <BiSolidBinoculars />,
            title: "Monitoring & Reporting",
            description:
              "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
          },
          {
            icon: <FiRefreshCcw />,
            title: "Simplified Certification Process",
            description:
              "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
          },
          {
            icon: <GiArtificialIntelligence />,
            title: "AI-Driven Insights",
            description:
              "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
          },
          {
            icon: <GiArtificialIntelligence />,
            title: "AI-Driven Insights",
            description:
              "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="w-full bg-white p-6 rounded-2xl shadow-md flex flex-col items-start"
          >
            <div className="bg-[#D6FFD0] h-14 w-14 flex items-center justify-center rounded-full mb-4">
              <p className="text-3xl text-[#239C0C]">{feature.icon}</p>
            </div>
            <h1 className="font-bold text-xl">{feature.title}</h1>
            <h2 className="text-sm">{feature.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
