import { ViewsApi } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import ArrowIcon from './ArrowIcon';
interface CardViewProps {
  view: ViewsApi;
  index: number;
}
export default function CardView({ view, index }: CardViewProps) {
  const { contenido, encabezado, fecha, image } = view;
  const fechaView = new Date(fecha).toLocaleString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <article className='views__view'>
      {index === 0 && (
        <p className='views__todos'>
          <span className='views__noticias'>ÚLTIMAS NOTICIAS</span>
          <Link className='views__link--todos' href={'/'}>
            <span>VER TODOS</span>
            <ArrowIcon />
          </Link>
        </p>
      )}
      <div
        className='views__article'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='change__box' />
        <div className='change__background' />
        <div className='views__container'>
          <span className='views__span'>{fechaView}</span>
          <h2 className='views__h2'>{encabezado}</h2>
          <p className='views__p'>{contenido}</p>
        </div>
      </div>
    </article>
  );
}
