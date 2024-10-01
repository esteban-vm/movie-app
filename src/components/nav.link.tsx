'use client'

import type { Route } from 'next'
import { Navbar } from 'flowbite-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavLinkProps {
  title: string
  href: Route
}

export default function NavLink({ title, href }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Navbar.Link active={pathname === href} as={Link} className='uppercase ~text-xs/sm' href={href}>
      {title}
    </Navbar.Link>
  )
}
