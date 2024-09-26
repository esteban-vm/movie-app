'use client'

import type { Route } from 'next'
import { Navbar } from 'flowbite-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  name: string
  href: Route
}

export default function NavLink({ name, href }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Navbar.Link active={pathname === href} as={Link} className='uppercase ~text-xs/sm' href={href}>
      {name}
    </Navbar.Link>
  )
}
