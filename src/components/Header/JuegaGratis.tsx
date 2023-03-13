import React from 'react';
import LogoSteam from './LogoSteam';
import Link from 'next/link';
interface JuegaGratisProps {
  height?: string;
  width?: string;
}
export default function JuegaGratis({
  height = '29',
  width = '29',
}: JuegaGratisProps) {
  const gameDotaSteam = 'https://store.steampowered.com/app/570/Dota_2/';
  return (
    <Link href={gameDotaSteam}>
      <div className='header__game' data-iswidth={width !== '29'}>
        <LogoSteam height={height} width={width} />
        <div>
          <p data-p={width !== '29'}>Juega Gratis</p>
          {height !== '29' && (
            <span className='home__descargar'>Descargar en Steam</span>
          )}
        </div>
      </div>
    </Link>
  );
}
