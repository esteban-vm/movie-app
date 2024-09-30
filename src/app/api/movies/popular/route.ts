import { tmdb } from '@/api/config'
import { extractPageNumber, toMovieDataList } from '@/utils'

export async function GET(request: Request) {
  try {
    const page = extractPageNumber(request)
    const { results } = await tmdb.movies.popular({ page })
    const movies = await toMovieDataList(results)
    return Response.json(movies, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
