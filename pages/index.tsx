import Head from 'next/head'
import { FC, useState } from 'react'
import { ServiceCrd } from '../src/components'
import { services } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation, stagger } from '../animations'
import { GetServerSidePropsContext } from 'next'

const Home: FC = ({ endpoint }: any) => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name='description' content='Frontend Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <motion.div
        className='flex flex-col flex-grow px-6 pt-1'
        variants={routerAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h6 className='my-3 text-base font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          aspernatur commodi consectetur dolor dolore et exercitationem facere,
          facilis ipsam necessitatibus odit, quas reiciendis rem repudiandae
          rerum sint, ut vitae voluptatibus.
        </h6>
        <div className='grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 ml-[-1.5rem] mr-[-1.5rem]'>
          <h4 className='my-3 text-xl font-semibold tracking-wide'>
            What I am doing
          </h4>
          <motion.div
            className='grid gap-6 my-3 md:grid-cols-2'
            variants={stagger}
            initial='initial'
            animate='animate'
          >
            {services.map(service => (
              <motion.div
                variants={fadeInUp}
                key={service.title}
                className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1'
              >
                <ServiceCrd service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Home

export const getServerSideProps = async (
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
