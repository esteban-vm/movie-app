import type { LoadMoreButtonProps } from '@/components'
import type { ContainerProps } from '@/types'
import { LoadingSpinner, LoadMoreButton, MovieCard } from '@/components'
import { clsx } from '@/utils'

interface MovieGridProps extends ContainerProps, LoadMoreButtonProps {
  title: string
  hasButton?: boolean
}

export default function MovieGrid({ title, isLoading, hasButton, movies = [], ...rest }: MovieGridProps) {
  return (
    <div className={clsx('area-movie-grid', isLoading && 'cursor-wait')} role='grid'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className='font-bold uppercase ~text-xl/2xl'>{title}</h2>
          <div className='flex w-full flex-wrap items-center justify-center gap-1 p-1'>
            {movies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
          {hasButton && <LoadMoreButton {...rest} />}
        </>
      )}
    </div>
  )
}
