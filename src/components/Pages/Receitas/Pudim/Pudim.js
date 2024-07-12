import React from 'react'
import NavBar from '../../../NavBar/NavBar'
import { assets } from '../../../../assets/assets'
import Footer from '../../../Footer/Footer'

const Pudim = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <img src={assets.pudim} alt='Pudim de leite' />
          
        <div className='txt-medida'>
          <h1>Ingredientes</h1>
            <p>4️⃣ unidades de ovo</p>
            <p>2️⃣ latas de leite condensado</p>
            <p>2️⃣ copos de leite</p>
            <p>2️⃣ colheres (sopa) de açúcar</p>
      
            <h1>Como fazer</h1>
            <p>🟧 1. Caramelize uma forma de pudim com o açúcar.</p>
            <p>🟧 2. Bata os demais ingredientes no liquidificador.</p>
            <p>🟧 3. Coloque na forma de buraco.</p>
            <p>🟧 4. Asse o pudim de leite condensado em banho-maria a 210ºC.</p>
            <p>🟧 5. O ponto é quando enfiar um palito e este sair totalmente seco.</p>
            <p>🟧 6. Desenforme somente depois de levar a geladeira com o pudim totalmente gelado.</p>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default Pudim