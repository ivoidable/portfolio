import React from 'react'
import { motion } from 'framer-motion'

const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
}

const AnimatedPage = ({children, className}) => {
  return (
    <motion.div className={className} 
    variants={animations} 
    initial="initial" 
    animate="animate" 
    exit="exit">
        {children}
    </motion.div>
  )
}

export default AnimatedPage