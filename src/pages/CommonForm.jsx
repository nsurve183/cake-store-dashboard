

import { useLocation } from 'react-router-dom'
import CategoriesContext from '../Context/context'
import "../scss/forms/forms.css"
import React, { useContext, useEffect, useState } from 'react'


const CommonForm = () => {
  const location = useLocation()
  const context = useContext(CategoriesContext)
  const { isOpen } = context
  const [heading, setheading] = useState()

  useEffect(() => {
    if(location.pathname === '/addbirthdaycakes'){
      setheading("Add Birth Day Cakes")
    }else if(location.pathname === '/addweddingcakes'){
      setheading("Add Wedding Cakes")
    }else if(location.pathname === '/addpartycakes'){
      setheading("Add Party Cakes")
    }else if(location.pathname === '/addcupcakes'){
      setheading("Add Cup Cakes")
    }
  })
  return (
    <div>
      <div className="container-fluid mt-4">
        <div className={isOpen ? 'row mt-4 py-2 mx-0' : 'row mt-4 mx-0'}>
          <h2 className='mb-4'>{heading}</h2>
          <div className="col-12">
            <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name='title'/>
                <div id="title" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description : </label>
                <textarea type="text" className="form-control" id="desc" name='desc'/>
                <div id="email" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="cost" className="form-label">Cake Cost :</label>
                <input type="number" className="form-control" id="cost" name='cost' />
              </div>
              <div className="mb-3">
                <label htmlFor="file" className="form-label">Upload Image :</label>
                <input type="file" className="form-control" id="file" name='cost' />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonForm
