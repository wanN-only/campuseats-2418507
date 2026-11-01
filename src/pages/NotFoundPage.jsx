import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="card">
      <h2>Page not found</h2>
      <Link to="/">Go home</Link>
    </div>
  )
}

export default NotFoundPage