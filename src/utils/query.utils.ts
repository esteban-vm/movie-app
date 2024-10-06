import type { MovieData } from '@/types'
import type { InfiniteData } from '@tanstack/react-query'
import { ListNames } from '@/constants'

export function formatMoviePages(data?: InfiniteData<MovieData[], unknown>) {
  return data?.pages.reduce((acc, page) => [...acc, ...page], [])
}

export const keys = <const>{
  movies: {
    firstUpcoming: [`First ${ListNames.upcoming} Movies`],
    nowPlaying: [`${ListNames.nowPlaying} Movies`],
    popular: [`${ListNames.popular} Movies`],
    topRated: [`${ListNames.topRated} Movies`],
    upcoming: [`${ListNames.upcoming} Movies`],
  },
  search: {
    byName: (name: string) => ['Search Movie:', name],
  },
}
