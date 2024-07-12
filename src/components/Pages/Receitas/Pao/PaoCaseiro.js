import React from 'react'
import '../receitas.css';
import NavBar from '../../../NavBar/NavBar';
import { assets } from '../../../../assets/assets';
import Footer from '../../../Footer/Footer';

const PaoCaseiro = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <img src={assets.pao} alt='Pao caseiro' />

        <div className='txt-medida'>
            <h1>Ingredientes</h1>
            <p>5️⃣0️⃣0️⃣ ml de água</p>
            <p>1️⃣ kg de farinha de trigo</p>
            <p>1️⃣ unidade de ovo</p>
            <p>2️⃣0️⃣ gr de fermento biológico fresco</p>
            <p>2️⃣ colheres (sopa) de manteiga</p>
            <p>2️⃣ colheres (sopa) de açúcar</p>
            <p>1️⃣ colher (sopa) de sal</p>
        
            <h1>Como fazer</h1>
            <p>🟧 1. Dissolva o fermento no açúcar, acrescente metade da água morna, mexa bem e incorpore o sal, a manteiga e o ovo.</p>
            <p>🟧 2. Despeje a farinha peneirada e o restante da água aos poucos, regulando para a massa chegar ao ponto de desgrudar das mãos.</p>
            <p>🟧 3. Coloque toda a água somente se necessário.</p>
            <p>🟧 4. Esta massa fica meio mole.</p>
            <p>🟧 5. Trabalhe bem a massa por aproximadamente 20 minutos.</p>
            <p>🟧 6. Coloque para descansar em local protegido da luz e do vento até dobrar de volume.</p>
            <p>🟧 7. Fure a massa para abaixar e modele os pães.</p>
            <p>🟧 8. Acomode-os em uma assadeira untada e deixe dobrar de volume em local protegido da luz e do vento.</p>
            <p>🟧 9. Asse em forno pré aquecido a 180 graus até dourar.</p>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default PaoCaseiro