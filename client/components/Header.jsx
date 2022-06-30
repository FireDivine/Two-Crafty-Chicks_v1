import React from 'react'
import Nav from './Nav'

function Header() {
  return (
    <header>
      <h1 className="text-center m-4 p-5">Two Crafty Chicks</h1>
      <div className="d-flex justify-content-center py-3">
        <Nav />
        </div>
</header>
  )
}

export default Header