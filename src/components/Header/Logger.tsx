import Link from 'next/link';
import React from 'react';
import Languaje from './Languaje';
import DropIcon from './DropIcon';

export default function Logger() {
  const loggerSteam =
    'https://steamcommunity.com/oauth/loginform/?goto=%2Foauth%2Flogin%3Fclient_id%3D9B2C1229%26response_type%3Dtoken%26state%3Dhome';
  return (
    <div className='header__container'>
      <Link className='header__sesion' href={loggerSteam}>
        Iniciar Sesion
      </Link>
      <div className='header__idioma'>
        <Languaje />
        <span>Elige un Idioma</span>
        <DropIcon />
      </div>
    </div>
  );
}
