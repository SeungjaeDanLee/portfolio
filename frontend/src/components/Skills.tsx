const Skills = () => {
    const skills = ["React", "TypeScript", "Tailwind", "Node.js"];
  
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-5">기술 스택</h2>
        <div className="flex gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-gray-200 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  