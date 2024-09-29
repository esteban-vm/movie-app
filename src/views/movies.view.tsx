import { Tabs } from 'flowbite-react'
import { FaCouch, FaFire, FaHourglassHalf } from 'react-icons/fa6'
import { MovieGrid } from '@/containers'
import { api } from '@/hooks'

export default function MoviesView() {
  const nowPlaying = api.useNowPlayingMovies()
  const popular = api.usePopularMovies()
  const upcoming = api.useUpcomingMovies()

  const nowPlayingTitle = 'Now Playing'
  const popularTitle = 'Popular'
  const upcomingTitle = 'Upcoming'

  return (
    <section>
      <h2 className='text-xl'>Explore Movies</h2>
      <Tabs variant='underline'>
        <Tabs.Item icon={FaCouch} title={nowPlayingTitle} active>
          <MovieGrid isLoading={nowPlaying.isLoading} movies={nowPlaying.data ?? []} title={nowPlayingTitle} />
        </Tabs.Item>

        <Tabs.Item icon={FaFire} title={popularTitle}>
          <MovieGrid isLoading={popular.isLoading} movies={popular.data ?? []} title={popularTitle} />
        </Tabs.Item>

        {/* <Tabs.Item icon={FaStar} title='Top Rated'>
          <MovieGrid isLoading={topRated.isLoading} movies={topRated.data ?? []} title='Popular' />
        </Tabs.Item> */}

        <Tabs.Item icon={FaHourglassHalf} title={upcomingTitle}>
          <MovieGrid isLoading={upcoming.isLoading} movies={upcoming.data ?? []} title={upcomingTitle} />
        </Tabs.Item>
      </Tabs>
    </section>
  )
}
