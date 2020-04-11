import React from 'react';

const NavBar = (props) =>{
  return(
    <header>
    <ul>
        <li className="navLink">
          <a href="/">Home</a>
        </li>
        <li className="navLink">
        <a href="/map">Maps of Walks</a>
        </li>
        <li className="navLink">
          <a href="/reviews">Reviews</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
