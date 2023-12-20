import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navber';
import Footer from '../component/Footer';
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout;
