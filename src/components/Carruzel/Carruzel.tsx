import React from 'react';
import { imagenes } from './heroesMapTest';
import Image from 'next/image';

export default function Carruzel() {
  return (
    <div className='carruzel'>
      <div className='carruzel__div'>
        {imagenes.slice(0, 20).map((url) => (
          <img src={url} alt='Heroe' width='265' height='127' />
        ))}
      </div>
      <div className='carruzel__div--2'>
        {imagenes.slice(20, 40).map((url) => (
          <img src={url} alt='Heroe' width='265' height='127' />
        ))}
      </div>
      <div className='carruzel__div'>
        {imagenes.slice(40, 60).map((url) => (
          <img src={url} alt='Heroe' width='265' height='127' />
        ))}
      </div>
      <div className='carruzel__div--2'>
        {imagenes.slice(30, 50).map((url) => (
          <img src={url} alt='Heroe' width='265' height='127' />
        ))}
      </div>
      <div className='carruzel__div'>
        {imagenes.slice(10, 30).map((url) => (
          <img src={url} alt='Heroe' width='265' height='127' />
        ))}
      </div>
    </div>
  );
}
