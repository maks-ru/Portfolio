import React, { FC } from 'react'
import { ModalCard } from '../Modal'
import Image from 'next/image'

import { Project } from '../../../types'
import { motion } from 'framer-motion'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { fadeInUp, stagger } from '../../../animations'

interface ProjectCardProps {
  project: Project
  showDetail: boolean
  setShowDetail: (active: boolean) => void
}

export const ProjectCard: FC<ProjectCardProps> = ({
  project: {
    id,
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(true)}
        layout='responsive'
        height='120'
        width='180'
      />
      <p className='my-2'>{name}</p>
      <ModalCard active={showDetail} setActive={setShowDetail}>
        <div className='fixed grid md:grid-cols-2 z-10 overflow-auto inset-x-2.5 sm:inset-x-1/4 h-auto top-20 md:top-1/4 gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2 md:p-10 rounded-lg'>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.div variants={fadeInUp} className='border-4 border-ray-100'>
              <Image
                src={image_path}
                alt={name}
                className='cursor-pointer'
                layout='responsive'
                height='120'
                width='180'
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className='flex justify-center my-4 space-x-3'
            >
              <a
                href={github_url}
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.h2
              variants={fadeInUp}
              className='mb-3 text-xl font-medium md:text-2xl'
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>
              {description}/
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'
            >
              {key_techs.map(tech => (
                <span
                  className='px-2 py-1 bg-gray-200 dark:bg-dark-200 rounded'
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetail(false)}
            className='absolute top-3 right-3 rounded-full focus:outline-none bg-gray-200 dark:bg-dark-200'
          >
            <MdClose size={30} />
          </button>
        </div>
      </ModalCard>
    </div>
  )
}
