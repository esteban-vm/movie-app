import type { MovieData } from '@/types'
import type { ReactNode } from 'react'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { NEXT_PUBLIC_API_URL } from '@/constants'

interface IMovieContext {
  movies: MovieData[]
  isLoading: boolean
  isError: boolean
}

const MovieContext = createContext<IMovieContext>(null!)

export function MovieContextProvider(props: { children: ReactNode }) {
  const [movies, setMovies] = useState<MovieData[]>([])
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

  const value: IMovieContext = {
    movies,
    isLoading,
    isError,
  }

  return <MovieContext.Provider value={value} {...props} />
}

export const useMovieContext = () => useContext(MovieContext)
