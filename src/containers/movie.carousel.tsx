import type { MovieData } from '@/types'
import { Carousel } from 'flowbite-react'
import { LuChevronLeftCircle, LuChevronRightCircle } from 'react-icons/lu'
import { MovieSlide } from '@/components'

interface MovieCarouselProps {
  movies: MovieData[]
  onChange: (value: number) => void
}

export default function MovieCarousel({ movies, onChange }: MovieCarouselProps) {
  return (
    <Carousel
      aria-label='Movie Carousel'
      aria-live='polite'
      aria-roledescription='carousel'
      className='area-movie-carousel'
      indicators={false}
      leftControl={<LuChevronLeftCircle />}
      rightControl={<LuChevronRightCircle />}
      role='region'
      slideInterval={5_000}
      pauseOnHover
      onSlideChange={onChange}
    >
      {movies.map((movie) => (
        <MovieSlide key={movie.id} {...movie} />
      ))}
    </Carousel>
  )
}
