import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'
import { experience } from '../../data/portfolio-data'
import SectionTitle from '../ui/SectionTitle'

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <SectionTitle
        title="Work Experience"
        subtitle="My professional journey and achievements"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500" />

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
              } md:w-1/2`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="absolute left-8 md:left-auto md:right-auto md:left-1/2 transform md:-translate-x-1/2 
                           w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              />

              <motion.div
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-primary-500">
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                      <FaBriefcase className="text-sm" />
                      <span className="text-xs sm:text-sm font-medium">
                        {job.period}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      {job.company}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 md:mb-4 line-clamp-2 sm:line-clamp-none">
                    {job.description}
                  </p>

                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1.5 sm:mb-2 hidden sm:block">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                      {job.achievements.slice(0, 3).map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + idx * 0.05 }}
                        >
                          <span className="text-primary-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0 text-xs">▸</span>
                          <span className="line-clamp-2 sm:line-clamp-none">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                    {job.achievements.length > 3 && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 sm:hidden">
                        +{job.achievements.length - 3} more achievements
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                      {job.technologies.slice(0, 6).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs font-medium bg-primary-100 dark:bg-primary-900/30 
                                     text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {job.technologies.length > 6 && (
                        <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-gray-500">
                          +{job.technologies.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

