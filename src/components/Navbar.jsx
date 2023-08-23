

import { useState } from 'react'
import '../scss/navbar/navbar.css'
import Sidebar from './Sidebar'



const Navbar = () => {
    const [isOpen, setIsopen] = useState(true)

    const handleOpen = () => {
        setIsopen(true)
    }

    const sidebar_close = () => {
        setIsopen(false)
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar_style">
                <div className="container-fluid">
                    {/* sidebar button */}
                    <div className="d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-bars me-3 d-md-block d-none" type="button" onClick={handleOpen}></i>
                        <a className="navbar-brand mb-0" href="#">Dashboard</a>
                    </div>
                    {/* sidebar button */}

                    {/* navbar-toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="fa-solid fa-angle-down"></span>
                    </button>
                    {/* navbar-toggler */}
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-md-none d-block my-2">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add Birth Day Cakes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add Party Cakes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add Weeding Cakes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add Cup Cakes</a>
                            </li>
                        <button className='btn btn-outline-primary btn-sm'>Sign Up</button>
                        <button className='btn btn-outline-primary btn-sm ms-3'>Log In</button>
                        </ul>
                    </div>
                </div>
            </nav>
            <Sidebar isOpen={isOpen} sidebar_close={sidebar_close}/>
        </div>
    )
}

export default Navbar
