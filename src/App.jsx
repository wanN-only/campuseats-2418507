// src/App.jsx
import Header from './Header.jsx'
import VendorCard from './VendorCard.jsx'
import MenuItemCard from './MenuItemCard.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section>
          <h2>Today's vendors</h2>
          <VendorCard />
        </section>

        <section>
          <h2>Popular items</h2>
          <div className="grid">
            <MenuItemCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App