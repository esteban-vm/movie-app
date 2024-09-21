import type { Movie } from 'tmdb-ts'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string
      API_IMAGE_URL: string
      NEXT_PUBLIC_API_URL?: string
    }
  }

  namespace AppTypes {
    interface MovieData extends Movie {
      backdrop_placeholder: string
      poster_placeholder: string
    }
  }
}

export {}
