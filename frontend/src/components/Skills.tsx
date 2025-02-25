import { useEffect, useState } from "react";
import axios from "axios";

interface Skill {
  name: string;
  backgroundColor: string;
  categoryName: string;
}

const Skills = () => {
  const [, setSkills] = useState<Skill[]>([]);
  const [groupedSkills, setGroupedSkills] = useState<Record<string, Skill[]>>({});

  const fetchSkills = async () => {
    try {
      const response = await axios.get<Skill[]>("http://localhost:8080/api/skills", {
        withCredentials: true,
      });

      const data = response.data;
      setSkills(data);

      const grouped = data.reduce((acc, skill) => {
        const categoryName = skill.categoryName;
        if (!acc[categoryName]) {
          acc[categoryName] = [];
        }
        acc[categoryName].push(skill);
        return acc;
      }, {} as Record<string, Skill[]>);
      
      setGroupedSkills(grouped);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="p-10 pt-16 bg-gray-50 flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 className="text-3xl font-semibold text-gray-700 bg-blue-100 p-3 rounded-lg mb-4">{category}</h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-6 py-3 rounded-full text-white cursor-pointer transition-transform transform hover:scale-110"
                  style={{ backgroundColor: skill.backgroundColor }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

