import type { MovieData } from '@/types'
import { LoadingSpinner, MovieItem } from '@/components'
import { clsx } from '@/utils'

interface MovieListProps {
  isLoading: boolean
  movies: MovieData[]
}

export default function MovieList({ isLoading, movies }: MovieListProps) {
  return (
    <aside className={clsx('area-movie-list', isLoading && 'cursor-wait')} role='list'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className='font-bold uppercase ~text-xl/2xl'>Up Next</h2>
          <div className='flex w-full grow flex-col gap-1'>
            {movies.map((movie, index) => (
              <MovieItem key={index} {...movie} />
            ))}
          </div>
        </>
      )}
    </aside>
  )
}
