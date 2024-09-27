'use client'

import { useMemo } from 'react'
import { LoadingSpinner, LoadMoreButton, MovieCard } from '@/components'
import { useTopRatedMovies } from '@/hooks'
import { clsx } from '@/utils'

export default function MovieGrid() {
  const { isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, data } = useTopRatedMovies()

  const movies = useMemo(() => {
    return data?.pages.reduce((acc, page) => [...acc, ...page], [])
  }, [data])

  return (
    <div className={clsx('area-movie-grid', isLoading && 'cursor-wait')} role='grid'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className='font-bold uppercase ~text-xl/2xl'>Top Rated</h2>
          <div className='flex w-full flex-wrap items-center justify-center gap-1 p-1'>
            {movies?.map((movie, index) => <MovieCard key={index} {...movie} />)}
          </div>
          {hasNextPage && <LoadMoreButton isFetching={isFetchingNextPage} onClick={() => fetchNextPage()} />}
        </>
      )}
    </div>
  )
}
