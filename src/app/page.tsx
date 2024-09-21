import { NEXT_PUBLIC_API_URL } from '@/constants'
import { MovieCarousel } from '@/containers'

export default function Home() {
  if (!NEXT_PUBLIC_API_URL) return null

  return (
    <div className='grid grid-cols-1 grid-rows-6 ~min-h-[40rem]/[50rem] ~gap-1/2 ~p-1/2 grid-areas-home md:grid-cols-3 md:grid-rows-4'>
      <div className='area-movie-carousel'>
        <MovieCarousel />
      </div>
      <div className='flex items-center justify-center rounded-lg bg-orange-500 text-white area-movie-list'>
        Movie List
      </div>
      <div className='flex items-center justify-center rounded-lg bg-indigo-500 text-white area-movie-grid'>
        Movie Grid
      </div>
    </div>
  )
}
