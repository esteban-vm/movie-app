import { NEXT_PUBLIC_API_URL } from '@/constants'
import { MovieGrid } from '@/containers'
import { MovieHero } from '@/views'

export default function Home() {
  if (!NEXT_PUBLIC_API_URL) return null

  return (
    <div className='grid grid-cols-1 ~gap-1/2 ~p-1/2 grid-areas-home md:grid-cols-3'>
      <MovieHero />
      <MovieGrid />
    </div>
  )
}
