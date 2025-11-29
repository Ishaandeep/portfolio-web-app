import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio-data'
import SectionTitle from '../ui/SectionTitle'
import SkillBadge from '../ui/SkillBadge'
import Card from '../ui/Card'

const Skills = () => {
  const categoryIcons = {
    Languages: "💻",
    Frontend: "🎨",
    Backend: "⚙️",
    Databases: "🗄️",
    "Cloud & DevOps": "☁️",
    "AI/ML": "🤖",
  };

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-800">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="A comprehensive toolkit for building modern applications"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <Card className="h-full">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{categoryIcons[category] || '📦'}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <SkillBadge 
                    key={skill} 
                    skill={skill} 
                    index={index}
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills

