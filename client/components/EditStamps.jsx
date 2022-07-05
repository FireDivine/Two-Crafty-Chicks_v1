import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { fetchCatalogs, fetchSTypes } from '../actions/stamps'
import { getStamp, updateStamp } from '../apis/apiClient'

function EditStamps() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newStamp, SetNewStamp] = useState({})
  //const [stampID, setStampID] = useState({})
  let { id } = useParams()
  console.log(id)
  useEffect(() => {
    getStamp(id)
      .then((ss) => {
        console.log('ss', ss)
        return SetNewStamp(ss)
      })
      .catch((err) => console.error(err))
  }, [])
  //console.log(stampID)
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

  function handleEdit(e) {
    e.preventDefault()
    navigate('/stamps')
    updateStamp(id, newStamp)
    console.log(newStamp)
  }
  function handleChange(e) {
    console.log('updated stamp: ', {
      ...newStamp,
      [e.target.name]: e.target.value,
    })
    SetNewStamp({ ...newStamp, [e.target.name]: e.target.value })
  }

  return (
    <div className="container  col-xxl-8 px-4 py-5 w-50">
      <h2 className="text-center">-- Edit Stamp --</h2>
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <form onSubmit={handleEdit} action="/v1/stamps/add" method="post">
          <label className="pt-3" htmlFor="name">
            Name of New Stamp
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="name"
            id="name"
            defaultValue={newStamp.name}
          />
          <label className="pt-3" htmlFor="number">
            Number of New Stamp
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="number"
            id="number"
            defaultValue={newStamp.Number}
          />
          {/* Drop Downs */}
          <label className="pt-3" htmlFor="type">
            Type of Stamp
          </label>
          <select
            onChange={handleChange}
            className="form-select"
            type="text"
            name="Type"
            id="Type"
            value={newStamp.Type}
          >
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
            name="Catalog"
            id="Catalog"
            value={newStamp.Catalog}
          >
            {catalog.map((pop) => (
              <option key={pop.id} className="form-control">
                {pop.name}
              </option>
            ))}
          </select>

          {/* Checkboxes */}
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
              defaultChecked={newStamp.retired}
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
              defaultChecked={newStamp.bundle}
            />
          </div>
          <label className="pt-3" htmlFor="price">
            Price(NZD) of Stamp
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="number"
            name="price"
            id="price"
            defaultValue={newStamp.price}
            step="0.01"
          />

          <div className="pt-3">
            <button
              className="btn btn-outline-info form-control pop"
              value={id}
            >
              Edit Stamp
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditStamps
