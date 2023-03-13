import React from 'react';
import JuegaGratis from '../Header/JuegaGratis';

export default function Title() {
  return (
    <div className='home__div'>
      <p className='home__p'>
        «UNA OBRA MAESTRA DE LOS MULTIJUGADORES MODERNOS»
      </p>
      <p className='home__des'>—DESTRUCTOID</p>
      <div className='home__background' />
      <JuegaGratis height='40' width='40' />
    </div>
  );
}
