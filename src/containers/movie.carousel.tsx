import type { MovieData } from '@/types'
import { Carousel } from 'flowbite-react'
import { LuChevronLeftCircle, LuChevronRightCircle } from 'react-icons/lu'
import { LoadingSpinner, MovieSlide } from '@/components'
import { clsx } from '@/utils'

interface MovieCarouselProps {
  isLoading: boolean
  isAnimated: boolean
  movies: MovieData[]
  onChange: (value: number) => void
}

export default function MovieCarousel({ isLoading, isAnimated, movies, onChange }: MovieCarouselProps) {
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
          slide={isAnimated}
          slideInterval={5_000}
          pauseOnHover
          onSlideChange={onChange}
        >
          {movies.map((movie, index) => (
            <MovieSlide key={index} {...movie} />
          ))}
        </Carousel>
      )}
    </div>
  )
}
