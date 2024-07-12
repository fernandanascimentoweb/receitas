import React from 'react';
import '../receitas.css';
import NavBar from '../../../NavBar/NavBar'
import { assets } from '../../../../assets/assets'
import Footer from '../../../Footer/Footer';


const Mousse = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <img src={assets.mousse} alt='Mousse maracuja' />

        <div className='txt-medida'>
          <h1>Ingredientes</h1>
          <p>1️⃣ lata de creme de leite sem soro</p>
          <p>1️⃣ lata de leite condensado</p>
          <p>1️⃣ lata de suco de maracujá concentrado</p>
            
          <h1>Como fazer</h1>
          <p>🟧 1. Coloque no liqüidificador todos os ingredientes.</p>
          <p>🟧 2. Bata na velocidade máxima, de 5 a 10 minutos.</p>
          <p>🟧 3. Distribuir em taças ou em um único recipiente.</p>
          <p>🟧 4. Levar à geladeira por no mínimo 3 horas.</p>
        </div>

    </div>

    <Footer />
    </>
  )
}

export default Mousse