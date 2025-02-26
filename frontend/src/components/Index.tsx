import { Link } from "react-scroll";

const Index = () => {
  return (
    <section className="p-5 pt-20 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white min-h-[50vh] flex flex-col justify-center border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 dark:from-blue-500 dark:to-purple-500"> {/* 메인 제목 색상 유지 */}
          이승재
        </h1>
        <p className="text-2xl mt-4">백엔드 개발자 포트폴리오</p>
        <p className="mt-8 text-lg">
          안녕하세요. 호기심 많은 백엔드 개발자 이승재입니다. <br />
          다양한 기술을 배우는 데에 흥미를 느낍니다.
        </p>
        <div className="mt-12">
          <ul>
            <li>
              <Link
                to="profile"
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l hover:from-blue-400 hover:to-purple-400 dark:hover:from-blue-500 dark:hover:to-purple-500 transition-all duration-300 cursor-pointer"
              >
                더 알아보기
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Index;