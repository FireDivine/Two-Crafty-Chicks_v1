import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Stamps from './Stamps'
import Collections from './Collections'
import EditCollections from './EditCollections'
import EditStamps from './EditStamps'

function App () {

  return (
    <>
      <div className='container'>
       <Header />
       </div>
       <div className=' m-2'>
        
     
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stamps" element={<Stamps />} />
          {/* <Route path="/stamps/add" element={<AddStamps />} /> */}
          <Route path="/stamps/:id" element={<EditStamps />} />
          <Route path="/collections" element={<Collections />} />
          {/* <Route path="/collections/add" element={<AddCollections />} /> */}
          <Route path='/collections/:id' element={<EditCollections/>}/>
           {/* <Route path='/continent/:name/:code' element={<Country />}/> */}
        </Routes> 
        </div>
    </>
  )
}

export default App
