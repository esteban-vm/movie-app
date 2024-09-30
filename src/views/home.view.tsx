import { useMemo } from 'react'
import { MovieCarousel, MovieGrid, MovieList } from '@/containers'
import { api, ui } from '@/hooks'

export default function HomeView() {
  const topRatedQuery = api.useTopRatedMovies()
  const upcomingQuery = api.useUpcomingMovies()
  const { isAnimated } = ui.useMovieCarousel()

  const upcomingMovies = upcomingQuery.data
  const { nextMovies, setCurrent } = ui.useMovieList(upcomingMovies)

  const topRatedMovies = useMemo(() => {
    return topRatedQuery.data?.pages.reduce((acc, page) => [...acc, ...page], [])
  }, [topRatedQuery.data])

  const fetchMore = () => {
    topRatedQuery.fetchNextPage()
  }

  return (
    <section className='grid grid-cols-1 ~gap-1/2 ~p-1/2 grid-areas-home md:grid-cols-3'>
      <MovieCarousel
        isAnimated={isAnimated}
        isLoading={upcomingQuery.isLoading}
        movies={upcomingMovies}
        onChange={setCurrent}
      />
      <MovieList isLoading={upcomingQuery.isLoading} movies={nextMovies} />
      <MovieGrid
        hasButton={topRatedQuery.hasNextPage}
        isFetching={topRatedQuery.isFetchingNextPage}
        isLoading={topRatedQuery.isLoading}
        movies={topRatedMovies}
        title='Top Rated'
        onClick={fetchMore}
      />
    </section>
  )
}
