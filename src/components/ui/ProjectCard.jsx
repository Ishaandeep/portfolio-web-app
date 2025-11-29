import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Button from './Button'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-primary-400 to-purple-600">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4 line-clamp-2 sm:line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span 
              key={idx}
              className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs font-medium bg-primary-100 dark:bg-primary-900/30 
                         text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-gray-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {project.features && (
          <ul className="space-y-0.5 sm:space-y-1 mb-2 sm:mb-3 hidden sm:block">
            {project.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0 text-xs">•</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}

      </div>
    </motion.div>
  )
}

export default ProjectCard

