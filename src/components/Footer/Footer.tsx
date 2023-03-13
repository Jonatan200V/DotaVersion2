import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__images'>
          <Image
            src='https://res.cloudinary.com/di0jcyqyv/image/upload/v1678691682/dota/home/imhx9ktu0dl5xy75asuv.png'
            alt='Logo-Valve'
            width='140'
            height='30'
          />
          <Image
            src='https://res.cloudinary.com/di0jcyqyv/image/upload/v1678691687/dota/home/lez86weq5r792j8skhpf.png'
            alt='Logo-Valve'
            width='150'
            height='30'
          />
        </div>
        <p className='footer__p'>
          Dota y el logotipo de Dota son marcas comerciales y/o marcas
          comerciales registradas de Valve Corporation. 2022 Valve Corporation,
          todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
