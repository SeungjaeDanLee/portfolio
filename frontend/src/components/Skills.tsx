import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface Skill {
  name: string;
  backgroundColor: string;
  categoryName: string;
}

const Skills = () => {
  const [, setSkills] = useState<Skill[]>([]);
  const [groupedSkills, setGroupedSkills] = useState<Record<string, Skill[]>>({});
  const [error, setError] = useState<string | null>(null);

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
      setError(null);
    } catch (error: any) {
      console.error("Error fetching skills:", error);
      setError("스킬 정보를 불러오는 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="p-10 pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 flex justify-center items-center border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-12">Skills</h2>
        
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-center mb-4"
          >
            {error}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8"
        >
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg text-white cursor-pointer shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium"
                    style={{ backgroundColor: skill.backgroundColor }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;