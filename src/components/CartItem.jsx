// One row in the cart. It shows data and reports button clicks upward; it owns no state.
function CartItem({ line, onChangeQty, onRemove, onChangeNote }) {
  const { item, qty } = line
  return (
    <li className="cart-line">
      <div>
        <p className="cart-name">{item.name}</p>
        <p className="muted">RM {item.price.toFixed(2)} each</p>
      </div>

      <div className="qty">
        <button type="button" aria-label={`Remove one ${item.name}`} onClick={() => onChangeQty(item.id, -1)}>−</button>
        <span>{qty}</span>
        <button type="button" aria-label={`Add one ${item.name}`} onClick={() => onChangeQty(item.id, 1)}>+</button>
      </div>

      <p className="line-total">RM {(item.price * qty).toFixed(2)}</p>
      
      <button type="button" className="link danger" onClick={() => onRemove(item.id)}>Remove</button>

      {/* ...existing name, qty buttons, price, remove... */}
      <input
        type="text"
        className="note-input"
        placeholder="Note (e.g. no chili)"
        maxLength={100}
        value={line.note ?? ''}
        onChange={(e) => onChangeNote(line.item.id, e.target.value)}
        aria-label={`Note for ${line.item.name}`}
      />
    </li>
    
  )
 
}

export default CartItem
