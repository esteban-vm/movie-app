import { Tabs } from 'flowbite-react'
import { FaCouch, FaFire, FaHourglassHalf, FaStar } from 'react-icons/fa6'
import { ListNames } from '@/constants'
import { MovieGrid } from '@/containers'
import { api } from '@/hooks'

export default function MoviesView() {
  const nowPlayingQuery = api.useNowPlayingMovies()
  const popularQuery = api.usePopularMovies()
  const topRatedQuery = api.useTopRatedMovies()
  const upcomingQuery = api.useUpcomingMovies()

  return (
    <section>
      <h2 className='text-xl'>Explore Movies</h2>
      <Tabs variant='underline'>
        <Tabs.Item icon={FaCouch} title={ListNames.nowPlaying}>
          <MovieGrid isLoading={nowPlayingQuery.isLoading} movies={nowPlayingQuery.data} title={ListNames.nowPlaying} />
        </Tabs.Item>
        <Tabs.Item icon={FaFire} title={ListNames.popular}>
          <MovieGrid isLoading={popularQuery.isLoading} movies={popularQuery.data} title={ListNames.popular} />
        </Tabs.Item>
        <Tabs.Item icon={FaStar} title={ListNames.topRated}>
          <MovieGrid
            isLoading={topRatedQuery.isLoading}
            movies={topRatedQuery.data?.pages[0]}
            title={ListNames.topRated}
          />
        </Tabs.Item>
        <Tabs.Item icon={FaHourglassHalf} title={ListNames.upcoming}>
          <MovieGrid isLoading={upcomingQuery.isLoading} movies={upcomingQuery.data} title={ListNames.upcoming} />
        </Tabs.Item>
      </Tabs>
    </section>
  )
}
