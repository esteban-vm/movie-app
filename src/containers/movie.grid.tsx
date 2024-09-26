'use client'

import { LoadingSpinner, LoadMoreButton, MovieCard } from '@/components'
import { useTopRatedMovies } from '@/hooks'
import { clsx } from '@/utils'

export default function MovieGrid() {
  const { isLoading, data: movies = [] } = useTopRatedMovies()

  return (
    <div className={clsx('area-movie-grid', isLoading && 'cursor-wait')} role='grid'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className='font-bold uppercase ~text-xl/2xl'>Top Rated</h2>
          <div className='flex w-full flex-wrap items-center justify-center gap-1 p-1'>
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
          <LoadMoreButton />
        </>
      )}
    </div>
  )
}
