import create from 'zustand'

/**
 * Cookie functions
 */
const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const checkCookie = () => {
  let loggedIn = getCookie("is-logged-in");
  if (loggedIn !== "") return true;
  return false;
}

const useCitiesStore = create((set) => ({
  activeRoute: null,
  isLoggedIn: checkCookie("is-logged-in"),
  login: () => {
    console.log("hi")
    setCookie("is-logged-in", "true", 1 / 24);
    set(() => ({
      isLoggedIn: true
    }))
  },
  logout: () => {
    set(() => ({
      isLoggedIn: false
    }))
    setCookie("is-logged-in", "", -1)
  },
  setActiveRoute: (activeRoute) => {
    set(() => ({
      activeRoute
    }))
  },
}))

export default useCitiesStore;
