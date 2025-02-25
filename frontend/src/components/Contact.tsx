// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef(null);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "YOUR_SERVICE_ID",
//       "YOUR_TEMPLATE_ID",
//       form.current!,
//       "YOUR_PUBLIC_KEY"
//     ).then(() => {
//       alert("이메일이 전송되었습니다!");
//     }).catch((err) => console.error(err));
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} className="p-10">
//       <input type="text" name="name" placeholder="이름" className="border p-2 w-full" required />
//       <input type="email" name="email" placeholder="이메일" className="border p-2 w-full my-2" required />
//       <textarea name="message" placeholder="메시지" className="border p-2 w-full" required />
//       <button type="submit" className="bg-blue-500 text-white p-2 mt-2">보내기</button>
//     </form>
//   );
// };

// export default Contact;
