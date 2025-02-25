// import React from "react";

const Links = () => {
  return (
    <section id="links" className="p-10 pt-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Links</h2>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/SeungjaeDanLee"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors hover:bg-blue-700"
        >
          GitHub
        </a>
        <a
          href="https://your-blog.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white rounded-lg transition-colors hover:bg-green-700"
        >
          Blog
        </a>
      </div>
    </section>
  );
};


export default Links;
