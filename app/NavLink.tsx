import Link from 'next/link'
import React from 'react'
type NavLinkType = {
    category: string,
    isActive:boolean
 }
function NavLink({category,isActive}:NavLinkType) {
  return (
    <Link className={`navLink ${isActive && 'underline decoration-orange-400 underline-offset-4'}`} href={`/news/${category}`}>
      {category}
    </Link>
  );
}

export default NavLink
