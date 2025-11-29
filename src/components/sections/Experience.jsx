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
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                      <FaBriefcase />
                      <span className="text-sm font-medium">
                        {job.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {job.company}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + idx * 0.05 }}
                        >
                          <span className="text-primary-500 mr-2 mt-1">▸</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 
                                     text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
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

