// import { API } from '@/utils/services';
import { create } from 'zustand';
import { changesPages } from './functionsReducers/changePages';

export interface StateChangePage {
  selectPage: string;
  changePage: (page: string) => void;
}
// heroes: Heroe[];
// getHeroes: () => Promise<void>;

// heroes: [],
// getHeroes: async () => {
//   try {
//     const res = await fetch(`${API}/api/dota`);
//     const data = (await res.json()) as Heroe[];
//     set((state) => ({
//       ...state,
//       heroes: data,
//     }));
//   } catch (error) {}
// },

export const useStoreContext = create<StateChangePage>((...set) => ({
  ...changesPages(...set),
}));
