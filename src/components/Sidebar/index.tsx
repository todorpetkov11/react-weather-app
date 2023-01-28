import { Link } from 'react-router-dom'
import './index.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <Link className='nav-link' to="/">
                <h1 className="sidebar-title">Weather</h1>
            </Link>

            <ul className='sidebar-nav'>
                <ul className='sidebar-nav-item'>
                    <Link className='nav-link' to="/about">About</Link>
                </ul>
                <ul className='sidebar-nav-item'>
                    Theme
                </ul>
            </ul>
        </div>
    )
}

export default Sidebar