interface RootObject {
  id: number;
  nombre: string;
  entrada: string;
  atributo: string;
  tipo: string;
  complejidad: string;
  hp_mp: Hpmp;
  descripcion: string;
  image_principa: string;
  image_secundaria: string;
  atributos: Atributos;
  subida_nivel: Subidanivel;
  data: Data;
  habilidades: Habilidades;
}

interface Habilidades {
  arbol_de_talento: Arboldetalento;
  habilidad: Habilidad[];
}

interface Habilidad {
  nombre: string;
  image: string;
  descripcion: string;
}

interface Arboldetalento {
  nivel_10: Nivel10;
  nivel_15: Nivel10;
  nivel_20: Nivel10;
  nivel_25: Nivel10;
}

interface Nivel10 {
  left: string;
  right: string;
}

interface Data {
  ataque: Ataque;
  defensa: Defensa;
  movilidad: Movilidad;
  roles: Roles;
}

interface Roles {
  carry?: number;
  apoyo?: number;
  nuker?: number;
  incapacitador?: number;
  jungla?: number;
  resistente?: number;
  evasivo?: number;
  presionador?: number;
  iniciador?: number;
}

interface Movilidad {
  velocidad: string;
  tiempo: number;
  vision: string;
}

interface Defensa {
  escudo: number;
  circulo: string;
}

interface Ataque {
  respawn: string;
  daño: string;
  distancia: number;
}

interface Subidanivel {
  suma_fuerza: string;
  suma_agilidad: string;
  suma_inteligencia: string;
}

interface Atributos {
  fuerza: number;
  agilidad: number;
  inteligencia: number;
}

interface Hpmp {
  hp: number;
  mp: number;
}
