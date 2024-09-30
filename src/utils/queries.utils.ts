import type { MovieData } from '@/types'
import type { Route } from 'next'
import axios from 'axios'
import { NEXT_PUBLIC_API_URL } from '@/constants'

const axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
})

export async function getFirstUpcomingMovies() {
  const url: Route = '/api/movies/upcoming'
  const { data } = await axiosInstance.get<MovieData[]>(url)
  return data
}

function makeQueryWithParams(url: Route) {
  return async ({ pageParam }: { pageParam: number }) => {
    const { data } = await axiosInstance.get<MovieData[]>(url, { params: { page: pageParam } })
    return data
  }
}

export const getNowPlayingMovies = makeQueryWithParams('/api/movies/now-playing')
export const getPopularMovies = makeQueryWithParams('/api/movies/popular')
export const getTopRatedMovies = makeQueryWithParams('/api/movies/top-rated')
export const getUpcomingMovies = makeQueryWithParams('/api/movies/upcoming')
