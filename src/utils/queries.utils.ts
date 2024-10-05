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

export async function getMovieByName(name: string) {
  const url: Route = '/api/search/movies'
  const { data } = await axiosInstance.get<MovieData[]>(url, { params: { query: name } })
  return data
}

export async function getNowPlayingMovies({ pageParam }: { pageParam: number }) {
  const url: Route = '/api/movies/now-playing'
  const { data } = await axiosInstance.get<MovieData[]>(url, { params: { page: pageParam } })
  return data
}

export async function getPopularMovies({ pageParam }: { pageParam: number }) {
  const url: Route = '/api/movies/popular'
  const { data } = await axiosInstance.get<MovieData[]>(url, { params: { page: pageParam } })
  return data
}

export async function getTopRatedMovies({ pageParam }: { pageParam: number }) {
  const url: Route = '/api/movies/top-rated'
  const { data } = await axiosInstance.get<MovieData[]>(url, { params: { page: pageParam } })
  return data
}

export async function getUpcomingMovies({ pageParam }: { pageParam: number }) {
  const url: Route = '/api/movies/upcoming'
  const { data } = await axiosInstance.get<MovieData[]>(url, { params: { page: pageParam } })
  return data
}
