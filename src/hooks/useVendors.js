import { useEffect, useState } from 'react'
import { subscribeToVendors, subscribeToVendor, subscribeToMenu } from '../services/vendors'

export function useVendors() {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const unsubscribe = subscribeToVendors(
      (data) => {
        setVendors(data)
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
    )

    return () => unsubscribe()
  }, [reloadKey])

  return { vendors, loading, error, reload: () => setReloadKey((k) => k + 1) }
}

export function useVendor(vendorId) {
  const [vendor, setVendor] = useState(null)
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const onError = (err) => {
      setError(err.message)
      setLoading(false)
    }

    const stopVendor = subscribeToVendor(
      vendorId,
      (data) => {
        setVendor(data)
        setLoading(false)
      },
      onError,
    )
    const stopMenu = subscribeToMenu(vendorId, setMenu, onError)

    return () => {
      stopVendor()
      stopMenu()
    }
  }, [vendorId])

  return { vendor, menu, loading, error }
}