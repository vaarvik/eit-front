import create from 'zustand'
import sortByProp from '../functions/sortByProp';
const citiesOriginals = [
  {
    id: 1,
    title: "Oslo",
    value: "oslo"
  },
  {
    id: 2,
    title: "Stavanger",
    value: "stavanger"
  },
  {
    id: 3,
    title: "Trondheim",
    value: "trondheim"
  },
  {
    id: 4,
    title: "Bergen",
    value: "bergen"
  },
]

const useCitiesStore = create((set) => ({
  cities: setTimeout(() => sortByProp(citiesOriginals, "title"), 1000),
  activeRoute: null,
  setActiveRoute: (activeRoute) => {
    set(() => ({
      activeRoute
    }))
  },
  updateFilter: (searchText) => {
    const searchTextLC = searchText.toLowerCase();
    set(() => ({
      cities: citiesOriginals.filter(component => component.title.toLowerCase().includes(searchTextLC) || component.preamble.toLowerCase().includes(searchTextLC))
    }))
  },
  sortBy: (sortType) => {
    set((state) => {
      switch (sortType) {
        default:
          sortByProp(citiesOriginals, "title");
          const citiesSorted = [...sortByProp(state.cities, "title")]; // must create a new array so react understands it's an updated version and not the same array
          return { cities: citiesSorted };
      }
    })
  }
}))

export default useCitiesStore;
