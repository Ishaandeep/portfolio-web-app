import { motion } from 'framer-motion'
import { FaDownload, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolio-data'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const Resume = () => {
  return (
    <section id="resume" className="section-container bg-white dark:bg-gray-900">
      <SectionTitle
        title="Resume"
        subtitle="Download my resume or connect with me on LinkedIn"
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 
                     rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                  <FaFileAlt className="text-4xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Get a comprehensive overview of my skills, experience, and achievements. 
                My resume provides detailed information about my professional journey and technical expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={personalInfo.resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg
                             bg-gradient-to-r from-primary-500 to-purple-600 text-white 
                             hover:shadow-lg hover:scale-105 transition-all duration-300
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <FaDownload className="text-xl" />
                  View Resume
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  href={personalInfo.social.linkedin}
                  icon={<FaLinkedin />}
                >
                  View LinkedIn
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <div className="aspect-[8.5/11] bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white">
                  <iframe
                    src={`${personalInfo.resumePDF}#toolbar=0`}
                    className="w-full h-full"
                    title="Resume Preview"
                  />
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              icon: '📧',
              label: 'Email',
              value: personalInfo.email,
              href: `mailto:${personalInfo.email}`
            },
            {
              icon: '📍',
              label: 'Location',
              value: personalInfo.location,
              href: null
            }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              whileHover={item.href ? { scale: 1.05 } : {}}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              {item.href ? (
                <a href={item.href} className="block">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {item.label}
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {item.value}
                  </div>
                </a>
              ) : (
                <>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {item.label}
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {item.value}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

