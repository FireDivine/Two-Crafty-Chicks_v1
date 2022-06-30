import React from 'react'

function Home() {
  return (
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div
          className="card card-cover h-100 overflow-hidden  bg-dark rounded-4 shadow-lg"
          style={{backgroundImage: 'url(images/animal_stamp.jpg)',backgroundSize: 'cover',backgroundPosition: 'center'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Stamps</h2>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card card-cover h-100 overflow-hidden  bg-dark rounded-4 shadow-lg"
          style={{backgroundImage: 'url(images/snailCard.jpg)',backgroundSize: 'cover',backgroundPosition: 'center'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Card Stock</h2>
          </div>
        </div>
      </div>
      <div className="col">
        <div
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
