import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return <p className="muted">No orders yet.</p>
  }

  return (
    <section>
      <h2 className="section-title">Your orders</h2>
      {[...orders].reverse().map((order) => (
        <div className="card" key={order.id}>
          <p><strong>Pickup {order.pickupTime}</strong> · {order.mahallah}</p>
          <ul>
            {order.lines.map((line) => (
              <li key={line.item.id}>
                {line.qty} × {line.item.name}
                {line.note && ` (${line.note})`}
              </li>
            ))}
          </ul>
          <p>Total: RM {order.total.toFixed(2)}</p>
        </div>
      ))}
    </section>
  )
}

export default OrdersPage