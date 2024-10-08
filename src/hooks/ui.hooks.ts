import type { MovieData } from '@/types'
import type { ChangeEventHandler } from 'react'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export const useMovieCarousel = () => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const listenChanges = () => setIsAnimated(mediaQuery.matches)

    listenChanges()
    mediaQuery.addEventListener('change', listenChanges)
    return () => mediaQuery.removeEventListener('change', listenChanges)
  }, [])

  return { isAnimated }
}

export const useMovieList = (movies?: MovieData[]) => {
  const [current, setCurrent] = useState(0)
  const [nextMovies, setNextMovies] = useState<MovieData[]>([])

  useEffect(() => {
    const total = movies?.length

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

export const useScroll = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return { isVisible, scrollToTop, scrollToBottom }
}

export const useSearchInput = () => {
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebounce(search, 1_000)

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    const input = event.target.value.trim()

    if (input) {
      setSearch(input)
    } else {
      setSearch('')
    }
  }

  return { movieName: debouncedSearch, handleSearch }
}
