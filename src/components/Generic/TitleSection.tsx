'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LogoDotaSVG from '../Dpc/LogoDotaSVG';
interface TitleUneteProps {
  textTop: string;
  textBottom: string;
  logo?: boolean;
}
export default function TitlesSection({
  textTop,
  textBottom,
  logo,
}: TitleUneteProps) {
  return (
    <motion.h2
      className='unete__h2'
      initial={{
        opacity: 0,
        translateY: 150,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.2,
      }}
      viewport={{ once: true }}
    >
      {logo && <LogoDotaSVG />}
      <span className='unete__span'>{textTop}</span>
      <p className='unete__p'>{textBottom}</p>
    </motion.h2>
  );
}
