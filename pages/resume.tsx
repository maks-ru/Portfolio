import React from 'react'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { Bar } from '../src/components'
import { fadeInUp, routerAnimation } from '../animations'
import Head from 'next/head'

const Resume = () => {
  return (
    <motion.div
      className='px-6 py-2'
      variants={routerAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>Resume</title>
      </Head>
      <div className='grid md:grid-cols-2 gap-6'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>JavaScript Developer</h5>
            <p className='font-semibold'>Academy of Technology</p>
            <p className='my-3'>
              О себе Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus assumenda autem consequuntur labore nulla quidem?
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>JavaScript Developer</h5>
            <p className='font-semibold'>Academy of Technology</p>
            <p className='my-3'>
              О себе Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus assumenda autem consequuntur labore nulla quidem?
            </p>
          </div>
        </motion.div>
      </div>
      <div className='grid md:grid-cols-2 gap-9'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <div className='my2'>
            {languages.map(language => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my2'>
            {tools.map(tool => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
