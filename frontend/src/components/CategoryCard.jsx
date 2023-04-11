import React from 'react'
import {Link} from "react-router-dom"
import "../styles/categorycard.css"
const CategoryCard = () => {
  return (
    <>
    <Link className='card' >
        <h3>Category name</h3>
    </Link>
    </>
  )
}

export default CategoryCard