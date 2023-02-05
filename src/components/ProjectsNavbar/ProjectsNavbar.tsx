import React, { FC } from 'react'
import { Category } from '../../../types'

interface NavItemProps {
  value: Category | 'all'
  handlerFilterCategory: Function
  active: string
}

interface ProjectsNavbarProps {
  handlerFilterCategory: Function
  active: string
}

export const NavItem: FC<NavItemProps> = ({
  value,
  handlerFilterCategory,
  active,
}) => {
  let className =
    'capitalize cursor-pointer hover:text-green ease-in duration-150'
  if (active === value) {
    className += 'text-green'
  }
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}

export const ProjectsNavbar: FC<ProjectsNavbarProps> = props => {
  return (
    <div className='flex space-x-3 px-3 py-2 list-none overflow-x-auto'>
      <NavItem value='all' {...props} />
      <NavItem value='react' {...props} />
      <NavItem value='mongo' {...props} />
      <NavItem value='django' {...props} />
      <NavItem value='node' {...props} />
    </div>
  )
}
