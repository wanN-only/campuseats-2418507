// src/context/CartProvider.jsx
import { CartContext } from './cart-context.js'
import useLocalStorage from '../hooks/useLocalStorage.js'

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('cart', []) // lines of { item, qty, note }
  const [orders, setOrders] = useLocalStorage('orders', [])

  // Derived values: never stored
  const count = cart.reduce((sum, line) => sum + line.qty, 0)
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0)

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id)
      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line
        )
      }
      return [...prev, { item, qty: 1, note: '' }]
    })
  }

  function changeQty(itemId, delta) {
    setCart((prev) =>
      prev
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line
        )
        .filter((line) => line.qty > 0)
    )
  }

  function removeFromCart(itemId) {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId))
  }

  // Extra, for your B6 feature (order notes)
  function changeNote(itemId, note) {
    setCart((prev) =>
      prev.map((line) => (line.item.id === itemId ? { ...line, note } : line))
    )
  }

  // details = { name, mahallah, pickupTime } from CheckoutForm
  function placeOrder(details) {
    const order = {
      id: Date.now(),
      ...details,
      lines: cart,
      total,
    }
    setOrders((prev) => [...prev, order])
    setCart([])
    return order
  }

  const value = {
    cart,
    orders,
    count,
    total,
    addToCart,
    changeQty,
    removeFromCart,
    changeNote,
    placeOrder,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}