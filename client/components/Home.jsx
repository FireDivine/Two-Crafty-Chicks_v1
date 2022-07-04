import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div
        onClick={()=>navigate('/stamps')}
          className="card card-cover h-100 overflow-hidden  bg-dark rounded-4 shadow-lg"
          style={{backgroundImage: 'url(images/sleepingSloth.png)',backgroundSize: 'cover',backgroundPosition: 'center'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Stamps</h2>
          </div>
        </div>
      </div>
      <div className="col">
        <div  onClick={()=>navigate('/')}
          className="card card-cover h-100 overflow-hidden  bg-dark rounded-4 shadow-lg"
          style={{backgroundImage: 'url(images/snailCard.jpg)',backgroundSize: 'cover',backgroundPosition: 'center'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Card Stock</h2>
          </div>
        </div>
      </div>
      <div className="col">
        <div  onClick={()=>navigate('/collections')}
          className="card card-cover h-100 overflow-hidden  bg-dark rounded-4 shadow-lg"
          style={{backgroundImage: 'url(images/sunny_Stamps.jpg)',backgroundSize: 'cover',backgroundPosition: 'center'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Collections</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
