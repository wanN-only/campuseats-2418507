// src/components/VendorCard.jsx
function VendorCard() {
  const vendor = {
    name: 'Kafe Mahallah Ali',      // replace with a real stall from your mahallah
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
  }

  return (
    <article className="vendor-card">
      <div className="thumb">{vendor.name[0]}</div>
      <div className="info">
        <h3>{vendor.name}</h3>
        <p>{vendor.location}</p>
        <p>Open: {vendor.openHours}</p>
        <span className={vendor.isOpen ? 'status open' : 'status closed'}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </article>
  )
}

export default VendorCard