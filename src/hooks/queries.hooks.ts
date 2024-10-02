import type { MovieData } from '@/types'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { queries } from '@/utils'

export const useFirstUpcomingMovies = () => {
  return useQuery({
    queryKey: ['first-upcoming'],
    queryFn: queries.getFirstUpcomingMovies,
  })
}

const queryOptions = {
  initialPageParam: 1,
  maxPages: 3,
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
    queryKey: ['now-playing'],
    queryFn: queries.getNowPlayingMovies,
    ...queryOptions,
  })
}

export const usePopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ['popular'],
    queryFn: queries.getPopularMovies,
    ...queryOptions,
  })
}

export const useTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: ['top-rated'],
    queryFn: queries.getTopRatedMovies,
    ...queryOptions,
  })
}

export const useUpcomingMovies = () => {
  return useInfiniteQuery({
    queryKey: ['upcoming'],
    queryFn: queries.getUpcomingMovies,
    ...queryOptions,
  })
}
