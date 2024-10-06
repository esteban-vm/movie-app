import type { MovieData } from '@/types'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { apiUtils, queryUtils } from '@/utils'

export const useFirstUpcomingMovies = () => {
  return useQuery({
    queryKey: queryUtils.keys.movies.firstUpcoming,
    queryFn: apiUtils.getFirstUpcomingMovies,
  })
}

export const useMoviesByName = (name: string) => {
  return useQuery({
    queryKey: queryUtils.keys.search.byName(name),
    queryFn: async () => await apiUtils.getMovieByName(name),
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
    queryKey: queryUtils.keys.movies.nowPlaying,
    queryFn: apiUtils.getNowPlayingMovies,
    ...infiniteQueryOptions,
  })
}

export const usePopularMovies = () => {
  return useInfiniteQuery({
    queryKey: queryUtils.keys.movies.popular,
    queryFn: apiUtils.getPopularMovies,
    ...infiniteQueryOptions,
  })
}

export const useTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: queryUtils.keys.movies.topRated,
    queryFn: apiUtils.getTopRatedMovies,
    ...infiniteQueryOptions,
  })
}

export const useUpcomingMovies = () => {
  return useInfiniteQuery({
    queryKey: queryUtils.keys.movies.upcoming,
    queryFn: apiUtils.getUpcomingMovies,
    ...infiniteQueryOptions,
  })
}
