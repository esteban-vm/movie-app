'use client'

import type { MovieData } from '@/types'
import Image from 'next/image'
import { useId } from 'react'
import { LuThumbsUp } from 'react-icons/lu'

export default function MovieSlide({
  backdrop_path,
  backdrop_placeholder,
  poster_path,
  poster_placeholder,
  overview,
  title,
  vote_count,
}: MovieData) {
  const id = useId()

  return (
    <div aria-labelledby={id} aria-roledescription='slide' className='relative size-full overflow-hidden' role='group'>
      <Image
        alt={title}
        blurDataURL={backdrop_placeholder}
        className='rounded-lg border border-indigo-700 object-cover contrast-125 saturate-150'
        placeholder='blur'
        src={backdrop_path}
        fill
      />
      <div className='absolute inset-0 bg-gradient-to-t from-indigo-700 to-indigo-300/15' />
      <div className='absolute inset-x-0 bottom-0 top-[55%] flex'>
        <div className='relative h-full w-2/5 overflow-hidden rounded-tr-lg border-r-4 border-t-4 border-indigo-700 md:w-1/4'>
          <Image
            alt={`${title} poster`}
            blurDataURL={poster_placeholder}
            className='object-cover contrast-125 saturate-100 transition-all duration-300'
            placeholder='blur'
            src={poster_path}
            fill
          />
        </div>
        <div className='flex h-full w-3/5 flex-col items-start justify-end ~gap-2/4 ~p-2/4 md:w-3/4'>
          <h2 className='flex max-w-full grow items-center justify-start' id={id}>
            <span className='truncate font-semibold uppercase ~text-xl/3xl'>{title}</span>
          </h2>
          <p className='line-clamp-4 italic ~text-sm/base'>{overview}</p>
          <p className='~text-xs/base'>
            <LuThumbsUp className='inline' />
            &nbsp;
            <span className='align-middle'>{vote_count.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
