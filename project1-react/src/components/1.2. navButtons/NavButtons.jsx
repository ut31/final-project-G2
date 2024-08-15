import './navButtons.css'
import React from 'react'

const NavButtons = (props) => {
  return (
    <>
    <button className='navBtn'> {props.type}</button>
    </>
  )
}

export default NavButtons