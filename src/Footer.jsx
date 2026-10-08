// src/components/Footer.jsx
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {year} CampusEats</p>
    </footer>
  )
}

export default Footer