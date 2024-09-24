import type { MovieData } from '@/types'
import { Card, Tooltip } from 'flowbite-react'
import Image from 'next/image'

export default function MovieCard({ poster_path, poster_placeholder, title }: MovieData) {
  return (
    <Tooltip content={title} style='auto'>
      <Card
        className='overflow-hidden border-2 bg-transparent ~w-72/80 hover:opacity-90'
        renderImage={() => {
          return (
            <div className='relative h-96 w-full'>
              <Image
                alt={`${title} poster`}
                blurDataURL={poster_placeholder}
                className='object-cover contrast-125 saturate-100'
                placeholder='blur'
                src={poster_path}
                fill
              />
            </div>
          )
        }}
      >
        <h3 className='truncate font-bold ~text-base/lg'>{title}</h3>
      </Card>
    </Tooltip>
  )
}
