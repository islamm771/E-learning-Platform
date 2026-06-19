import { Outlet } from 'react-router'
import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/Navbar'

const Layout = () => {
  return (
    <>
      <div className='bg-orange-400 text-white text-center p-2'>
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout