import React from 'react'
import './navListItem.css'

function NavListItems({ nav }) {
  return (
    <li>
        <a href={nav.link} > { nav.name }</a>
    </li>
  )
}

export default NavListItems