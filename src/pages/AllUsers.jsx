
import React, { useContext } from 'react'
import CategoriesContext from '../Context/context'
import "../scss/allusers/allusers.css"

const AllUsers = () => {
  const context = useContext(CategoriesContext)
  const { isOpen } = context
  return (
    <div>
      <div className="container-fluid mt-4">
        <div className={isOpen ? 'row mt-4 py-2 mx-0' : 'row mt-4 mx-0'}>
          <h2 className='mb-4'>All Users Data</h2>
          <div className="col-12">
            <div className="table-responsive">
              <table className="table text-center table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>User Name</th>
                    <th>User Code</th>
                    <th>User Email</th>
                    <th>Delete User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Nikhil Surve</td>
                    <td>nsurve</td>
                    <td>n123@yahoo.com</td>
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

export default AllUsers
