// "use client";
// import Head from "next/head";
// import { useState, useEffect, useRef } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { Divider } from "@mui/material";

// export default function Contact() {
//   const [showToast, setShowToast] = useState(false);
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // Magnetic button logic
//   const buttonRef = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { stiffness: 300, damping: 20 });
//   const springY = useSpring(y, { stiffness: 300, damping: 20 });

//   const handleMouseMove = (e) => {
//     const rect = buttonRef.current.getBoundingClientRect();
//     const dx = e.clientX - rect.left - rect.width / 2;
//     const dy = e.clientY - rect.top - rect.height / 2;
//     x.set(dx * 0.2);
//     y.set(dy * 0.2);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <>
//       <Head>
//         <title>Contact | Abhay Sharma</title>
//       </Head>

//       <main className="min-h-full px-6 md:px-20 md:mt-16 pt-20 pb-60 bg-[#1b1b1b] text-white relative overflow-hidden">
//         <div className="flex flex-col md:flex-row justify-between items-start">
//           {/* Left Section */}
//           <div className="md:w-1/2 space-y-4">
//             <h1 className="text-5xl md:text-7xl font-light leading-tight">
//               Let's start a<br />
//               <span className="font-medium">project together</span>
//             </h1>

//             <form
//               className="space-y-12 pt-10"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 setShowToast(true);
//                 setTimeout(() => setShowToast(false), 3000);
//               }}
//             >
//               {[
//                 { label: "What's your name?", placeholder: "Abhay J Sharma *" },
//                 { label: "What's your email?", placeholder: "abhayjsharma440@gmail.com *" },
//                 {
//                   label: "What's the name of your organization?",
//                   placeholder: "Org ®",
//                 },
//                 {
//                   label: "What services are you looking for?",
//                   placeholder: "Web Design, Web Development ...",
//                 },
//                 {
//                   label: "Your message",
//                   placeholder: "Hello Abhay, can you help me with ... *",
//                 },
//               ].map((field, idx) => (
//                 <div key={idx}>
//                   <label className="block text-sm mb-1 text-gray-400">
//                     0{idx + 1}
//                   </label>
//                   <div className="border-b border-gray-600 pb-4">
//                     <p className="text-lg">{field.label}</p>
//                     {field.label === "Your message" ? (
//                       <textarea
//                         placeholder={field.placeholder}
//                         className="w-full mt-2 bg-transparent outline-none text-gray-400 placeholder-gray-500"
//                         rows={3}
//                         required
//                       />
//                     ) : (
//                       <input
//                         type="text"
//                         placeholder={field.placeholder}
//                         className="w-full mt-2 bg-transparent outline-none text-gray-400 placeholder-gray-500"
//                         required={field.placeholder.includes("*")}
//                       />
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </form>
//           </div>

//           {/* Right Section */}
//           <div className="md:w-1/3 mt-16 md:mt-0 space-y-10 text-sm text-gray-300">
//             <div className="flex justify-center md:justify-start">
//               <img
//                 src="/profile.png"
//                 alt="Profile"
//                 className="w-96 h-96 rounded-full object-cover border-white border-4"
//               />
//             </div>

//             <div>
//               <h3 className="text-md text-white uppercase mb-2">
//                 Contact Details
//               </h3>
//               <p className="font-bold text-lg">abhayjsharma440@gmail.com</p>
//               <p className="font-bold text-lg">+91 95381 14942</p>
//             </div>

//                  <div>
//               <h3 className="text-md text-white uppercase mb-2">
//                 Address
//               </h3>
//               <p className="font-bold text-lg">Bengaluru , Karnataka , <br/> India</p>
            
//             </div>
//              <div>
//               <h3 className="text-md text-white uppercase mb-2">
//                 Social Media
//               </h3>
//               <a href="https://www.linkedin.com/in/abhay-j-sharma/" target="_blank" className="hover:underline font-bold text-lg">
//               LinkedIn
//             </a>
//             <br/>
//             <a href="https://instagram.com/abhay-j-sharma-142" target="_blank" className="hover:underline font-bold text-lg">
//               Instagram
//             </a>
//             <br/>
//             <a href="https://github.com/hi-abhay2004" target="_blank" className="hover:underline font-bold text-lg">
//               GitHub
//             </a>
//             </div>
        
//           </div>
//         </div>

//         {/* Send Button w/ divider and magnetic effect */}
//         <hr className="relative w-3/4 md:w-3/5 top-36  left-16 border-gray-600"/>
//         <div className="absolute bottom-10 w-full flex justify-center items-center">
             
//           <div className="relative flex items-center justify-center mb-28 md:mb-0">
//   <motion.div
//     ref={buttonRef}
//     onMouseMove={handleMouseMove}
//     onMouseLeave={handleMouseLeave}
//     style={{ x: springX, y: springY }}
//     className="w-28 h-28 md:relative md:left-30 md:bottom-28 md:w-36 md:h-36 rounded-full bg-[#4f5cf7] flex items-center justify-center text-white font-medium text-sm md:text-lg cursor-pointer transition-all duration-300"
//     onClick={() => {
//       document.querySelector("form").requestSubmit();
//     }}
//   >
//     Send it!
//   </motion.div>
// </div>
//         </div>

