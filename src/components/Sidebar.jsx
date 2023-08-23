import React from 'react'
import '../scss/navbar/navbar.css'
import { Link } from 'react-router-dom'




const Sidebar = ({isOpen, sidebar_close}) => {
  const routes = [
    {
      path: '/',
      name: "Home",
      icon: "fa-solid fa-house"
    },
    {
      path: '/about',
      name: "Add Birth Day Cakes",
      icon: "fa-solid fa-house"
    },
    {
      path: '/contact',
      name: "Add Party Cakes",
      icon: "fa-solid fa-house"
    },
    {
      path: '/contact',
      name: "Add Cup Cakes",
      icon: "fa-solid fa-house"
    },
    {
      path: '/contact',
      name: "Add Weeding Cakes",
      icon: "fa-solid fa-house"
    },
    {
      path: '/contact',
      name: "Add Cup Cakes",
      icon: "fa-solid fa-house"
    },
  ];

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
