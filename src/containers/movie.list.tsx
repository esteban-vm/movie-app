import type { MovieData } from '@/types'
import { MovieItem } from '@/components'

interface MovieListProps {
  movies: MovieData[]
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <aside
      className='flex flex-col items-start justify-center gap-1 rounded-lg bg-indigo-700 p-1 text-white area-movie-list'
      role='list'
    >
      <h2 className='font-bold ~text-xl/3xl'>Up Next</h2>
      <div className='flex w-full grow flex-col gap-1'>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </aside>
  )
}
