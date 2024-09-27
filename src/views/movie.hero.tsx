import { MovieCarousel, MovieList } from '@/containers'
import { useMovieCarousel, useMovieList, useUpcomingMovies } from '@/hooks'

export default function MovieHero() {
  const { isLoading, data: movies = [] } = useUpcomingMovies()
  const { nextMovies, setCurrent } = useMovieList(movies)
  const { isAnimated } = useMovieCarousel()

  return (
    <>
      <MovieCarousel isAnimated={isAnimated} isLoading={isLoading} movies={movies} onChange={setCurrent} />
      <MovieList isLoading={isLoading} movies={nextMovies} />
    </>
  )
}
