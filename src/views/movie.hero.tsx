import { MovieCarousel, MovieList } from '@/containers'
import { useMoviesCarousel, useUpcomingMovies } from '@/hooks'

export default function MovieHero() {
  const { isLoading, isError, isSuccess, data } = useUpcomingMovies()
  const { nextMovies, setCurrent } = useMoviesCarousel(data)

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    isSuccess && (
      <>
        <MovieCarousel movies={data} onChange={setCurrent} />
        <MovieList movies={nextMovies} />
      </>
    )
  )
}
