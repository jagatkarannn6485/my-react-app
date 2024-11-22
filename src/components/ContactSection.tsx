// // import React, { useState } from 'react';

// // export function ContactSection() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     company: '',
// //     phone: '',
// //     message: '',
// //     isBulkOrder: false
// //   });

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // In a real application, you would send this data to your backend
// //     // For now, we'll create a mailto link
// //     const subject = `New ${formData.isBulkOrder ? 'Bulk Order' : ''} Inquiry from ${formData.name}`;
// //     const body = `
// // Name: ${formData.name}
// // Email: ${formData.email}
// // Company: ${formData.company}
// // Phone: ${formData.phone}
// // Bulk Order: ${formData.isBulkOrder ? 'Yes' : 'No'}

// // Message:
// // ${formData.message}
// //     `;
    
// //     window.location.href = `mailto:yogesh.sk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
// //   };

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value, type } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
// //     }));
// //   };

// //   return (
// //     <section className="py-16 bg-gray-50" id="contact">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
// //           <p className="text-lg text-gray-600">
// //             For more information and bulk orders, please reach out to us
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //           <div className="bg-white p-8 rounded-lg shadow-md">
// //             <h3 className="text-xl font-semibold mb-6">Company Information</h3>
// //             <div className="space-y-4">
// //               <div className="flex items-start space-x-4">
// //                 <div className="w-24 flex-shrink-0">
// //                   <span className="font-semibold text-gray-700">Address:</span>
// //                 </div>
// //                 <span className="text-gray-600">
// //                   Plot No.- 121, Sector-9, Phase III, HSIIDC, IMT Bawal, Rewari, Haryana-123501
// //                 </span>
// //               </div>
// //               <div className="flex items-center space-x-4">
// //                 <div className="w-24 flex-shrink-0">
// //                   <span className="font-semibold text-gray-700">Phone:</span>
// //                 </div>
// //                 <span className="text-gray-600">+91-9878244824</span>
// //               </div>
// //               <div className="flex items-center space-x-4">
// //                 <div className="w-24 flex-shrink-0">
// //                   <span className="font-semibold text-gray-700">Email:</span>
// //                 </div>
// //                 <span className="text-gray-600">quickcircuitdesign@gmail.com</span>
// //               </div>
// //             </div>

// //             <div className="mt-8 pt-6 border-t border-gray-200">
// //               <h4 className="font-semibold mb-4">Production Capacity:</h4>
// //               <ul className="space-y-2 text-gray-600">
// //                 <li>• Single Sided PCBs: 3000 SQMTR/month</li>
// //                 <li>• Double Sided PCBs: 2000 SQMTR/month</li>
// //                 <li>• Metal Core PCBs: 2500 SQMTR/month</li>
// //               </ul>
// //             </div>
// //           </div>

// //           <div className="bg-white p-8 rounded-lg shadow-md">
// //             <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Name *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     required
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Email *
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     required
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Company
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="company"
// //                     name="company"
// //                     value={formData.company}
// //                     onChange={handleChange}
// //                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Phone
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     id="phone"
// //                     name="phone"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// //                   Message *
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   required
// //                   rows={4}
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //                 ></textarea>
// //               </div>

// //               <div className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   id="isBulkOrder"
// //                   name="isBulkOrder"
// //                   checked={formData.isBulkOrder}
// //                   onChange={handleChange}
// //                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //                 />
// //                 <label htmlFor="isBulkOrder" className="ml-2 block text-sm text-gray-700">
// //                   This is a bulk order inquiry
// //                 </label>
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// //               >
// //                 Send Message
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import React, { useState } from 'react';

// export function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     message: '',
//     isBulkOrder: false,
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://b1c4-2401-4900-8510-c9a8-89da-3dfa-3808-5e6b.ngrok-free.app/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Message sent successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           company: '',
//           phone: '',
//           message: '',
//           isBulkOrder: false,
//         });
//       } else {
//         alert('Failed to send message.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while sending the message.');
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value, type } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
//     }));
//   };

//   return (
//     <section id="contact">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
//           <p className="text-lg text-gray-600">
//             For more information and bulk orders, please reach out to us
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-6">Company Information</h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <div className="w-24 flex-shrink-0">
//                   <span className="font-semibold text-gray-700">Address:</span>
//                 </div>
//                 <span className="text-gray-600">
//                   Plot No.- 121, Sector-9, Phase III, HSIIDC, IMT Bawal, Rewari, Haryana-123501
//                 </span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="w-24 flex-shrink-0">
//                   <span className="font-semibold text-gray-700">Phone:</span>
//                 </div>
//                 <span className="text-gray-600">+91-9878244824</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="w-24 flex-shrink-0">
//                   <span className="font-semibold text-gray-700">Email:</span>
//                 </div>
//                 <span className="text-gray-600">quickcircuitdesign@gmail.com</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-8 rounded-lg shadow-md">
//  <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   rows={4}
//                 />
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isBulkOrder"
//                   name="isBulkOrder"
//                   checked={formData.isBulkOrder}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 <label htmlFor="isBulkOrder" className="text-sm text-gray-600">
//                   Is this a bulk order?
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// new wala tha 




