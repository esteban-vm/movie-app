import { MovieCarousel, MovieList } from '@/containers'
import { useMoviesCarousel, useUpcomingMovies } from '@/hooks'

export default function MovieHero() {
  const { isLoading, isError, isSuccess, data: movies } = useUpcomingMovies()
  const { nextMovies, setCurrent } = useMoviesCarousel(movies)

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  if (isSuccess) {
    return (
      <>
        <MovieCarousel movies={movies} onChange={setCurrent} />
        <MovieList movies={nextMovies} />
      </>
    )
  }
}
