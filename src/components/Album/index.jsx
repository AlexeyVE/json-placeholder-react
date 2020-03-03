import React from 'react'



export default ( props ) => {
  return (
    <li className = "uk-active album">
      <a href="#">{ props.title }
      </a>
    </li>
    )
}

