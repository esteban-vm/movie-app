import type { MovieData } from '@/types'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getTopRatedMovies, getUpcomingMovies } from '@/utils'

export const useMoviesCarousel = (movies: MovieData[]) => {
  const [current, setCurrent] = useState(0)
  const [nextMovies, setNextMovies] = useState<MovieData[]>([])

  useEffect(() => {
    const total = movies.length

    if (total) {
      const index1 = (current + 1) % total
      const index2 = (current + 2) % total
      const index3 = (current + 3) % total
      const { [index1]: movie1, [index2]: movie2, [index3]: movie3 } = movies
      setNextMovies([movie1, movie2, movie3])
    }
  }, [current, movies])

  return { setCurrent, nextMovies }
}

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
