import type { MovieData } from '@/types'
import { Carousel } from 'flowbite-react'
import { LuChevronLeftCircle, LuChevronRightCircle } from 'react-icons/lu'
import { LoadingSpinner, MovieSlide } from '@/components'
import { clsx } from '@/utils'

interface MovieCarouselProps {
  isLoading: boolean
  movies: MovieData[]
  onChange: (value: number) => void
}

export default function MovieCarousel({ isLoading, movies, onChange }: MovieCarouselProps) {
  return (
    <div className={clsx('area-movie-carousel', isLoading && 'cursor-wait')}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
          onSlideChange={onChange}
        >
          {movies.map((movie) => (
            <MovieSlide key={movie.id} {...movie} />
          ))}
        </Carousel>
      )}
    </div>
  )
}
