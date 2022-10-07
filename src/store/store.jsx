import create from 'zustand'
import sortByProp from '../functions/sortByProp';

const useCitiesStore = create((set) => ({
  activeRoute: null,
  setActiveRoute: (activeRoute) => {
    set(() => ({
      activeRoute
    }))
  },
}))

export default useCitiesStore;
