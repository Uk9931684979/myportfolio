// import React from 'react'

// export default function Skills() {
//   return (
//     <>
//       <section className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="container mx-auto">
//         {/* Technical Skills */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold mb-4">Technical Skills</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* ... (your existing HTML for technical skills) */}
//           </div>
//         </div>

//         {/* Professional Skills */}
//         <div>
//           <h1 className="text-2xl font-bold mb-4">Professional Skills</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* ... (your existing HTML for professional skills) */}
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   )
// }


import React from 'react';
import 'animate.css'; // Import animate.css for animations
import 'tailwindcss/tailwind.css'; // Make sure to include Tailwind CSS styles

const skillsData = [
  { category: 'Technical', skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'] },
  { category: 'Professional', skills: ['Communication', 'Team Collaboration', 'Problem Solving', 'Time Management'] },
];

const Skills = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{category.category} Skills</h3>
          <ul className="grid grid-cols-2 gap-4">
            {category.skills.map((skill, i) => (
              <li
                key={i}
                className={`bg-blue-500 p-4 rounded-md text-white animate__animated animate__fadeIn animate__delay-${i}s`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
