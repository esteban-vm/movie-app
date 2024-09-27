import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getTopRatedMovies, getUpcomingMovies } from '@/utils'

export const useTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: ['top-rated-movies'],
    queryFn: getTopRatedMovies,
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined
    },
  })
}

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ['upcoming-movies'],
    queryFn: getUpcomingMovies,
  })
}
