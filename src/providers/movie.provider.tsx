import type { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { useState } from 'react'

export default function MovieProvider(props: { children: ReactNode }) {
  const [client] = useState(() => {
    return new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    })
  })

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration {...props} />
      <ReactQueryDevtools buttonPosition='bottom-left' initialIsOpen={false} />
    </QueryClientProvider>
  )
}
