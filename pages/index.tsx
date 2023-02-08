import Head from 'next/head'
import React, { FC } from 'react'
import { Bar } from '../src/components'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation } from '../animations'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Home: FC = ({ endpoint }: any) => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name='description' content='Frontend Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
        <div className='grid md:grid-cols-1 gap-6'>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <h5 className='my-3 text-2xl font-bold'>Обо мне</h5>
            <div>
              <p className='my-3 text-xl'>
                Более года принимала участие в коммерческой разработке на
                проектах, как самостоятельный Frontend-разработчик, так и в
                команде.
              </p>
              <p className='my-3 text-xl'>
                Важный опыт приобретенный при работе в команде это
                взаимодействие на всех уровенях с членами команды, повышая
                профессиональные качества.
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
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/services`)
  // const data = await res.json()

  return {
    props: {
      endpoint: process.env.NEXT_PUBLIC_VERCEL_URL,
    },
  }
}
