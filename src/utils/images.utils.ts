'use server'

import type { MovieData } from '@/types'
import type { Movie } from 'tmdb-ts'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { API_IMAGE_URL } from '@/constants'

async function getFileBufferRemote(url: string) {
  const response = await fetch(url)
  return Buffer.from(await response.arrayBuffer())
}

async function getFileBufferLocal(filepath: string) {
  const realFilepath = path.join(process.cwd(), 'public', filepath)
  return await fs.promises.readFile(realFilepath)
}

function getFileBuffer(src: string) {
  const isRemote = src.startsWith('http')
  return isRemote ? getFileBufferRemote(src) : getFileBufferLocal(src)
}

function toBase64PNG(str: string) {
  return `data:image/png;base64,${str}`
}

async function getPlaceholderImage(str: string) {
  try {
    const originalBuffer = await getFileBuffer(str)
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer()
    return toBase64PNG(resizedBuffer.toString('base64'))
  } catch {
    const str = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg=='
    return toBase64PNG(str)
  }
}

export async function toMovieDataList(movies: Movie[]) {
  let list: MovieData[]

  try {
    const callback = async (movie: Movie): Promise<MovieData> => {
      const backdropPath = API_IMAGE_URL + movie.backdrop_path
      const posterPath = API_IMAGE_URL + movie.poster_path
      const backdropPl = await getPlaceholderImage(backdropPath)
      const posterPl = await getPlaceholderImage(posterPath)
      return {
        ...movie,
        backdrop_path: backdropPath,
        poster_path: posterPath,
        backdrop_placeholder: backdropPl,
        poster_placeholder: posterPl,
      }
    }

    list = await Promise.all(movies.map(callback))
  } catch {
    list = []
  }

  return list
}
