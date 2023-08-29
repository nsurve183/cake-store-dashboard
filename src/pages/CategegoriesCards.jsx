

import React,  { useContext }  from 'react'
import '../scss/categoriescards/categoriescards.css'
import { CardsArray } from '../Arrays/arrays'
import CategoriesContext from '../Context/context'
import { Link } from 'react-router-dom'

const CategegoriesCards = () => {
  const context = useContext(CategoriesContext);
  const {isOpen} = context
  return (
    <div>
        <div className={isOpen ? 'row mt-4 py-2' : 'row mt-4 p-2'}>
        <h2 className='mb-4'>Admin Dashboard</h2>
        {CardsArray.map((val, index) => {
          return  <div className={isOpen ? 'col-4 mb-3': 'col-md-4 col-sm-6 col-12 mb-3'} key={index}>
            <Link to={val.path} className="card">
            <div className="card-header bg-transparent border-0">{val.title.slice(4)}</div>
              <div className="card-body d-flex justify-content-between align-items-center">
              <i className={val.icon}></i>
              <div className="user_count">{val.user_count}</div>
              </div>
            </Link>
          </div>
        })}
        </div>
    </div>
  )
}

export default CategegoriesCards