//         {/* Bottom row with time and socials */}
//         <div className="absolute bottom-4  w-11/12 px-6 md:px-20 flex justify-between items-center text-sm text-gray-400">
//           <div>LOCAL TIME — {time}</div>
//           <div className="flex gap-4">
//             <a href="https://www.linkedin.com/in/abhay-j-sharma/" target="_blank" className="hover:underline">
//               LinkedIn
//             </a>
//             <a href="https://instagram.com/abhay-j-sharma-142" target="_blank" className="hover:underline">
//               Instagram
//             </a>
//             <a href="https://github.com/hi-abhay2004" target="_blank" className="hover:underline">
//               GitHub
//             </a>
//           </div>
//         </div>

//         {/* Snackbar */}
//         {showToast && (
//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 60, opacity: 0 }}
//             className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-3 rounded shadow-lg"
//           >
//             Message sent successfully!
//           </motion.div>
//         )}
//         {/* Extra space at bottom for scroll breathing room */}
//         <div className="h-32" />
//       </main>
//     </>
//   );
// }



"use client";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx * 0.3);
    y.set(dy * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <Head>
        <title>Contact | Abhay Sharma</title>
      </Head>

      <main className="min-h-screen px-6 md:px-20 pt-24 pb-60 bg-[#1b1b1b] text-white relative overflow-hidden">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Left form section */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Let's start a<br />
              <span className="font-medium">project together</span>
            </h1>

            <form
              action="https://usebasin.com/f/09653221a696"
              method="POST"
              className="space-y-12 pt-10"
              onSubmit={() => {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              }}
            >
              {[
                { label: "What's your name?", placeholder: "Abhay J Sharma *" },
                { label: "What's your email?", placeholder: "abhayjsharma440@gmail.com *" },
                { label: "What's the name of your organization?", placeholder: "Org ®" },
                { label: "What services are you looking for?", placeholder: "Web Design, Web Development ..." },
                { label: "Your message", placeholder: "Hello Abhay, can you help me with ... *" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm mb-1 text-gray-400">0{idx + 1}</label>
                  <div className="border-b border-gray-600 pb-4">
                    <p className="text-lg">{field.label}</p>
                    {field.label === "Your message" ? (
                      <textarea
                        placeholder={field.placeholder}
                        className="w-full mt-2 bg-transparent outline-none text-gray-400 placeholder-gray-500 resize-none"
                        rows={3}
                        name={`field_${idx}`}
                        required
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        className="w-full mt-2 bg-transparent outline-none text-gray-400 placeholder-gray-500"
                        name={`field_${idx}`}
                        required={field.placeholder.includes("*")}
                      />
                    )}
                  </div>
                </div>
              ))}
            </form>
          </div>

          {/* Right profile/info section */}
          <div className="md:w-1/3 flex flex-col items-start space-y-10 text-sm text-gray-300">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-white border-4"
            />

            <div>
              <h3 className="text-md text-white uppercase mb-2">Contact Details</h3>
              <p className="font-bold text-lg">abhayjsharma440@gmail.com</p>
              <p className="font-bold text-lg">+91 95381 14942</p>
            </div>

            <div>
              <h3 className="text-md text-white uppercase mb-2">Address</h3>
              <p className="font-bold text-lg">Bengaluru, Karnataka,<br />India</p>
            </div>

            <div>
              <h3 className="text-md text-white uppercase mb-2">Social Media</h3>
              <div className="space-y-1">
                <a href="https://www.linkedin.com/in/abhay-j-sharma/" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-lg">LinkedIn</a><br />
                <a href="https://instagram.com/abhay-j-sharma-142" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-lg">Instagram</a><br />
                <a href="https://github.com/hi-abhay2004" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-lg">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Magnetic Send it Button */}
        <hr className="w-3/4 md:w-3/5 mt-24 border-gray-600 mx-auto" />
        <div className="flex justify-center mt-16 md:absolute md:bottom-40 md:left-2/3 ">
          <motion.div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            onClick={() => {
              document.querySelector("form").requestSubmit();
            }}
            className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#4f5cf7] flex items-center justify-center text-white font-medium text-sm md:text-lg cursor-pointer shadow-xl"
          >
            Send it!
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-6 w-full px-6 md:px-32 flex justify-between items-center text-sm text-gray-400">
          <h1>LOCAL TIME — {time}</h1>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/abhay-j-sharma/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://instagram.com/abhay-j-sharma-142" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href="https://github.com/hi-abhay2004" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
        </div>

        {/* Toast Snackbar */}
        {showToast && (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-3 rounded shadow-lg z-50"
          >
            Message sent successfully!
          </motion.div>
        )}
      </main>
    </>
  );
}
