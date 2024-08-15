import React from 'react'
import Input from '../3.1.1.searchInput/Input'
import Filter from '../3.1.2. searchFilter/Filter'
import './search.css'

const Search = () => {
  return (
    <>
    <div className='search-bar'>
    <Input/>
    <div className='filters'>
    <Filter labelText='Sort By:' op1='Rate (Highest to Low)' op2='Release Date'/>
    <Filter labelText='Filter By:' op1='Front-end Courses' op2='Back-end Courses'/>
    </div>
    </div>
    </>

  )
}

export default Search