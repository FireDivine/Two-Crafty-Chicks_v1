import React, { useState } from 'react'
//import { postCollections } from '../apis/apiClient'

function AddCollections() {
  const [colName,SetColName]=useState([{
    name:''
  }])
  function handleChange(e){
SetColName({
  name:e.target.value
})
  }
  function handleClick(){
   // postCollections(colName.name)
    console.log(colName.name)
  }
  return (
    <div className="container  col-xxl-8 px-4 py-5 w-50">
      <div className="row flex-lg-row align-items-center g-5 py-5">
      <form action="/v1/collections/add" method="post">
        <label className="pt-3" htmlFor="name">Name of New Collection</label>
        <input onChange={handleChange} className="form-control" type="text" name="name" id="name"/>
        
        <div className="pt-3">
          <button onClick={handleClick} className="btn btn-outline-info form-control pop">Submit </button>
         
        </div>
      
      </form>
      </div>
   </div>
  )
}

export default AddCollections