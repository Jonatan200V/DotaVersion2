'use client';
import React from 'react';
import { ImagesMap } from './imagesMap';
import { motion } from 'framer-motion';
export default function ImagesViewsDPC() {
  return (
    <>
      {ImagesMap.map(({ name, url, id }) => (
        <motion.img
          className='dpc__img'
          initial={{
            opacity: 0,
            translateY: 200,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          viewport={{ once: true }}
          alt={name}
          src={url}
          key={id}
        />
      ))}
    </>
  );
}
