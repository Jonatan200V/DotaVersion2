'use client';
import { useEffect } from 'react';
import { colorGrayLinksHeader, linksMapHeader, logo } from './optionsLinks';
import Link from 'next/link';
import { LinksName } from './enums';
import { motion } from 'framer-motion';
import Juego from './Juego';
import Image from 'next/image';
import { useStoreContext } from '@/store/Store';

export default function LinksRenderItem() {
  const { selectPage, changePage } = useStoreContext();

  function changeRouteLink(name: LinksName) {
    changePage(name);
  }

  return (
    <>
      <Link href='/' onClick={() => changeRouteLink(logo.name)}>
        <Image
          className='header__logo'
          src={logo.src}
          alt={logo.name}
          width='50'
          height='50'
        />
      </Link>
      <Juego />
      {linksMapHeader.map(({ id, linkTo, name }) => (
        <Link href={linkTo}>
          <motion.li
            animate={{
              color: `${name === selectPage ? '#fff' : colorGrayLinksHeader}`,
            }}
            key={id}
            className='header__li'
            onClick={() => changeRouteLink(name)}
          >
            {name}
            {name === selectPage && (
              <motion.div className='underline' layoutId='underline' />
            )}
          </motion.li>
        </Link>
      ))}
    </>
  );
}
