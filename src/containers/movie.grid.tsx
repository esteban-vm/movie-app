import type { LoadMoreButtonProps } from '@/components'
import type { ListNames } from '@/constants'
import type { ContainerProps } from '@/types'
import { LoaderWrapper, LoadMoreButton, MovieCard } from '@/components'

interface MovieGridProps extends ContainerProps, LoadMoreButtonProps {
  title: (typeof ListNames)[keyof typeof ListNames]
  hasButton: boolean
}

export default function MovieGrid({ title, isLoading, hasButton, movies = [], ...rest }: MovieGridProps) {
  return (
    <LoaderWrapper className='area-movie-grid' isLoading={isLoading} role='grid'>
      <h2>{title}</h2>
      <div className='flex w-full flex-wrap items-center justify-center gap-1'>
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      {hasButton && <LoadMoreButton {...rest} />}
    </LoaderWrapper>
  )
}
