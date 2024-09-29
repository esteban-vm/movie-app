import { Button } from 'flowbite-react'

export interface LoadMoreButtonProps {
  isFetching?: boolean
  onClick?: () => void
}

export default function LoadMoreButton({ isFetching, ...rest }: LoadMoreButtonProps) {
  return (
    <Button disabled={isFetching} gradientDuoTone='purpleToBlue' isProcessing={isFetching} pill {...rest}>
      Load More…
    </Button>
  )
}
