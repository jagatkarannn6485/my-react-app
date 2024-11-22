import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { useState } from 'react';
// import { ProcessModal } from './ProcessModal';
// export function Header() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <header 
//       id="home" // Add this line
//       className="relative h-screen flex items-center justify-center"
//     >
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: 'url("https://www.raypcb.com/wp-content/uploads/2021/03/a63ca0232bb6e9d-2.jpg")',
//           filter: 'brightness(0.7)'
//         }}
//       ></div>
//      <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
//         <h1 className="text-5xl font-bold mb-4">Quick Circuit India Pvt. Ltd.</h1>
//         <p className="text-xl mb-8">
//           A leading manufacturer and designer of printed circuit boards (PCBs) located in IMT Bawal, Rewari, Haryana, India
//         </p>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//         >
//           <span className="absolute inset-0 w-full h-full bg-white/30 group-hover:scale-x-150 group-hover:scale-y-150 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></span>
//           <span className="relative">Explore Our Process</span>
//         </button>
//       </div>
//       <ProcessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </header>
//   );
// }
import { useState } from 'react';
import { ProcessModal } from './ProcessModal';
export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (_jsxs("header", { className: "relative h-screen flex items-center justify-center", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-no-repeat", style: {
                    backgroundImage: 'url("https://www.raypcb.com/wp-content/uploads/2021/03/a63ca0232bb6e9d-2.jpg")',
                    filter: 'brightness(0.7)'
                } }), _jsxs("div", { className: "relative text-center text-white z-10 max-w-4xl mx-auto px-4", children: [_jsx("h1", { className: "text-5xl font-bold mb-4", children: "Quick Circuit India Pvt. Ltd." }), _jsx("p", { className: "text-xl mb-8", children: "A leading manufacturer and designer of printed circuit boards (PCBs) located in IMT Bawal, Rewari, Haryana, India" }), _jsxs("button", { onClick: () => setIsModalOpen(true), className: "group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [_jsx("span", { className: "absolute inset-0 w-full h-full bg-white/30 group-hover:scale-x-150 group-hover:scale-y-150 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100" }), _jsx("span", { className: "relative", children: "Explore Our Process" })] })] }), _jsx(ProcessModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })] }));
}
