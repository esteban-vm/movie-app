import type { MovieData } from '@/types'
import type { InfiniteData } from '@tanstack/react-query'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const twClsx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { twClsx as clsx }

export function extractPageNumber(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page')) || 1
  return page
}

export function reducerHelper(data?: InfiniteData<MovieData[], unknown>) {
  return data?.pages.reduce((acc, page) => [...acc, ...page], [])
}
