// import React from "react";

const Career = () => {
  return (
    <section id="career" className="p-10 pt-16 bg-gray-50 flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Career</h2>
        <ul className="list-disc pl-8 space-y-4">
          <li className="text-xl text-gray-700">
            <strong className="font-semibold text-gray-900">회사명 1</strong> - 직무 1 (기간: 2021.01 - 2023.01)
          </li>
          <li className="text-xl text-gray-700">
            <strong className="font-semibold text-gray-900">회사명 2</strong> - 직무 2 (기간: 2020.06 - 2021.01)
          </li>
          <li className="text-xl text-gray-700">
            <strong className="font-semibold text-gray-900">회사명 3</strong> - 직무 3 (기간: 2019.04 - 2020.05)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Career;
