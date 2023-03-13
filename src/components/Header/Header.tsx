import React from 'react';
import JuegaGratis from './JuegaGratis';
import LinksRenderItem from './LinksRenderItem';
import Logger from './Logger';

export default function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__ul'>
          <LinksRenderItem />
        </ul>
      </nav>
      <div className='header__login'>
        <Logger />
        <JuegaGratis />
      </div>
    </header>
  );
}
