import type { MovieData } from '@/types'
import type { GetNextPageParamFunction } from '@tanstack/react-query'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { queries } from '@/utils'

const initialPageParam = 1

const getNextPageParam: GetNextPageParamFunction<number, MovieData[]> = (lastPage, allPages) => {
  return lastPage.length > 0 ? allPages.length + 1 : undefined
}

export const useFirstUpcomingMovies = () => {
  return useQuery({
    queryKey: ['first-upcoming'],
    queryFn: queries.getFirstUpcomingMovies,
  })
}

export const useNowPlayingMovies = () => {
  return useInfiniteQuery({
    queryKey: ['now-playing'],
    queryFn: queries.getNowPlayingMovies,
    initialPageParam,
    getNextPageParam,
  })
}

export const usePopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ['popular'],
    queryFn: queries.getPopularMovies,
    initialPageParam,
    getNextPageParam,
  })
}

export const useTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: ['top-rated'],
    queryFn: queries.getTopRatedMovies,
    initialPageParam,
    getNextPageParam,
  })
}

export const useUpcomingMovies = () => {
  return useInfiniteQuery({
    queryKey: ['upcoming'],
    queryFn: queries.getUpcomingMovies,
    initialPageParam,
    getNextPageParam,
  })
}
