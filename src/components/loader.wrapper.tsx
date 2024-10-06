import type { ContainerProps } from '@/types'
import type { AriaRole, ReactNode } from 'react'
import { Spinner } from 'flowbite-react'
import { twUtils } from '@/utils'

export interface LoaderWrapperProps extends Pick<ContainerProps, 'isLoading'> {
  className: string
  children: ReactNode
  role?: AriaRole
}

export default function LoaderWrapper({ isLoading, className, children, ...rest }: LoaderWrapperProps) {
  return (
    <div className={twUtils.clsx(className, isLoading && 'cursor-wait')} {...rest}>
      {isLoading ? <Spinner aria-label='Loading Spinner' color='success' size='lg' /> : children}
    </div>
  )
}
