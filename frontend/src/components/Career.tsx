// import React from "react";
import { motion } from "framer-motion";

const Career = () => {
  return (
    <section id="career" className="p-10 pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 flex justify-center items-center min-h-[40vh] border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-12">Career</h2>
        <motion.ul 
          className="pl-0 space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.li 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-5 md:grid-cols-4">
                <div className="col-span-1 md:col-span-1 relative group">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="엡콧시스템 로고"
                    className="block w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    style={{ aspectRatio: '1/1' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="col-span-4 md:col-span-3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">㈜ 엡콧시스템</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                      풀스택 개발자
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">2024.01 ~</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    아모레퍼시픽 미술관 유료회원제 개발 및 유지보수
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Spring Boot</span>
                    <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">JPA</span>
                    <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Career;