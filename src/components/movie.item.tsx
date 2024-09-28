import type { MovieData } from '@/types'
import Image from 'next/image'
import { LuThumbsUp } from 'react-icons/lu'

export default function MovieItem({ id, poster_path, poster_placeholder, overview, title, vote_count }: MovieData) {
  const itemId = id.toString()

  return (
    <div
      aria-labelledby={itemId}
      className='flex h-1/3 overflow-hidden rounded-lg border-2 border-white hover:opacity-90'
      role='listitem'
    >
      <div className='relative w-1/3'>
        <Image
          alt={`${title} poster`}
          blurDataURL={poster_placeholder}
          className='object-cover contrast-125 saturate-100'
          placeholder='blur'
          src={poster_path}
          fill
        />
      </div>
      <div className='flex w-2/3 flex-col items-start justify-around ~gap-2/3 ~p-2/3'>
        <h2 className='max-w-full truncate font-semibold uppercase ~text-lg/xl' id={itemId}>
          {title}
        </h2>
        <p className='line-clamp-3 max-h-fit italic ~text-sm/base'>{overview}</p>
        <p className='~text-xs/base'>
          <LuThumbsUp className='inline' />
          &nbsp;
          <span className='align-middle'>{vote_count.toLocaleString()}</span>
        </p>
      </div>
    </div>
  )
}
