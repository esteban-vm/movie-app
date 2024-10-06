'use client'

import type { ChangeEventHandler } from 'react'
import { ListGroup, Spinner, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { useDebounce } from 'use-debounce'
import { queryHooks } from '@/hooks'

export default function SearchInput() {
  const [search, setSearch] = useState('')
  const [name] = useDebounce(search, 1_000)
  const { data: movies, isFetching } = queryHooks.useMoviesByName(name)

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    const input = event.target.value.trim()

    if (input) {
      setSearch(input)
    } else {
      setSearch('')
    }
  }

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
