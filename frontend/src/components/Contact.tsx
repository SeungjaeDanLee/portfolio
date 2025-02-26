import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      ).then(() => {
        alert("이메일이 전송되었습니다!");
        form.current?.reset();
      }).catch((err) => console.error("이메일 전송 실패:", err));
    }
  };

  return (
    <section id="contact" className="p-10 pt-16 bg-white dark:bg-gray-900 flex justify-center items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-12">Contact</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="이름을 입력해주세요"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일 주소를 입력해주세요"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="메시지를 입력해주세요"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                required
              />
            </div>
            <motion.div 
              className="flex justify-end"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-semibold"
                style={{ transition: 'transform 0.2s' }}
              >
                보내기
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;