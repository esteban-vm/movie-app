import type { MovieData } from '@/types'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { queries } from '@/utils'

export const useFirstUpcomingMovies = () => {
  return useQuery({
    queryKey: ['first-upcoming-movies'],
    queryFn: queries.getFirstUpcomingMovies,
  })
}

export const useMoviesByName = (name: string) => {
  return useQuery({
    queryKey: ['Movie:', name],
    queryFn: async () => await queries.getMovieByName(name),
  })
}

const infiniteQueryOptions = {
  initialPageParam: 1,
  getNextPageParam(lastPage: MovieData[], _: MovieData[][], lastPageParam: number) {
    if (lastPage.length === 0) return undefined
    return lastPageParam + 1
  },
  getPreviousPageParam: (_: MovieData[], __: MovieData[][], firstPageParam: number) => {
    if (firstPageParam <= 1) return undefined
    return firstPageParam - 1
  },
}

export const useNowPlayingMovies = () => {
  return useInfiniteQuery({
    queryKey: ['Now Playing Movies'],
    queryFn: queries.getNowPlayingMovies,
    ...infiniteQueryOptions,
  })
}

export const usePopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ['Popular Movies'],
    queryFn: queries.getPopularMovies,
    ...infiniteQueryOptions,
  })
}

export const useTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: ['Top Rated Movies'],
    queryFn: queries.getTopRatedMovies,
    ...infiniteQueryOptions,
  })
}

export const useUpcomingMovies = () => {
  return useInfiniteQuery({
    queryKey: ['Upcoming Movies'],
    queryFn: queries.getUpcomingMovies,
    ...infiniteQueryOptions,
  })
}
