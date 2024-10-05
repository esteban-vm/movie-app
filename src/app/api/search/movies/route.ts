import { tmdb } from '@/api/config'
import { extractMovieName, toMovieDataList } from '@/utils'

export async function GET(request: Request) {
  try {
    const name = extractMovieName(request)
    const { results } = await tmdb.search.movies({ query: name })
    const movies = await toMovieDataList(results)
    return Response.json(movies, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
