import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavItemProps {
  activeItem: string
  setActiveItem: Function
  name: string
  route: string
}

const NavItem: FC<NavItemProps> = ({
  activeItem,
  setActiveItem,
  name,
  route,
}) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span
          className='hover:text-green ease-in duration-150'
          onClick={() => setActiveItem(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null
}

export const Navbar = () => {
  const [activeItem, serActiveItem] = useState<string>('')

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === '/') {
      serActiveItem('About')
    }
    if (pathname === '/projects') {
      serActiveItem('Projects')
    }
  }, [])

  return (
    <div className='flex justify-between items-center px-5 py-3 my-3'>
      <span className='font-bold text-green text-xl border-green border-b-4 md:text-2xl'>
        {activeItem}
      </span>
      <div className='flex space-x-5 text-lg'>
        <NavItem
          activeItem={activeItem}
          setActiveItem={serActiveItem}
          name='About'
          route='/'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={serActiveItem}
          name='Projects'
          route='/projects'
        />
      </div>
    </div>
  )
}
