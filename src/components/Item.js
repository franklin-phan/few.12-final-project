import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    const { name, image, tags,id } = props
    return (
      <div>
        <Link to={`/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Food" />
        </Link>
        <h1>
            <Link to={`/details/${id}`}>
                {name}
            </Link>
        </h1>
        <div>{tags}</div>
      </div>
    )
  }
export default Item