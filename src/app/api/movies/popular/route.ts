import { tmdb } from '@/api/config'
import { toMovieDataList } from '@/utils'

export async function GET() {
  try {
    const { results } = await tmdb.movies.popular()
    const movies = await toMovieDataList(results)
    return Response.json(movies, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
