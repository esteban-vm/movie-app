import type { ContainerProps as MovieListProps } from '@/types'
import { LoaderWrapper, MovieItem } from '@/components'

export default function MovieList({ movies = [], ...rest }: MovieListProps) {
  return (
    <LoaderWrapper className='area-movie-list' role='list' {...rest}>
      <h2>Up Next</h2>
      <div className='flex w-full grow flex-col gap-1'>
        {movies.map((movie, index) => (
          <MovieItem key={index} {...movie} />
        ))}
      </div>
    </LoaderWrapper>
  )
}
