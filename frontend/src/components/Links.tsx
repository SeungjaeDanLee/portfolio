// // import React from "react"; // import React 제거 (사용하지 않음)
// import { motion } from "framer-motion";

// const Links = () => {
//   const links = [
//     {
//       name: "GitHub",
//       url: "https://github.com/SeungjaeDanLee",
//       icon: (
//         <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
//         </svg>
//       ),
//       bgClass: "from-gray-700 to-gray-900",
//     },
//     {
//       name: "Blog",
//       url: "https://velog.io/@vqs210",
//       icon: (
//         <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
//         </svg>
//       ),
//       bgClass: "from-green-600 to-green-800",
//     },
//   ];

//   return (
//     <section id="links" className="p-10 pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-b border-gray-300 dark:border-gray-700">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-12">Links</h2>
//         <motion.div 
//           className="flex flex-wrap justify-center gap-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {links.map((link) => (
//             <motion.a
//               key={link.name}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center px-6 py-3 bg-gradient-to-r ${link.bgClass} text-white rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg`}
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {link.icon}
//               {link.name}
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Links;