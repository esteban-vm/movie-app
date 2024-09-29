import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { api } from '@/utils'

export const useNowPlayingMovies = () => {
  return useQuery({
    queryKey: ['now-playing'],
    queryFn: api.getNowPlayingMovies,
  })
}

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['popular'],
    queryFn: api.getPopularMovies,
  })
}

export const useTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: ['top-rated'],
    queryFn: api.getTopRatedMovies,
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined
    },
  })
}

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ['upcoming'],
    queryFn: api.getUpcomingMovies,
  })
}
