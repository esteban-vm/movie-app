import type { MovieData } from '@/types'
import type { ReactNode } from 'react'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { NEXT_PUBLIC_API_URL } from '@/constants'

interface IMovieContext {
  movies: MovieData[]
  setCurrentIndex: (index: number) => void
  nextMovies: MovieData[]
  isLoading: boolean
  isError: boolean
}

const MovieContext = createContext<IMovieContext>(null!)

export function MovieContextProvider(props: { children: ReactNode }) {
  const [movies, setMovies] = useState<MovieData[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextMovies, setNextMovies] = useState<MovieData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true)

        const { data, status } = await axios.get<MovieData[]>('/api/movies/upcoming', {
          baseURL: NEXT_PUBLIC_API_URL,
        })

        if (status >= 200 && status < 300) {
          setMovies(data)
          setIsError(false)
        }
      } catch {
        setMovies([])
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getMovies()
  }, [])

  useEffect(() => {
    const totalMovies = movies.length

    if (totalMovies) {
      const index1 = (currentIndex + 1) % totalMovies
      const index2 = (currentIndex + 2) % totalMovies
      const index3 = (currentIndex + 3) % totalMovies

      const movie1 = movies[index1]
      const movie2 = movies[index2]
      const movie3 = movies[index3]

      setNextMovies([movie1, movie2, movie3])
    }
  }, [currentIndex, movies])

  const value: IMovieContext = {
    movies,
    setCurrentIndex,
    nextMovies,
    isLoading,
    isError,
  }

  return <MovieContext.Provider value={value} {...props} />
}

export const useMovieContext = () => useContext(MovieContext)
