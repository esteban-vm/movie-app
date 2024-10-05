import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { NavLink, SearchInput } from '@/components'

export default function Navigation() {
  return (
    <Navbar className='fixed w-full' fluid>
      <NavbarBrand as={Link} className='w-1/4 md:w-1/3' href='/'>
        <span className='mx-auto whitespace-nowrap font-semibold ~text-base/xl md:mx-0'>Movie App</span>
      </NavbarBrand>
      <div className='relative flex w-3/4 gap-1 md:order-2 md:w-1/3'>
        <Suspense fallback={null}>
          <SearchInput />
        </Suspense>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink href='/' title='Home' />
        <NavLink href='/movies' title='Explore' />
      </NavbarCollapse>
    </Navbar>
  )
}
