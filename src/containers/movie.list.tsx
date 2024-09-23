'use client'

import { MovieItem } from '@/components'
import { useMovieContext } from '@/contexts'

export default function MovieList() {
  const { nextMovies, isLoading, isError } = useMovieContext()

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <aside
      className='flex size-full flex-col items-start justify-center gap-1 rounded-lg bg-indigo-700 p-1 text-white'
      role='list'
    >
      <h2 className='font-bold ~text-xl/3xl'>Up Next</h2>
      <div className='flex w-full grow flex-col gap-1'>
        {nextMovies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </aside>
  )
}
