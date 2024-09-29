import type { MovieData } from '@/types'
import { Card, Rating, RatingStar, Tooltip } from 'flowbite-react'
import Image from 'next/image'
import { locales } from '@/utils'

export default function MovieCard({
  id,
  original_language,
  poster_path,
  poster_placeholder,
  release_date,
  title,
  vote_average,
}: MovieData) {
  const cardId = id.toString()

  return (
    <Tooltip content={title} role='tooltip' style='auto'>
      <Card
        aria-labelledby={cardId}
        className='group overflow-hidden border-2 bg-transparent ~w-[17rem]/72 hover:opacity-90'
        renderImage={() => {
          return (
            <div className='size-full overflow-hidden'>
              <div className='relative w-full transition-transform duration-300 ~h-80/96 group-hover:scale-105'>
                <Image
                  alt={`${title} poster`}
                  blurDataURL={poster_placeholder}
                  className='object-cover contrast-125 saturate-100'
                  placeholder='blur'
                  src={poster_path}
                  fill
                />
              </div>
            </div>
          )
        }}
      >
        <article>
          <h3 className='mb-1 truncate font-semibold uppercase ~text-base/lg' id={cardId}>
            {title}
          </h3>
          <Rating className='border-b border-dashed border-white'>
            <RatingStar />
            <p className='~text-sm/base'>Rating: {vote_average.toFixed(1)}</p>
          </Rating>
          <p className='border-b border-dashed border-white ~text-sm/base'>
            Language: {locales.formatLanguage(original_language)}
          </p>
          <p className='truncate border-b border-dashed border-white ~text-sm/base'>
            Release: {locales.formatDate(release_date)}
          </p>
        </article>
      </Card>
    </Tooltip>
  )
}
