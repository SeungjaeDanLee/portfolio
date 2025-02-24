type Project = {
    id: number;
    title: string;
    description: string;
  };
  
  interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
  }
  
  const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="w-2/3 h-2/3 bg-white p-6 rounded-lg shadow-lg overflow-auto relative">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
  
          <button onClick={onClose} className="absolute bottom-4 right-4 bg-red-500 text-white p-2 rounded">
            닫기
          </button>
        </div>
      </div>
    );
  };
  
  export default ProjectModal;