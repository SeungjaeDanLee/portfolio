import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

type Project = {
  id: number;
  title: string;
  description: string;
};

const projects: Project[] = [
  { id: 1, title: "포트폴리오 웹사이트", description: "React + TypeScript로 개발" },
  { id: 2, title: "아모레퍼시픽 미술관 유료회원제 개발", description: "Java로 개발" },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-5">Projects</h2>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-4 border rounded-lg shadow cursor-pointer hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 모달 표시 */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;
