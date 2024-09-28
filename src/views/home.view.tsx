import { useMemo } from 'react'
import { MovieCarousel, MovieGrid, MovieList } from '@/containers'
import * as hooks from '@/hooks'

export default function HomeView() {
  const topRatedResult = hooks.useTopRatedMovies()
  const upcomingResult = hooks.useUpcomingMovies()
  const { isAnimated } = hooks.useMovieCarousel()

  const upcomingMovies = upcomingResult.data ?? []
  const { nextMovies, setCurrent } = hooks.useMovieList(upcomingMovies)

  const topRatedMovies = useMemo(() => {
    return topRatedResult.data?.pages.reduce((acc, page) => [...acc, ...page], []) ?? []
  }, [topRatedResult.data])

  const fetchMore = () => {
    topRatedResult.fetchNextPage()
  }

  return (
    <section className='grid grid-cols-1 ~gap-1/2 ~p-1/2 grid-areas-home md:grid-cols-3'>
      <MovieCarousel
        isAnimated={isAnimated}
        isLoading={upcomingResult.isLoading}
        movies={upcomingMovies}
        onChange={setCurrent}
      />
      <MovieList isLoading={upcomingResult.isLoading} movies={nextMovies} />
      <MovieGrid
        hasNextPage={topRatedResult.hasNextPage}
        isFetchingNextPage={topRatedResult.isFetchingNextPage}
        isLoading={topRatedResult.isLoading}
        movies={topRatedMovies}
        onClick={fetchMore}
      />
    </section>
  )
}
