import Footer from "../Footer"
import Header from "../Header"

function FullLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <div className="min-h-screen container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default FullLayout
