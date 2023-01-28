import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.css'


function Layout() {
    return (
        <div className='layout'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Layout