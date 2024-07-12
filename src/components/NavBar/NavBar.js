import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar(){
  return (
    <nav className='nav'>
        <h1>Receitas 🍴</h1>
        <ul>
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/favorites">Favoritos</Link></li>
        </ul>
    
    </nav>
  )
}

export default NavBar