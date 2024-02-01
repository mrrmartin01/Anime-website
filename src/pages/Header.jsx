import React from 'react';
import './header.css'
import NavListItems from '../components/NavListItems';
import navListData from '../data/navListData';
import Search from '../components/Search';

function Header() {
  return (
    <header>
        <a href="./" className="logo"> Anime</a>
        <ul className="nav">
            {
                navListData.map(nav => (
                    <NavListItems key ={nav._id} nav ={ nav}/>

                ))
            }

        </ul>
        <Search/>
    </header>
  )
}

export default Header