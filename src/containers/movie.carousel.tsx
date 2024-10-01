import type { ContainerProps } from '@/types'
import { Carousel } from 'flowbite-react'
import { LuChevronLeftCircle, LuChevronRightCircle } from 'react-icons/lu'
import { LoaderWrapper, MovieSlide } from '@/components'

interface MovieCarouselProps extends ContainerProps {
  isAnimated: boolean
  onChange: (value: number) => void
}

export default function MovieCarousel({ isAnimated, movies = [], onChange, ...rest }: MovieCarouselProps) {
  return (
    <LoaderWrapper className='area-movie-carousel' {...rest}>
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
    </LoaderWrapper>
  )
}
