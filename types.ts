import { FunctionComponent } from 'react'
import { IconType } from 'react-icons'
import { ImageProps } from 'next/image'

export interface Service {
  Icon: IconType
  title: string
  about: string
}

export interface Skill {
  Icon: IconType
  name: string
  level: string
}

export interface Project {
  id: number
  name: string
  description: string
  image_path: ImageProps['src']
  deployed_url: string
  github_url: string
  category: Category[]
  key_techs: string[]
}

export type Category = 'react' | 'next' | 'javascript' | 'node'
