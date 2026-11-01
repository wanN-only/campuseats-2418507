// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue // bad JSON or storage unavailable
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // storage full or blocked: ignore, the app still works
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage