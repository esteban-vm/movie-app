import { useMemo } from 'react'
import { MovieCarousel, MovieGrid, MovieList } from '@/containers'
import { api, ui } from '@/hooks'

export default function HomeView() {
  const topRatedMoviesQuery = api.useTopRatedMovies()
  const upcomingMoviesQuery = api.useUpcomingMovies()
  const { isAnimated } = ui.useMovieCarousel()

  const upcomingMovies = upcomingMoviesQuery.data ?? []
  const { nextMovies, setCurrent } = ui.useMovieList(upcomingMovies)

  const topRatedMovies = useMemo(() => {
    return topRatedMoviesQuery.data?.pages.reduce((acc, page) => [...acc, ...page], []) ?? []
  }, [topRatedMoviesQuery.data])

  const fetchMore = () => {
    topRatedMoviesQuery.fetchNextPage()
  }

  return (
    <section className='grid grid-cols-1 ~gap-1/2 ~p-1/2 grid-areas-home md:grid-cols-3'>
      <MovieCarousel
        isAnimated={isAnimated}
        isLoading={upcomingMoviesQuery.isLoading}
        movies={upcomingMovies}
        onChange={setCurrent}
      />
      <MovieList isLoading={upcomingMoviesQuery.isLoading} movies={nextMovies} />
      <MovieGrid
        hasButton={topRatedMoviesQuery.hasNextPage}
        isFetching={topRatedMoviesQuery.isFetchingNextPage}
        isLoading={topRatedMoviesQuery.isLoading}
        movies={topRatedMovies}
        title='Top Rated'
        onClick={fetchMore}
      />
    </section>
  )
}
