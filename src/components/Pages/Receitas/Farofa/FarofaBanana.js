import React from 'react'
import '../receitas.css';
import { assets } from '../../../../assets/assets';
import NavBar from '../../../NavBar/NavBar';
import Footer from '../../../Footer/Footer';


function FarofaBanana(){

  return (
    <>
    <NavBar />
      <div className='container'>
        <img src={assets.farofa} alt='farofa banana' />

        <div className='txt-medida'>
            <h1>Ingredientes</h1>
            <p>3️⃣ unidades de banana prata</p>
            <p>1️⃣ colher (sopa) de manteiga</p>
            <p>1️⃣ colher (sopa) de azeite</p>
            <p>1/2 unidade de cebola</p>
            <p>2️⃣ colheres (sopa) de manteiga</p>
            <p>1️⃣ colher (sopa) de sal</p>
            
            <h1>Como fazer</h1>
            <p>🟧 1. Descasque as bananas e corte-as em pedaços pequenos.</p>
            <p>🟧 2. Leve a manteiga e o azeite ao fogo, coloque a cebola e deixe-a dourar.</p>
            <p>🟧 3. Junte os pedacinhos de banana e mexa ligeiramente com um garfo, até que fiquem corado</p>
            <p>🟧 4. Tempere com salsa e sal a gosto e, vá adicionando a farinha, aos poucos.</p>
            <p>🟧 5. Sirva em seguida.</p>
        </div>
       </div>
     
      <Footer />
    </>
  )
}

export default FarofaBanana;