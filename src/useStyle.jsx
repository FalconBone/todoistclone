import { useState, useEffect } from 'react'

export function useStyle(prop, $ = document.body) {
  const [value, setValue] = useState(getComputedStyle($).getPropertyValue(prop))

  useEffect(() => {
    $.style.setProperty(prop, value)
  }, [value])

  return [value, setValue]
}