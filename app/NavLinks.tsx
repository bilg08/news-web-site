'use client'
import React from 'react'
import { categories } from '../constant'
import NavLink from './NavLink';
import {usePathname} from 'next/navigation'
function NavLinks() {
  const pathname = usePathname();
  function isActive(path:string) {
     return pathname?.split('/').pop()===path
  };
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 md:text-sm
    gap-4 pb-10 max-w-6xl mx-auto border-b'>
      {categories.map((category) => {
        return <NavLink key={category} category={category} isActive={isActive(category)} />
      })}
    </nav>
  )
}

export default NavLinks
