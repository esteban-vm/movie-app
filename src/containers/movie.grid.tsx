'use client'

import { MovieCard } from '@/components'
import { useTopRatedMovies } from '@/hooks'

export default function MovieGrid() {
  const { isLoading, isError, isSuccess, data: movies } = useTopRatedMovies()

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  if (isSuccess) {
    return (
      <div className='rounded-lg bg-indigo-700 p-1 text-white area-movie-grid' role='grid'>
        <h2 className='font-bold uppercase ~text-xl/2xl'>Top Rated Movies</h2>
        <div className='flex w-full flex-wrap content-center items-center justify-center gap-2 p-2'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    )
  }
}
