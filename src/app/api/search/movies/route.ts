import { tmdb } from '@/api/config'
import { serverUtils } from '@/utils'

export async function GET(request: Request) {
  try {
    const name = await serverUtils.getMovieName(request)
    const { results } = await tmdb.search.movies({ query: name })
    const movies = await serverUtils.formatMovieList(results)
    return Response.json(movies, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
