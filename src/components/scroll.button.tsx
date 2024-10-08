'use client'

import { Button } from 'flowbite-react'
import { LuArrowBigDown, LuArrowBigUp } from 'react-icons/lu'
import { uiHooks } from '@/hooks'
import { twUtils } from '@/utils'

export default function ScrollButton() {
  const { isVisible, scrollToTop, scrollToBottom } = uiHooks.useScroll()

  return (
    <Button.Group className={twUtils.clsx('fixed bottom-2 right-2 outline-none', !isVisible && 'hidden')}>
      <Button className='outline-none' gradientDuoTone='purpleToBlue' title='Back to top' pill onClick={scrollToTop}>
        <LuArrowBigUp className='size-5' />
      </Button>
      <Button
        className='outline-none'
        gradientDuoTone='purpleToBlue'
        title='Go to bottom'
        pill
        onClick={scrollToBottom}
      >
        <LuArrowBigDown className='size-5' />
      </Button>
    </Button.Group>
  )
}
