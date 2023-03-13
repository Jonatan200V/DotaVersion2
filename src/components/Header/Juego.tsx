import { motion, AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';
import Link from 'next/link';
import {
  JuegoLink,
  colorGrayLinksHeader,
  optionsHoverJuego,
} from './optionsLinks';
import DropIcon from './DropIcon';
import useBoolean from '@/hooks/useBoolean';
import { variantsGames } from '@/animates/Header/variants';

export default function Juego() {
  const { close, open, revert, view } = useBoolean();
  return (
    <li
      className={`header__li header__li--juego ${
        view && 'header__li--juego--hover'
      } `}
      onMouseEnter={open}
      onClick={revert}
      onMouseOut={close}
      onMouseMove={open}
    >
      <div className='header__juego'>
        {JuegoLink.name}
        <DropIcon
          heigth='14'
          width='14'
          color={colorGrayLinksHeader}
          fill={colorGrayLinksHeader}
        />
      </div>
      <AnimatePresence>
        {view && (
          <motion.ul
            className='header__parches'
            animate={view ? 'show' : 'close'}
            exit='close'
            variants={variantsGames}
          >
            {optionsHoverJuego.map(({ id, linkTo, name }, index) => (
              <Fragment key={id}>
                <motion.li
                  initial={{
                    opacity: 0,
                    translateX: index % 2 === 0 ? -25 : 25,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    translateX: index % 2 === 0 ? -25 : 25,
                  }}
                  transition={{
                    delay: 0.05 * index,
                    duration: 1,
                    ease: 'anticipate',
                  }}
                  onClick={(evt) => evt.stopPropagation()}
                >
                  <Link href={linkTo} className='header__parches--link'>
                    {name}
                  </Link>
                </motion.li>
              </Fragment>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
