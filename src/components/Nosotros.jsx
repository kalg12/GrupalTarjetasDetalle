import React from 'react';
import {BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';

export const Nosotros = () => {
    return (
        <div>
    
          <h2>¿Quiénes somos?</h2>
          <hr></hr>
          <div className='container__nosotros'>
          <img src = 'https://www.inquirer.com/resizer/cnMf9HBI6aWauqMBHvyBQ3lnQyc=/760x507/smart/filters:format(webp)/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/YOBC43EICVDCDA4IFY6SSCYIII.jpg' className='nosotros__img'></img>
          <article>
              <p className='container_article'>
              El Universo cinematográfico de Marvel (MCU; en inglés, Marvel Cinematic Universe) es una franquicia de medios y un universo compartido, centrada en una serie de películas de superhéroes producidas independientemente por Marvel Studios. Las películas están basadas en personajes que aparecen en los cómics estadounidenses publicados por Marvel Comics. La franquicia también incluye series de televisión, cortometrajes, series digitales y literatura. El universo compartido, al igual que el Universo Marvel original en los cómics, se estableció mediante cruce de elementos, escenarios, elenco y personajes comunes de la trama.
              </p>
          </article>
          </div>
          
        
        </div>
    )
}
