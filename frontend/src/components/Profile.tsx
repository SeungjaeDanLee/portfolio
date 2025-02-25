const Profile = () => {
  return (
    <section id="profile" className="p-10 pt-16 bg-gray-50 flex justify-center items-center">
      <div className="max-w-6xl w-full">
        {/* 섹션 제목 */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Profile</h2>

        {/* 프로필 카드 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-xl p-8 md:p-12 min-h-full">
          {/* 프로필 이미지 */}
          <div className="relative">
            <img 
              src="https://via.placeholder.com/150" 
              alt="프로필 이미지"
              className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg"
            />
            <span className="absolute bottom-0 right-0 bg-blue-400 text-white text-xs px-2 py-1 rounded-full shadow-md">Seungjae</span>
          </div>

          {/* 프로필 정보 */}
          <div className="w-full md:w-auto mt-6 md:mt-0 md:ml-12 space-y-4 text-lg">
            {[{ label: "이름", value: "이승재" }, { label: "생년월일", value: "1993.02.20" }, { label: "주소", value: "서울 관악구" }, { label: "연락처", value: "010-2060-1376" }, { label: "이메일", value: "vqs210@gmail.com" }, { label: "학력", value: "부산대학교(사학과)" }]
              .map(({ label, value }) => (
                <div key={label} className="flex items-center border-b pb-2 border-gray-300">
                  <p className="font-semibold w-32 text-gray-700">{label}</p>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
