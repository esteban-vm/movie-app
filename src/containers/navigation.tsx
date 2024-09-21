import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, TextInput } from 'flowbite-react'
import Link from 'next/link'
import { LuSearch } from 'react-icons/lu'
import { NavLink } from '@/components'

export default function Navigation() {
  return (
    <Navbar className='fixed w-full' fluid>
      <NavbarBrand as={Link} className='w-1/4 md:w-1/3' href='/'>
        <span className='mx-auto whitespace-nowrap font-semibold ~text-base/xl md:mx-0'>Movie App</span>
      </NavbarBrand>
      <div className='flex w-3/4 gap-1 md:order-2 md:w-1/3'>
        <TextInput autoComplete='off' className='w-full' icon={LuSearch} placeholder='Search…' type='search' required />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink href='/' name='All Movies' />
        <NavLink href='/about' name='Explore' />
      </NavbarCollapse>
    </Navbar>
  )
}
