// src/components/Header.jsx
function Header({ cartCount, onShowMenu, onShowCart }) {
  //const cartCount = 0

  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>
      <nav className="nav">
        <button type="button" className="link" onClick={onShowMenu}>Vendors</button>
        <button type="button" className="link cart" onClick={onShowCart}>Cart <span className="badge">{cartCount}</span></button>
      </nav>
    </header>
  )
}

export default Header