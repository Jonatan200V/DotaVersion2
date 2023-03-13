import { LinksName } from './enums';

export interface LinksHeader {
  id: number;
  name: LinksName;
  linkTo: string;
}
type Logo = Omit<LinksHeader, 'id'> & {
  src: string;
};
type LinksJuego = Omit<LinksHeader, 'name'> & {
  name: string;
};
