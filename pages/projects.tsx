import React, { useState } from 'react'
import { projects as projectsData } from '../data'
import { motion } from 'framer-motion'
import { ProjectCard, ProjectsNavbar } from '../src/components'
import { Category } from '../types'
import { fadeInUp, routerAnimation, stagger } from '../animations'
import Head from 'next/head'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('all')
  const [showDetail, setShowDetail] = useState<boolean>(false)

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData)
      setActive(category)
      return
    }

    const newArray = projectsData.filter(project =>
      project.category.includes(category)
    )
    setProjects(newArray)
    setActive(category)
  }

  return (
    <motion.div
      className='px-5 py-2 overflow-y-scroll h-[65vh]'
      variants={routerAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial='initial'
        animate='animate'
        className='relative grid grid-cols-12 gap-4 my-3'
      >
        {projects.map(project => (
          <motion.div
            variants={fadeInUp}
            className='col-span-12 md:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg'
            key={project.id}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
