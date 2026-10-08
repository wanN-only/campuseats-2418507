// src/components/MenuItemCard.jsx
function MenuItemCard() {
  const item = {
    name: 'Nasi Lemak Ayam',        // replace with a real item from your vendor
    description: 'Coconut rice, fried chicken, sambal, egg and peanuts',
    price: 7.5,
    available: true,
  }

  return (
    <article className="menu-card">
      <div className="thumb">{item.name[0]}</div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button className="btn" disabled={!item.available}>
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </article>
  )
}

export default MenuItemCard