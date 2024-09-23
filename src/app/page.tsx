import { NEXT_PUBLIC_API_URL } from '@/constants'
import { MovieCarousel, MovieGrid, MovieList } from '@/containers'

export default function Home() {
  if (!NEXT_PUBLIC_API_URL) return null

  return (
    <div className='grid grid-cols-1 ~gap-1/2 ~p-1/2 grid-areas-home md:grid-cols-3'>
      <div className='area-movie-carousel'>
        <MovieCarousel />
      </div>

      <div className='area-movie-list'>
        <MovieList />
      </div>

      <div className='area-movie-grid'>
        <MovieGrid />
      </div>
    </div>
  )
}
