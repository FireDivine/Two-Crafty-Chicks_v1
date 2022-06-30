import React from 'react'

function EditCollections() {
  return (
    <div className="container  col-xxl-8 px-4 py-5 w-50">
      <div className="row flex-lg-row align-items-center g-5 py-5">
      <form action="" method="post">
        <label className="pt-3" htmlFor="Fname">Name of New Collection</label>
        <input className="form-control" type="text" name="Fname" id="Fname"/>
        
        <div className="pt-3">
          <input  type="button" className="btn btn-outline-info form-control pop" value="Submit" />
         
        </div>
      
      </form>
      </div>
   </div>
  )
}

export default EditCollections