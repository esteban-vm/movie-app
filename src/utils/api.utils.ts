import type { MovieData } from '@/types'
import axios from 'axios'
import { NEXT_PUBLIC_API_URL } from '@/constants'

const api = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
})

export async function getTopRatedMovies({ pageParam }: { pageParam: number }) {
  const { data } = await api.get<MovieData[]>('/api/movies/top_rated', { params: { page: pageParam } })
  return data
}

export async function getUpcomingMovies() {
  const { data } = await api.get<MovieData[]>('/api/movies/upcoming')
  return data
}
