import { motion } from 'framer-motion'
import { FaRocket, FaCode, FaBrain, FaServer } from 'react-icons/fa'
import { about } from '../../data/portfolio-data'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const About = () => {
  const highlights = [
    {
      icon: <FaRocket />,
      title: "Microservices",
      description: "Expert in designing and implementing scalable microservices architecture"
    },
    {
      icon: <FaBrain />,
      title: "AI Systems",
      description: "Building intelligent AI-driven applications and ML pipelines"
    },
    {
      icon: <FaServer />,
      title: "Backend",
      description: "Robust backend systems with optimal performance and security"
    },
    {
      icon: <FaCode />,
      title: "Full-Stack",
      description: "End-to-end development from frontend to cloud deployment"
    }
  ]

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <SectionTitle
        title="About Me"
        subtitle="Get to know more about my background and expertise"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {about.description}
            </p>
          </div>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
              What I Bring
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {about.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-primary-500 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base md:text-lg">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="text-4xl mb-4 text-primary-500"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

