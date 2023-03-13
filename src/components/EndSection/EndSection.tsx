import Link from 'next/link';
import React from 'react';

export default function EndSection() {
  return (
    <div className='end'>
      <div className='end__div'>
        <div className='end__container'>
          <h2 className='end__h2'>
            <span className='end__span'>ÚNETE A LA</span>
            <span className='end__span'>BATALLA</span>
          </h2>
          <div className='end__back' />
          <Link href={''} className='end__link'>
            Juega Gratis Ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
