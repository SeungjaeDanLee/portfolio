import { motion } from "framer-motion";

const Profile = () => {
  const profileInfo = [
    { label: "이름", value: "이승재", icon: "👤" },
    { label: "생년월일", value: "1993.02.20", icon: "📅" },
    { label: "주소", value: "서울 관악구", icon: "📍" },
    { label: "연락처", value: "010-2060-1376", icon: "📱" },
    { label: "이메일", value: "vqs210@gmail.com", icon: "📧" },
    { label: "학력", value: "부산대학교(사학과)", icon: "🎓" },
  ];

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/SeungjaeDanLee",
      // icon: (
      //   <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
      //     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      //   </svg>
      // ),
      bgClass: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="profile" className="p-10 pt-16 bg-white dark:bg-gray-900 flex justify-center items-center border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-12">Profile</h2>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center p-8 border-b border-gray-100 dark:border-gray-700">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile-image.jpg"
                alt="프로필 이미지"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-gray-800"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">이승재</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Backend Developer</p>
            
            <div className="flex gap-4 mt-6">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 bg-gradient-to-r ${link.bgClass} text-white rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* {link.icon} */}
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileInfo.map(({ label, value, icon }) => (
                <div 
                  key={label} 
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  style={{ transition: 'transform 0.2s' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
                    <p className="text-gray-900 dark:text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;