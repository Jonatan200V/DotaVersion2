import React from 'react';
import TextSection from '../Generic/TextSection';
import { LinksName } from '../Header/enums';

export default function Unete() {
  const textParagraph = `
  Cada día, millones de jugadores de todo el mundo entran en batalla
  como uno de los más de cien héroes de Dota en un enfrentamiento por
  equipos de 5 contra 5. Dota es el juego de estrategia en tiempo real
  de acción multijugador más profundo jamás creado y siempre hay una
  nueva estrategia o táctica que descubrir. Jugar a Dota es gratis y
  siempre lo será. Comienza ya a defender tu Ancestro.`;
  const nameLink = 'Ver las novedades';
  const textTop = 'ÚNETE A LA';
  const textBottom = 'BATALLA DE LOS ANCESTROS';
  const linkSelectHeader = '/noticias';
  return (
    <div className='unete'>
      <div className='unete__background' />
      <TextSection
        linkTo={linkSelectHeader}
        textParagraph={textParagraph}
        nameLink={nameLink}
        textBottom={textBottom}
        textTop={textTop}
        namePageHeader={LinksName['Noticias']}
      />
    </div>
  );
}
