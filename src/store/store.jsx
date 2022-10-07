import create from 'zustand'

const useCitiesStore = create((set) => ({
  activeRoute: null,
  setActiveRoute: (activeRoute) => {
    set(() => ({
      activeRoute
    }))
  },
}))

export default useCitiesStore;
