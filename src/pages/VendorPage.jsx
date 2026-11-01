import { Link, useParams } from 'react-router-dom'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendors.js'

function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => v.id === id)
  if (!vendor) {
    return (
      <div className="card">
        <p>Vendor not found.</p>
        <Link to="/">Back to vendors</Link>
      </div>
    )
  }

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      <MenuList items={vendor.menu} />
    </section>
  )
}

export default VendorPage