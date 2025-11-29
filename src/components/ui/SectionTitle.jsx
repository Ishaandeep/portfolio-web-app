import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionTitle

