import React from "react";
import './Card.css';
import { assets } from '../../assets/assets';
import { Link } from "react-router-dom";

function Card (){
    return (
        <>
        <div className='texto'>
            <h1>Nossas Receitas 🍽 </h1>
        </div>
        <section className="card">
            <div className="card-list">
                <Link to="/farofa">
                    <img src={assets.farofa} alt="farofa banana" />
                </Link>
                <p>Farofa de Banana</p>
            </div>
            <div className="card-list">
                <Link to="/fricasse">
                    <img src={assets.fricasse} alt="fricasse"  />
                </Link>
                <p>Fricasse de Frango</p>
            </div>
            <div className="card-list">
                <Link to="/mousse">
                    <img src={assets.mousse} alt="Mousse maracuja" />
                </Link>
                <p>Mousse de Maracuja</p>
            </div>
            <div className="card-list">
                <Link to="/pao">
                    <img src={assets.pao} alt="Pao Caseiro" />
                </Link>
                <p>Pao Caseiro</p>
            </div>
            <div className="card-list">
                <Link to="/pudim">
                    <img src={assets.pudim} alt="Pudim leite" />
                </Link>
                <p>Pudim de Leite</p>
            </div>
        </section>

       
        </>
    )
}

export default Card;