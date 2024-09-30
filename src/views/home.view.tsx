import { useMemo } from 'react'
import { MovieCarousel, MovieGrid, MovieList } from '@/containers'
import { queries, ui } from '@/hooks'
import { reducerHelper } from '@/utils'

export default function HomeView() {
  const topRated = queries.useTopRatedMovies()
  const firstUpcoming = queries.useFirstUpcomingMovies()
  const { isAnimated } = ui.useMovieCarousel()
  const topRatedMovies = useMemo(() => reducerHelper(topRated.data), [topRated.data])
  const { nextMovies, setCurrent } = ui.useMovieList(firstUpcoming.data)

  return (
    <section className='grid grid-cols-1 ~gap-1/2 ~p-1/2 grid-areas-home md:grid-cols-3'>
      <MovieCarousel
        isAnimated={isAnimated}
        isLoading={firstUpcoming.isLoading}
        movies={firstUpcoming.data}
        onChange={setCurrent}
      />
      <MovieList isLoading={firstUpcoming.isLoading} movies={nextMovies} />
      <MovieGrid
        hasButton={topRated.hasNextPage}
        isFetching={topRated.isFetchingNextPage}
        isLoading={topRated.isLoading}
        movies={topRatedMovies}
        title='Top Rated'
        onClick={topRated.fetchNextPage}
      />
    </section>
  )
}
