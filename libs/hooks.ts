import { useEffect, useState } from 'react'

// Based on: https://www.skillthrive.com/hunter/posts/change-nav-on-scroll

/**
 * Captures pageYPosition from scroll
 * @returns 
 */
export const useScrollPosition = () => {
  const [pageYOffset, setPageYOffset] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      setPageYOffset(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, [])

  return pageYOffset;
}
