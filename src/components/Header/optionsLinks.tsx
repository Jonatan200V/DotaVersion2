import { linkImages } from '@/utils/services';
import { LinksHeader, LinksJuego, Logo } from './types';
import { LinksName } from './enums';

export const colorGrayLinksHeader: string = '#dadddf';

export const JuegoLink: LinksHeader = {
  id: 1,
  linkTo: '',
  name: LinksName['Juego'],
};
export const logo: Logo = {
  linkTo: '',
  name: LinksName['Logo-Dota-2'],
  src: `${linkImages}/v1678562215/dota/logo/fyziurmqrwfjlgr3251o.png`,
};

export const linksMapHeader: LinksHeader[] = [
  {
    id: 2,
    linkTo: '/heroes',
    name: LinksName['Heroes'],
  },
  {
    id: 3,
    linkTo: '/noticias',
    name: LinksName['Noticias'],
  },
  {
    id: 4,
    linkTo: '/e-sports',
    name: LinksName['E-Sports'],
  },
];
export const optionsHoverJuego: LinksJuego[] = [
  {
    id: 5,
    linkTo: '/parches',
    name: 'Parches',
  },
  {
    id: 6,
    linkTo: '/parches',
    name: 'Actualizaciones del Juego',
  },
  {
    id: 7,
    linkTo: '/versiones',
    name: 'Actualizaciones Anteriores',
  },
];
