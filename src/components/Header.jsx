import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'

const linkClass = ({ isActive }) => (isActive ? 'link active' : 'link')

function Header() {
  const { count } = useCart()
  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>
      <nav className="nav">
        <NavLink to="/" end className={linkClass}>Vendors</NavLink>
        <NavLink to="/orders" className={linkClass}>Orders</NavLink>
        <NavLink to="/cart" className={({ isActive }) => `${linkClass({ isActive })} cart`}>
          Cart <span className="badge">{count}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header