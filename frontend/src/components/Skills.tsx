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

  // ✅ API 요청 (axios 사용)
  const fetchSkills = async () => {
    try {
      const response = await axios.get<Skill[]>("http://localhost:8080/api/skills", {
        withCredentials: true, // 필요 시 추가
      });

      const data = response.data;
      setSkills(data);

      // ✅ 카테고리별로 그룹화
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
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-5">Skills</h2>
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="mb-6">
          <h3 className="text-2xl font-semibold mb-3">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: skill.backgroundColor }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
