import { Link } from 'react-router'
import { useMyOrders } from '../hooks/useMyOrders.js'
import OrderStatus from '../components/OrderStatus.jsx' // adjust to wherever yours lives
import OrderActions from '../components/OrderActions.jsx'

function OrdersPage() {
  const { orders, loading, error } = useMyOrders()

  if (loading) {
    return (
      <section>
        <h2 className="section-title">My orders</h2>
        <p className="muted">Loading orders…</p>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <h2 className="section-title">My orders</h2>
        <p className="field-error" role="alert">{error}</p>
      </section>
    )
  }

  if (orders.length === 0) {
    return (
      <section>
        <h2 className="section-title">My orders</h2>
        <p className="muted">No orders yet. <Link to="/">Browse vendors</Link></p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="section-title">My orders</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="card">
            <p className="cart-name">{order.vendorName} · pickup {order.pickupTime}</p>
            <ul className="muted">
  {order.items.map((i) => (
    <li key={i.itemId}>
      {i.qty}× {i.name}
      {i.note && <em> — “{i.note}”</em>}
    </li>
  ))}
</ul>
            <p className="muted">
              Placed {order.createdAt ? order.createdAt.toDate().toLocaleString('en-MY') : 'just now'}
            </p>
            <p className="price">RM {order.total.toFixed(2)}</p>
            <OrderStatus status={order.status } />
            {order.status === 'Received' && <OrderActions order={order} />}

            
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OrdersPage