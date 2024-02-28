import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Sidebar from '../Sidebar'

export default function DashboardLayout() {
  return (
    <div className='h-screen w-full'>
      <Header />
      <div className='h-full w-full flex'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}
