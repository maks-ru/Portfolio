import { Project, Service, Skill } from './types'
import React1 from './public/assets/images/project/react-1.jpg'
import React2 from '/public/assets/images/project/react-2.jpg'
import React3 from './public/assets/images/project/react-3.jpg'
import Next1 from './public/assets/images/project/next-1.jpg'
import Next2 from './public/assets/images/project/next-2.jpg'
import Next3 from './public/assets/images/project/next-3.jpg'
import JS from './public/assets/images/project/js-1.webp'
import Node from './public/assets/images/project/node.jpg'

import { RiComputerLine, RiVuejsFill } from 'react-icons/ri'
import { FaReact, FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'

import { BsFillBootstrapFill } from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import { SiMaterialui, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiJavascript1 } from 'react-icons/di'

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about: 'Разработка масштабируемых SPA приложений',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'Разработка приложений с различными API',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about: 'Дизайн MUI Tailwind SCSS Framer Motion',
  },
]

export const languages: Skill[] = [
  {
    Icon: DiJavascript1,
    name: 'Javascript',
    level: '70',
  },
  {
    Icon: SiTypescript,
    name: 'Typescript',
    level: '40',
  },
  {
    Icon: FaReact,
    name: 'React',
    level: '60',
  },
  {
    Icon: TbBrandNextjs,
    name: 'Next',
    level: '50',
  },
  {
    Icon: RiVuejsFill,
    name: 'Vue',
    level: '30',
  },
]

export const tools: Skill[] = [
  {
    Icon: FiFigma,
    name: 'Figma',
    level: '85',
  },
  {
    Icon: SiMaterialui,
    name: 'Materialui',
    level: '50',
  },
  {
    Icon: SiTailwindcss,
    name: 'Tailwindcss',
    level: '60',
  },
  {
    Icon: BsFillBootstrapFill,
    name: 'Bootstrap',
    level: '35',
  },
]

export const projects: Project[] = [
  {
    id: 1,
    name: 'React',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: React1,
    deployed_url: '#',
    github_url: '#',
    category: ['react'],
    key_techs: ['React', 'Scss', 'Material UI'],
  },
  {
    id: 2,
    name: 'React',
    image_path: React2,
    deployed_url: '#',
    github_url: '#',
    category: ['react'],
    description:
      'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    key_techs: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 3,
    name: 'React',
    image_path: React3,
    deployed_url: '#',
    github_url: '#',
    category: ['react'],
    description:
      'Social Media app for developers who can share project,create posts,etc...',
    key_techs: [
      'React',
      'Redux',
      'Node',
      'Express',
      'Mongo',
      'REST API',
      'Bootstrap',
    ],
  },
  {
    id: 4,
    name: 'Next',
    image_path: Next1,
    deployed_url: '#',
    github_url: '#',
    category: ['next'],
    description:
      'Basic Realtime Chat App where one can create a room can talk to each other',
    key_techs: ['Next', 'MUI', 'Socket'],
  },
  {
    id: 5,
    name: 'Next',
    image_path: Next2,
    deployed_url: '#',
    github_url: '#',
    category: ['next'],
    description:
      'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
    key_techs: ['Next', 'Redux', 'REST API'],
  },
  {
    id: 6,
    name: 'Next',
    image_path: Next3,
    deployed_url: '#',
    github_url: '#',
    category: ['next'],
    description:
      'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
    key_techs: ['Next'],
  },
  {
    id: 7,
    name: 'Javascript',
    image_path: JS,
    deployed_url: '#',
    github_url: '#',
    category: ['javascript'],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: ['Javascript', 'YouTube API'],
  },
  {
    id: 8,
    name: 'Node',
    image_path: Node,
    deployed_url: '#',
    github_url: '#',
    category: ['node'],
    description:
      'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
    key_techs: ['Node', 'React', 'Sass', 'Bootstrap'],
  },
]
