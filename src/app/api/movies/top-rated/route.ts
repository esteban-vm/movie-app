import { tmdb } from '@/api/config'
import { toMovieDataList } from '@/utils'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page'))
    const { results } = await tmdb.movies.topRated({ page })
    const movies = await toMovieDataList(results)

    return Response.json(movies, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
