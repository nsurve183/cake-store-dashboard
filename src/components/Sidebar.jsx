import React, { useContext } from 'react'
import '../scss/navbar/navbar.css'
import { Link } from 'react-router-dom'
import CategoriesContext from '../Context/context'
import { routes } from '../Arrays/arrays'



const Sidebar = () => {
  const context = useContext(CategoriesContext)
  const {isOpen, sidebar_close} = context
  return (
    <div>
        <div className={isOpen ? "sidebar" : "sidebar_close"}>
          <div className="sidebar_header">
            <div className="sidebar_title">Dahsboard</div>
            <i className='fa-solid fa-xmark' onClick={sidebar_close}></i>
          </div>
          <ul className="sidebar_list">
            {routes.map((val, index) => {
              return <Link key={index} to={val.path} className='nav-link'>
                <i className={val.icon}></i>
                {val.name}
              </Link>
            })}
          </ul>
        </div>
      </div>
  )
}

export default Sidebar
