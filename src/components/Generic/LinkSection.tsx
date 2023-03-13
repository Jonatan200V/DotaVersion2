'use client';
import Link from 'next/link';
import React from 'react';
import { LinksName } from '../Header/enums';
import { useStoreContext } from '@/store/Store';
interface LinksSectionProps {
  title: string;
  linkTo: string;
  namePageHeader: LinksName;
}
export default function LinksSection({
  title,
  linkTo,
  namePageHeader,
}: LinksSectionProps) {
  const { changePage } = useStoreContext();
  function changeRouteLink(name: LinksName) {
    changePage(name);
  }
  return (
    <Link href={linkTo} onClick={() => changeRouteLink(namePageHeader)}>
      <div className='unete__novedades'>
        <span className='unete__novedades--span'>{title}</span>
      </div>
    </Link>
  );
}
