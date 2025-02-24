import { useParams } from "react-router-dom";

const projects = [
  { id: "1", title: "포트폴리오 웹사이트", description: "React + TypeScript로 개발" },
  { id: "2", title: "아모레퍼시픽 미술관 유료회원제 개발", description: "Java로 개발" },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id); // id가 문자열이므로 일치

  return (
    <div className="p-10">
      {project ? (
        <>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-gray-600">{project.description}</p>
        </>
      ) : (
        <p>프로젝트를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default ProjectDetail;
