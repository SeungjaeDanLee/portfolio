const Profile = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-5">Profile</h2>
      
      {/* 프로필 정보가 담길 flex 컨테이너 */}
      <div className="flex items-center mb-4">
        {/* 왼쪽 이미지 */}
        <img 
          src="https://via.placeholder.com/100" 
          alt="프로필 이미지"
          className="w-24 h-24 rounded-full mr-6"
        />
        {/* 오른쪽 카테고리 및 내용 */}
        <div className="space-y-2">
          <div className="flex">
            <p className="font-semibold w-28">이름</p>
            <p className="text-gray-600">이승재</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-28">생년월일</p>
            <p className="text-gray-600">93.02.20</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-28">주소</p>
            <p className="text-gray-600">서울 관악구</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-28">연락처</p>
            <p className="text-gray-600">010-2060-1376</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-28">이메일</p>
            <p className="text-gray-600">vqs210@gmail.com</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-28">학력</p>
            <p className="text-gray-600">부산대학교(사학과)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
