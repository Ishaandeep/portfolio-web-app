import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio-data'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <SectionTitle
        title="Featured Projects"
        subtitle="Showcasing my work in AI, full-stack development, and innovative solutions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Projects

