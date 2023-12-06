import React from 'react';
import terra from './assets/imgs/terradeskgrande.jpg';
// import seta from './assets/imgs/teste2.svg';
import './assets/styles/home.css';


const Home = () => {
  return (

      <div className="Content">

        <div className='img-terra'><img src={terra} alt="terra"></img></div>

        <div class="content-textos">
          <div className='titulos'>
            <h2 className='titulo-inicio'>
              O Que É O Universo?
            </h2>
            <p className='p-inicio'>
            O universo é uma vastidão cósmica intrigante repleta de galáxias, estrelas e enigmas. Sua escala monumental desafia a compreensão humana, enquanto a busca por vida em exoplanetas e sinais extraterrestres amplia nosso entendimento. A exploração espacial constante revela as maravilhas do cosmos. Embarque nessa jornada de descobertas cósmicas explorando o universo através dos posts apaixonados do nosso blog amador.
            </p>
          </div>

          <div className='botao'>

            <div className='chama-posts'>
              <p>Explore os posts</p>
            </div>

            {/* <div className='img-seta'><img src={seta} alt="seta"></img></div> */}

          </div>
        </div>
      </div>
      

  );
};

export default Home;
