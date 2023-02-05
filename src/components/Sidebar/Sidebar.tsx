import React from 'react'
import Image from 'next/image'
import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import UserLogo from '/public/assets/images/max.jpg'
import { useTheme } from 'next-themes'

export const Sidebar = () => {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Image
        src={UserLogo}
        alt='user avatar'
        className='mx-auto rounded-full'
        height='160px'
        width='130px'
        layout='intrinsic'
        quality='100'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-roboto'>
        <span className='text-green'>Tarasov </span>
        Maxim
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
        Web Developer
      </p>
      <a
        href='/assets/resume/Resume.pdf'
        download='Tarasov Maxim Resume.pdf'
        className='px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center dark:bg-dark-200'
      >
        <GiTie className='w-6 h6' />
        Download Resume
      </a>

      <div className='flex justify-around my-5 text-green mx-auto w-72 lg:w-full'>
        <a href='https://github.com/maks-ru'>
          <AiFillGithub className='w-6 h-6 cursor-pointer' />
        </a>
        <a href=' https://wa.me/<+79128147006>'>
          <AiOutlineWhatsApp className='w-6 h-6 cursor-pointer' />
        </a>
        <a href='https://t.me/solidmax'>
          <BsTelegram className='w-6 h-6 cursor-pointer' />
        </a>
      </div>

      <div className='my-5 py-4 bg-gray-200 dark:bg-dark-200 ml-[-1rem] mr-[-1rem]'>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Russia, Moscow</span>
        </div>
        <p className='my-2'>solidmax@list.ru</p>
        <p className='my-2'>+7(912)-814-70-06</p>
      </div>

      <button
        className='bg-black bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none'
        onClick={() => window.open('mailto:solidmax@list.ru')}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className='bg-gradient-to-r bg-black from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'
      >
        Toggle theme
      </button>
    </>
  )
}
