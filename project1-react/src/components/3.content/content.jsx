import React from 'react'
import './content.css'
import HomePage from '../3.2. homePage/HomePage'
import Search from '../3.1. search/Search'

const Content = () => {
  return (
    <>
    <div className='main'>
    <Search/>
    <HomePage/>
    </div>
    </>
  )
}

export default Content