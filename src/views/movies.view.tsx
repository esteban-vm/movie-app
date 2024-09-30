import { Tabs } from 'flowbite-react'
import { FaCouch, FaFire, FaHourglassHalf, FaStar } from 'react-icons/fa6'
import { MovieListNames } from '@/constants'
import { MovieGrid } from '@/containers'
import { api } from '@/hooks'

export default function MoviesView() {
  const nowPlayingMoviesQuery = api.useNowPlayingMovies()
  const popularMoviesQuery = api.usePopularMovies()
  const topRatedMoviesQuery = api.useTopRatedMovies()
  const upcomingMoviesQuery = api.useUpcomingMovies()

  return (
    <section>
      <h2 className='text-xl'>Explore Movies</h2>
      <Tabs className='[&_button]:focus:!ring-0' variant='underline'>
        <Tabs.Item icon={FaCouch} title={MovieListNames.nowPlaying}>
          <MovieGrid
            isLoading={nowPlayingMoviesQuery.isLoading}
            movies={nowPlayingMoviesQuery.data ?? []}
            title={MovieListNames.nowPlaying}
          />
        </Tabs.Item>

        <Tabs.Item icon={FaFire} title={MovieListNames.popular}>
          <MovieGrid
            isLoading={popularMoviesQuery.isLoading}
            movies={popularMoviesQuery.data ?? []}
            title={MovieListNames.popular}
          />
        </Tabs.Item>

        <Tabs.Item icon={FaStar} title={MovieListNames.topRated}>
          <MovieGrid
            isLoading={topRatedMoviesQuery.isLoading}
            movies={topRatedMoviesQuery.data?.pages[0] ?? []}
            title={MovieListNames.topRated}
          />
        </Tabs.Item>

        <Tabs.Item icon={FaHourglassHalf} title={MovieListNames.upcoming}>
          <MovieGrid
            isLoading={upcomingMoviesQuery.isLoading}
            movies={upcomingMoviesQuery.data ?? []}
            title={MovieListNames.upcoming}
          />
        </Tabs.Item>
      </Tabs>
    </section>
  )
}
