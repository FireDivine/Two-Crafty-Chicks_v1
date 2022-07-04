import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStamps } from '../actions/stamps'

function Stamps() {
  const stamps = useSelector((state) => state.stamps)
  // console.log(stamps)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStamps())
    
  }, [])
  return (
    <>
      <h2 className="text-center"> -- Stamps --</h2>
      <div className="d-flex container">
        <Link className=" inpop" to={`/stamps/add`}>
          <button className="btn btn-info  inpop">Add New</button>
        </Link>
      </div>
      <div className="container mr-3 w-75 d-flex justify-content-center">
        <table className="table ">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Stamp Type</th>
              <th scope="col">Catalog</th>
              <th scope="col">Retired</th>
              <th scope="col">Bundle</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO  - make stamp type and Catalog into words.   */}
            {stamps.map((col) => (
              
              <tr key={col.id}>
                {/* <th scope="row">{col.id}</th> */}
                <td>{col.name}</td>
                <td>{col.Number}</td>
                <td>{col.Type}</td>
                <td>{col.Catalog}</td>
                <td>
                  <input type={'checkbox'} readOnly checked={col.retired} />
                </td>
                <td>
                  <input type={'checkbox'} readOnly checked={col.bundle} />
                </td>
                <td>{col.price}</td>

                <td>
                  <Link className=" inpop" to={`/stamps/${col.id}`}>
                    <button className="btn btn-info inpop">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Stamps
