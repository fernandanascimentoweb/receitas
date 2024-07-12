import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Prato Simples</h2>
            <p>Toste bem a farinha e use uma banana bem verdinha para ter essa receita deliciosa que é acompanhamento mas muitas vezes também protagonista.</p>
            <button><Link to="/farofa"><a href="/">Ver receita </a> </Link></button>
        </div>

    </div>
  )
}

export default Header