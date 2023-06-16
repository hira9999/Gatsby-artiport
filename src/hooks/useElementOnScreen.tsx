import { useCallback, useRef, useState } from 'react'

const useElementOnScreen = () => {
  const [isVisible, setIsVisible] = useState(false)
  const intObserver = useRef<IntersectionObserver>()

  const intersection = useCallback(
    (elem: HTMLSpanElement) => {
      if (intObserver.current) {
        intObserver.current.disconnect()
      }
      intObserver.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && !isVisible) setIsVisible(true)
        },
        { threshold: 0.2 },
      )
      if (elem) intObserver.current.observe(elem)
    },
    [isVisible, intObserver],
  )

  return [intersection, isVisible]
}

export default useElementOnScreen
