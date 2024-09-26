// import type { MovieData } from '@/types'
// import type { Movie } from 'tmdb-ts'
// import { getPlaceholderImage } from '@/utils'

// export async function GET(request: Request) {
//   try {
//     const url = new URL(request.url)
//     const page = url.searchParams.get('page') ?? '1'
//     const quantity = Number(page)
//     console.log(quantity)

//     const { topRated } = await import('@/mocks')

//     const movies = await Promise.all(
//       topRated.map(async (movie: Movie): Promise<MovieData> => {
//         const backdropPlaceholder = await getPlaceholderImage(movie.backdrop_path)
//         const posterPlaceholder = await getPlaceholderImage(movie.poster_path)

//         return {
//           ...movie,
//           backdrop_placeholder: backdropPlaceholder,
//           poster_placeholder: posterPlaceholder,
//         }
//       })
//     )

//     return Response.json(movies, { status: 200 })
//   } catch (error) {
//     return Response.json(error, { status: 500 })
//   }
// }

import type { MovieData } from '@/types'
import { tmdb } from '@/api/config'
import { API_IMAGE_URL } from '@/constants'
import { getPlaceholderImage } from '@/utils'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page'))
    const { results } = await tmdb.movies.topRated({ page })

    const movies = await Promise.all(
      results.map(async ({ backdrop_path, poster_path, ...rest }): Promise<MovieData> => {
        const backdropPath = API_IMAGE_URL + backdrop_path
        const posterPath = API_IMAGE_URL + poster_path
        const backdropPlaceholder = await getPlaceholderImage(backdropPath)
        const posterPlaceholder = await getPlaceholderImage(posterPath)

        return {
          ...rest,
          backdrop_path: backdropPath,
          poster_path: posterPath,
          backdrop_placeholder: backdropPlaceholder,
          poster_placeholder: posterPlaceholder,
        }
      })
    )

    return Response.json(movies, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
