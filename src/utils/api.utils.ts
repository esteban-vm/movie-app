import type { MovieData } from '@/types'
import type { Route } from 'next'
import axios from 'axios'
import { NEXT_PUBLIC_API_URL } from '@/constants'

const instance = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
})

export async function getNowPlayingMovies() {
  const url: Route = '/api/movies/now-playing'
  const { data } = await instance.get<MovieData[]>(url)
  return data
}

export async function getPopularMovies() {
  const url: Route = '/api/movies/popular'
  const { data } = await instance.get<MovieData[]>(url)
  return data
}

export async function getTopRatedMovies({ pageParam }: { pageParam: number }) {
  const url: Route = '/api/movies/top-rated'
  const { data } = await instance.get<MovieData[]>(url, { params: { page: pageParam } })
  return data
}

export async function getUpcomingMovies() {
  const url: Route = '/api/movies/upcoming'
  const { data } = await instance.get<MovieData[]>(url)
  return data
}
