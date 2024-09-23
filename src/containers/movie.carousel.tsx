'use client'

import { Carousel } from 'flowbite-react'
import { LuChevronLeftCircle, LuChevronRightCircle } from 'react-icons/lu'
import { MovieSlide } from '@/components'
import { useMovieContext } from '@/contexts'

export default function MovieCarousel() {
  const { movies, setCurrentIndex, isLoading, isError } = useMovieContext()

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <Carousel
      aria-label='Movie Carousel'
      aria-live='polite'
      aria-roledescription='carousel'
      indicators={false}
      leftControl={<LuChevronLeftCircle />}
      rightControl={<LuChevronRightCircle />}
      role='region'
      slideInterval={5_000}
      pauseOnHover
      onSlideChange={setCurrentIndex}
    >
      {movies.map((movie) => (
        <MovieSlide key={movie.id} {...movie} />
      ))}
    </Carousel>
  )
}
