import { tmdb } from '@/api/config'
import { serverUtils } from '@/utils'

export async function GET(request: Request) {
  try {
    const page = await serverUtils.getPageNumber(request)
    const { results } = await tmdb.movies.topRated({ page })
    const movies = await serverUtils.formatMovieList(results)
    return Response.json(movies, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
