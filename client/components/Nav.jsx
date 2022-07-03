import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <ul className="nav">
        <li className="nav-item"><Link to={'/'} className="nav-link" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to={'/stamps'}  className="nav-link">Stamps</Link></li>
        <li className="nav-item"><Link to={'/cards'}  className="nav-link active">Card Stock</Link></li>
        <li className="nav-item"><Link to={'/collections'}  className="nav-link">Collections</Link></li>
        <li className="nav-item"><a href="/details.html" className="nav-link">Catalog</a></li>
        {/* <li className="nav-item"><a href="/details.html" className="nav-link">Six</a></li> */}
      </ul>
  )
}

export default Nav