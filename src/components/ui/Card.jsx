import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = false,
  ...props 
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300'
  const glassClasses = glass ? 'glass-effect' : 'bg-white dark:bg-gray-800 shadow-md'
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-[1.02]' : ''
  
  return (
    <motion.div
      className={`${baseClasses} ${glassClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

