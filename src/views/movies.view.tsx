import { Tabs } from 'flowbite-react'
import { useMemo } from 'react'
import { FaCouch, FaFire, FaHourglassHalf, FaStar } from 'react-icons/fa6'
import { ListNames } from '@/constants'
import { MovieGrid } from '@/containers'
import { queries } from '@/hooks'
import { reducerHelper } from '@/utils'

export default function MoviesView() {
  const nowPlaying = queries.useNowPlayingMovies()
  const popular = queries.usePopularMovies()
  const topRated = queries.useTopRatedMovies()
  const upcoming = queries.useUpcomingMovies()

  const nowPlayingMovies = useMemo(() => reducerHelper(nowPlaying.data), [nowPlaying.data])
  const popularMovies = useMemo(() => reducerHelper(popular.data), [popular.data])
  const topRatedMovies = useMemo(() => reducerHelper(topRated.data), [topRated.data])
  const upcomingMovies = useMemo(() => reducerHelper(upcoming.data), [upcoming.data])

  return (
    <section>
      <h2 className='text-xl'>Explore Movies</h2>
      <Tabs variant='underline'>
        <Tabs.Item icon={FaCouch} title={ListNames.nowPlaying}>
          <MovieGrid
            hasButton={nowPlaying.hasNextPage}
            isFetching={nowPlaying.isFetchingNextPage}
            isLoading={nowPlaying.isLoading}
            movies={nowPlayingMovies}
            title={ListNames.nowPlaying}
            onClick={nowPlaying.fetchNextPage}
          />
        </Tabs.Item>

        <Tabs.Item icon={FaFire} title={ListNames.popular}>
          <MovieGrid
            hasButton={popular.hasNextPage}
            isFetching={popular.isFetchingNextPage}
            isLoading={popular.isLoading}
            movies={popularMovies}
            title={ListNames.popular}
            onClick={popular.fetchNextPage}
          />
        </Tabs.Item>

        <Tabs.Item icon={FaStar} title={ListNames.topRated}>
          <MovieGrid
            hasButton={topRated.hasNextPage}
            isFetching={topRated.isFetchingNextPage}
            isLoading={topRated.isLoading}
            movies={topRatedMovies}
            title={ListNames.topRated}
            onClick={topRated.fetchNextPage}
          />
        </Tabs.Item>

        <Tabs.Item icon={FaHourglassHalf} title={ListNames.upcoming}>
          <MovieGrid
            hasButton={upcoming.hasNextPage}
            isFetching={upcoming.isFetchingNextPage}
            isLoading={upcoming.isLoading}
            movies={upcomingMovies}
            title={ListNames.upcoming}
            onClick={upcoming.fetchNextPage}
          />
        </Tabs.Item>
      </Tabs>
    </section>
  )
}
