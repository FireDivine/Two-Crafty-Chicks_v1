import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchCatalogs, fetchSTypes } from '../actions/stamps'
import { postStamps } from '../apis/apiClient'

function AddStamps() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
const [newStamp, SetNewStamp] = useState({})


  const catalog = useSelector((state) => state.CatalogReducer)
  //console.log("C: ",catalog)
  useEffect(() => {
    dispatch(fetchCatalogs())
  }, [])
  const Stypes = useSelector((state) => state.stampTypesReducer)
  // console.log("T: ",Stypes)
  useEffect(() => {
    dispatch(fetchSTypes())
  }, [])

function handleSubmit(e){
  e.preventDefault()
  navigate('/stamps')
  postStamps(newStamp)
  console.log(newStamp)

}
function handleChange(e){
  SetNewStamp({...newStamp,[e.target.name]:e.target.value})
}

  return (
    <div className="container  col-xxl-8 px-4 py-5 w-50">
      <h2 className='text-center'>-- Add New Stamp --</h2>
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <form onSubmit={handleSubmit} action="/v1/stamps/add" method="post">
          <label className="pt-3" htmlFor="name">
            Name of New Stamp
          </label>
          <input onChange={handleChange} className="form-control" type="text" name="name" id="name" />
          <label className="pt-3" htmlFor="number">
            Number of New Stamp
          </label>
          <input
          onChange={handleChange}
            className="form-control"
            type="text"
            name="number"
            id="number"
          />

          <label className="pt-3" htmlFor="type">
            Type of Stamp
          </label>
          <select onClick={handleChange} className="form-select" type="text" name="type" id="type">
            {Stypes.map((t) => (
              <option key={t.id} className="form-control">
                {t.name}
              </option>
            ))}
          </select>

          <label className="pt-3" htmlFor="catalog">
            Catalog
          </label>
          <select
          onChange={handleChange}
            className="form-select "
            type="text"
            name="catalog"
            id="catalog"
            value= {newStamp.catalog}
          >
            {catalog.map((pop) => (
              <option key={pop.id} className="form-control">
                {pop.name}
              </option>
            ))}
          </select>
          <div className="form-check  pt-3 ">
        
            <label className="form-check-label" htmlFor="type">
              is Stamp Retired?
            </label>
            <input
            onChange={handleChange}
              className="form-check-input"
              type="checkbox"
              name="retired"
              id="retired"
            />
          </div>
          <div className="form-check  pt-3">
            <label className=" form-check-label" htmlFor="type">
              is Stamp in a Bundle?
            </label>
            <input
            onChange={handleChange}
              className="form-check-input"
              type="checkbox"
              name="bundle"
              id="bundle"
            />
          </div>
          <label className="pt-3" htmlFor="price">
            Price(NZD) of Stamp
          </label>
          <input onChange={handleChange} className="form-control" type="number" name="price" id="price" />

          <div className="pt-3">
            <button
              
              className="btn btn-outline-info form-control pop"
              
            >Edit Stamp</button>
            <button className="btn btn-outline-info form-control inpop mt-2">Delete Stamp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStamps
