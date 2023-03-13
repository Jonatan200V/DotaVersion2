import React from 'react';
import TextSection from '../Generic/TextSection';
import { LinksName } from '../Header/enums';

export default function Elegir() {
  const textTop = '¿A QUIÉN VAS A';
  const textBottom = 'ELEGIR?';
  const textParagraph = `Estrategas de la magia, feroces bestias, astutos pícaros... El conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza increíbles hechizos y devastadoras habilidades definitivas en tu camino hacia la victoria.`;
  const nameLink = 'Ver todos los heroes';
  const linkSelectHeader = '/heroes';
  return (
    <div className='elegir'>
      <div className='elegir__background'></div>
      <div className='elegir__background--top' />
      <TextSection
        namePageHeader={LinksName['Heroes']}
        linkTo={linkSelectHeader}
        nameLink={nameLink}
        textBottom={textBottom}
        textParagraph={textParagraph}
        textTop={textTop}
      />
    </div>
  );
}
