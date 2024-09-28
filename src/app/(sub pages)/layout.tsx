import type { ReactNode } from 'react'

export default function SubPagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='border border-orange-500'>
      <h2 className='text-xl'>Explore Movies</h2>
      {children}
    </div>
  )
}
