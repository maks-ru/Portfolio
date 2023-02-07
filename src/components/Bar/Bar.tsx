import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../../../types'

interface BarProps {
  data: Skill
}

export const Bar: FC<BarProps> = ({ data: { Icon, name, level } }) => {
  const barWidth = `${level}%`
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  }
  return (
    <div className='text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full'>
      <motion.div
        className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500'
        style={{
          width: barWidth,
        }}
        variants={variants}
        initial='initial'
        animate='animate'
      >
        <Icon className='mr-3 w-6 h-6 dark:text-dark-200' />
        {name}
      </motion.div>
    </div>
  )
}
