import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

type ProjectType = "ALL" | "PROJECT" | "STUDY";

type Project = {
  id: number;
  title: string;
  description: string;
  skills: string[]; // 프로젝트 기술 스택 추가
  githubUrl: string; // GitHub URL 추가
  demoUrl: string; // 데모 URL 추가
  imageUrl: string; // 프로젝트 이미지 URL 추가
  content: string; // 프로젝트 상세 내용 추가
  type: ProjectType; // Add type field to distinguish between projects and studies
};

const projects: Project[] = [ // projects 배열 type 변경 및 내용 추가
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    description: "React, TypeScript, Tailwind CSS를 사용하여 개발한 개인 포트폴리오 웹사이트입니다.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    githubUrl: "https://github.com/SeungjaeDanLee/portfolio-website", // 실제 GitHub URL로 변경
    demoUrl: "https://seungjae-portfolio.netlify.app", // Netlify 배포 URL 또는 데모 URL
    imageUrl: "/portfolio-project.png", // 프로젝트 이미지 경로 (public 폴더에 이미지 파일 추가)
    content: "포트폴리오 웹사이트 상세 내용 ...", // 프로젝트 상세 내용 추가
    type: "PROJECT",
  },
  {
    id: 2,
    title: "포트폴리오 웹사이트",
    description: "React, TypeScript, Tailwind CSS를 사용하여 개발한 개인 포트폴리오 웹사이트입니다.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    githubUrl: "https://github.com/SeungjaeDanLee/portfolio-website", // 실제 GitHub URL로 변경
    demoUrl: "https://seungjae-portfolio.netlify.app", // Netlify 배포 URL 또는 데모 URL
    imageUrl: "/portfolio-project.png", // 프로젝트 이미지 경로 (public 폴더에 이미지 파일 추가)
    content: "포트폴리오 웹사이트 상세 내용 ...", // 프로젝트 상세 내용 추가
    type: "STUDY",
  },
  {
    id: 3,
    title: "아모레퍼시픽 미술관 유료회원제 개발",
    description: "Java, Spring Boot 기반의 아모레퍼시픽 미술관 유료회원제 개발 프로젝트입니다.",
    skills: ["Java", "SpringBoot", "MySQL", "JPA", "Thymeleaf"],
    githubUrl: "https://github.com/amore-pacific-museum/membership", // 실제 GitHub URL로 변경
    demoUrl: "", // 데모 URL 없으면 빈 문자열
    imageUrl: "/amore-pacific-project.png", // 프로젝트 이미지 경로 (public 폴더에 이미지 파일 추가)
    content: "아모레퍼시픽 미술관 유료회원제 개발 상세 내용 ...", // 프로젝트 상세 내용 추가
    type: "PROJECT",
  },
  {
    id: 4,
    title: "아모레퍼시픽 미술관 유료회원제 개발",
    description: "Java, Spring Boot 기반의 아모레퍼시픽 미술관 유료회원제 개발 프로젝트입니다.",
    skills: ["Java", "SpringBoot", "MySQL", "JPA", "Thymeleaf"],
    githubUrl: "https://github.com/amore-pacific-museum/membership", // 실제 GitHub URL로 변경
    demoUrl: "", // 데모 URL 없으면 빈 문자열
    imageUrl: "/amore-pacific-project.png", // 프로젝트 이미지 경로 (public 폴더에 이미지 파일 추가)
    content: "아모레퍼시픽 미술관 유료회원제 개발 상세 내용 ...", // 프로젝트 상세 내용 추가
    type: "STUDY",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectType>("ALL");

  const filterButtons: { type: ProjectType; label: string }[] = [
    { type: "ALL", label: "전체" },
    { type: "PROJECT", label: "프로젝트" },
    { type: "STUDY", label: "학습" },
  ];

  const filteredProjects = projects.filter(
    project => filter === "ALL" || project.type === filter
  );

  return (
    <section id="projects" className="p-10 pt-16 bg-white dark:bg-gray-900 flex justify-center items-center border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-12">Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {filterButtons.map(({ type, label }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-lg font-medium ${
                filter === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
                layout
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10" />
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.type === "PROJECT" 
                        ? "bg-blue-500 text-white" 
                        : "bg-green-500 text-white"
                    }`}>
                      {project.type === "PROJECT" ? "프로젝트" : "학습"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>
    </section>
  );
};

export default Projects;