import React from 'react';

import './assets/styles/blackhole.css';
import Video from './assets/videos/buraconegro.mp4';


const BlackHole = () => {

  return (
    <div className='conteudoBlackHole'>


        <div>
            <h2>A impressionante força desconhecida</h2>
            <h3>Buracos negros</h3>
        </div>

        <div className='videoblackhole'>
            <video className="video" autoPlay loop muted>
          <source src={Video} type="video/mp4"/>

            </video>
        </div>



    </div>



  );
}

export default BlackHole;