import React, { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    isBulkOrder: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://b1c4-2401-4900-8510-c9a8-89da-3dfa-3808-5e6b.ngrok-free.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          isBulkOrder: false,
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            For more information and bulk orders, please reach out to us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Company Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-24 flex-shrink-0">
                  <span className="font-semibold text-gray-700">Address:</span>
                </div>
                <span className="text-gray-600">
                  Plot No.- 121, Sector-9, Phase III, HSIIDC, IMT Bawal, Rewari, Haryana-123501
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-24 flex-shrink-0">
                  <span className="font-semibold text-gray-700">Phone:</span>
                </div>
                <span className="text-gray-600">+91-9878244824</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-24 flex-shrink-0">
                  <span className="font-semibold text-gray-700">Email:</span>
                </div>
                <span className="text-gray-600">quickcircuitdesign@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows={4}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isBulkOrder"
                  name="isBulkOrder"
                  checked={formData.isBulkOrder}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="isBulkOrder" className="text-sm text-gray-600">
                  Is this a bulk order?
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { useState } from 'react';

// export function ContactSection() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         company: '',
//         phone: '',
//         message: '',
//         isBulkOrder: false,
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//       const { name, value, type } = e.target; // Destructure name, value, and type from e.target
//       const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined; // Use type assertion for checked
  
//       setFormData((prev) => ({
//           ...prev,
//           [name]: type === 'checkbox' ? checked : value, // Use checked for checkbox inputs
//       }));
//   };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         const response = await fetch('/.netlify/functions/saveData', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         });

//         const result = await response.json();
//         console.log(result);
//         if (response.ok) {
//             alert('Data saved successfully!');
//             setFormData({
//                 name: '',
//                 email: '',
//                 company: '',
//                 phone: '',
//                 message: '',
//                 isBulkOrder: false,
//             });
//         } else {
//             alert('Failed to save data.');
//         }
//     };

//     return (
//         <section id="contact">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
//                     <p className="text-lg text-gray-600">
//                         For more information and bulk orders, please reach out to us
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     <div className="bg-white p-8 rounded-lg shadow-md">
//                         <h3 className="text-xl font-semibold mb-6">Company Information</h3>
//                         <div className="space-y-4">
//                             <div className="flex items-start space-x-4">
//                                 <div className="w-24 flex-shrink-0">
//                                     <span className="font-semibold text-gray-700">Address:</span>
//                                 </div>
//                                 <span className="text-gray-600">
//                                     Plot No.- 121, Sector-9, Phase III, HSIIDC, IMT Bawal, Rewari, Haryana-123501
//                                 </span>
//                             </div>
//                             <div className="flex items-center space-x-4">
//                                 <div className="w-24 flex-shrink-0">
//                                     <span className="font-semibold text-gray-700">Email:</span>
//                                 </div>
//                                 <span className="text-gray-600">info@yourcompany.com</span>
//                             </div>
//                             <div className="flex items-center space-x-4">
//                                 <div className="w-24 flex-shrink-0">
//                                     <span className="font-semibold text-gray-700">Phone:</span>
//                                 </div>
//                                 <span className="text-gray-600">+91-123-456-7890</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-white p-8 rounded-lg shadow-md">
//                         <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
//                         <form onSubmit={handleSubmit}>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Your Name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Your Email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                             />
//                             <input
//                                 type="text"
//                                 name="company"
//                                 placeholder="Your Company"
//                                 value={formData.company}
//                                 onChange={handleChange}
//                                 className=" w-full p-2 border border-gray-300 rounded mb-4"
//                             />
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="Your Phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                             />
//                             <textarea
//                                 name="message"
//                                 placeholder="Your Message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                             />
//                             <label className="flex items-center mb-4">
//                                 <input
//                                     type="checkbox"
//                                     name="isBulkOrder"
//                                     checked={formData.isBulkOrder}
//                                     onChange={handleChange}
//                                     className="mr-2"
//                                 />
//                                 <span>Request a bulk order</span>
//                             </label>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-500 text-white p-2 rounded"
//                             >
//                                 Submit
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }