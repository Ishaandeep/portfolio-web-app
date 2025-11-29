import { motion } from 'framer-motion'

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.span
      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 
                 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium
                 border border-primary-200 dark:border-primary-700
                 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 200 
      }}
      whileHover={{ y: -3 }}
    >
      {skill}
    </motion.span>
  )
}

export default SkillBadge

