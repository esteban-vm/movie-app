import { MovieCarousel, MovieList } from '@/containers'
import { useMoviesCarousel, useUpcomingMovies } from '@/hooks'

export default function MovieHero() {
  const { isLoading, data: movies = [] } = useUpcomingMovies()
  const { nextMovies, setCurrent } = useMoviesCarousel(movies)

  return (
    <>
      <MovieCarousel isLoading={isLoading} movies={movies} onChange={setCurrent} />
      <MovieList isLoading={isLoading} movies={nextMovies} />
    </>
  )
}
