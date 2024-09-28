import type { MovieData } from '@/types'
import { LoadingSpinner, LoadMoreButton, MovieCard } from '@/components'
import { clsx } from '@/utils'

interface MovieGridProps {
  isLoading: boolean
  isFetchingNextPage: boolean
  hasNextPage: boolean
  movies: MovieData[]
  onClick: () => void
}

export default function MovieGrid({ isLoading, isFetchingNextPage, hasNextPage, movies, ...rest }: MovieGridProps) {
  return (
    <div className={clsx('area-movie-grid', isLoading && 'cursor-wait')} role='grid'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className='font-bold uppercase ~text-xl/2xl'>Top Rated</h2>
          <div className='flex w-full flex-wrap items-center justify-center gap-1 p-1'>
            {movies?.map((movie, index) => <MovieCard key={index} {...movie} />)}
          </div>
          {hasNextPage && <LoadMoreButton isFetching={isFetchingNextPage} {...rest} />}
        </>
      )}
    </div>
  )
}
