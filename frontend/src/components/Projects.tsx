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
    <section id="projects" className="p-10 pt-16 bg-gray-50 flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 border rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </motion.div>

        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>
    </section>
  );
};



export default Projects;
