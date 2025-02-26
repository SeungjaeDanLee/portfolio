const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Seungjae Lee
            </h3>
            <p className="text-gray-400">
              Backend Developer | Full Stack Developer
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            {/* <div className="flex space-x-4">
              <a
                href="https://github.com/SeungjaeDanLee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://velog.io/@vqs210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </a>
            </div> */}
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Seungjae Lee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
