import { StateCreator } from 'zustand';
import { StateChangePage } from '../Store';
import { LinksName } from '@/components/Header/enums';

export const changesPages: StateCreator<StateChangePage> = (set) => ({
  selectPage: LinksName['Logo-Dota-2'],
  changePage: (page) => {
    set((state) => ({
      ...state,
      selectPage: page,
    }));
  },
});
