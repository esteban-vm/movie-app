'use client'

import { Button } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { LuArrowBigDown, LuArrowBigUp } from 'react-icons/lu'
import { twUtils } from '@/utils'

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

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
