

import CategoriesContext from '../Context/context'
import "../scss/allusers/allusers.css"
import React, { useContext } from 'react'

const UsersViews = () => {
  const context = useContext(CategoriesContext)
  const { isOpen } = context
  return (
    <div>
      <div className="container-fluid mt-4">
        <div className={isOpen ? 'row mt-4 py-2 mx-0' : 'row mt-4 mx-0'}>
          <h2 className='mb-4'>All Users Views</h2>
          <div className="col-12">
            <div className="table-responsive">
              <table className="table text-center table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>User Name</th>
                    <th>User Description</th>
                    <th>Edit Description</th>
                    <th>Delete Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Nikhil Surve</td>
                    <td>nsurve</td>
                    <td><i className='fa-solid fa-edit'></i></td>
                    <td><i className='fa-solid fa-trash'></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersViews
