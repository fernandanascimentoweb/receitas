import React from 'react'
import '../receitas.css';
import NavBar from '../../../NavBar/NavBar';
import { assets } from '../../../../assets/assets';
import Footer from '../../../Footer/Footer';


const Fricasse = () => {
  return (
    <>
    <NavBar />
    <div className='container'>
        <img src={assets.fricasse} alt='fricasse de frango' />

        <div className='txt-medida'>
          <h1>Ingredientes</h1>
          <p>6️⃣0️⃣0️⃣ gr de peito de frango cozido e desfiado</p>
          <p>2️⃣ colheres (sopa) de óleo de soja</p>
          <p>Sal a gosto, pimenta do reino tambem</p>
          <p>1️⃣ unidade de cebola picada</p>
          <p>2️⃣ dentes de alho</p>
          <p>2️⃣ colheres (sopa) de molho de tomate</p>
          <p>1️⃣ lata de milho em conserva</p>
          <p>1️⃣ lata de creme de leite sem soro</p>
          <p>1️⃣0️⃣0️⃣ gr de batata palha</p>
          <p>2️⃣0️⃣0️⃣ gr de mussarela fatiada</p>
      
          <h1>Como fazer</h1>

          <p>🟧 1. Bata no liquidificador o milho e o creme de leite. Reserve.</p>
          <p>🟧 2. Em uma panela com óleo refogue o alho e a cebola.</p>
          <p>🟧 3. Tempere com sal, pimenta e molho de tomate.</p>
          <p>🟧 4. Misture o creme e o frango e acerte o sal e a pimenta.</p>
          <p>🟧 5. Coloque a mistura em uma assadeira, cubra com mussarela e espalhe a batata palha por cima.</p>
          <p>🟧 6. Leve ao forno por 20 - 30 minutos à 180ºC.</p>

        </div>


    </div>

    <Footer />
    </>
  )
}

export default Fricasse