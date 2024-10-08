'use client'

import { ListGroup, Spinner, TextInput } from 'flowbite-react'
import { LuSearch } from 'react-icons/lu'
import { queryHooks, uiHooks } from '@/hooks'

export default function SearchInput() {
  const { movieName, handleSearch } = uiHooks.useSearchInput()
  const { data: movies, isFetching } = queryHooks.useMoviesByName(movieName)

  return (
    <>
      <TextInput
        autoComplete='off'
        className='w-full'
        disabled={isFetching}
        icon={LuSearch}
        maxLength={50}
        placeholder='Search…'
        rightIcon={isFetching ? () => <Spinner /> : undefined}
        type='search'
        required
        onChange={handleSearch}
      />

      {movies?.length ? (
        <ListGroup className='absolute top-[110%] w-full'>
          {movies.map((movie) => (
            <ListGroup.Item key={movie.id} className='[&_button]:uppercase'>
              {movie.original_title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : null}
    </>
  )
}
