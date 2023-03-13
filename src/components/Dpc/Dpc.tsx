import React from 'react';
import TextSection from '../Generic/TextSection';
import { LinksName } from '../Header/enums';
import ImagesViewsDPC from './ImagesViewsDPC';
export default function Dpc() {
  const textTop = 'EL';
  const textBottom = 'CIRCUITO PROFESIONAL DE DOTA';
  const textParagraph = `Cuando no estés subiendo en la clasificación, podrás aprender de los mejores. El circuito profesional de Dota presenta una competición de altísimo nivel que se retransmite regularmente en el cliente del juego, en Twitch y en Steam.tv. Esta competición profesional de Dota 2, que culmina cada temporada en The International —el mayor campeonato de deportes electrónicos del mundo—, es un evento que no deberías perderte.`;
  const nameLink = 'Ver todos los heroes';
  const linkSelectHeader = '/heroes';
  return (
    <div className='dpc'>
      <ImagesViewsDPC />
      <div className='dpc__background'></div>
      <div className='dpc__background--top' />
      <TextSection
        logo={true}
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
