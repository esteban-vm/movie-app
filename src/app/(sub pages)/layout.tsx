import type { ReactNode } from 'react'
import Link from 'next/link'

export default function SubPagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='border border-orange-500'>
      <h2 className='text-xl'>Explore Movies</h2>
      <div className='flex gap-5'>
        <Link href='/movies'>Now Playing</Link>
        <Link href='/movies/popular'>Popular</Link>
        <Link href='/movies/top-rated'>Top Rated</Link>
        <Link href='/movies/upcoming'>Upcoming</Link>
      </div>
      {children}
    </div>
  )
}
