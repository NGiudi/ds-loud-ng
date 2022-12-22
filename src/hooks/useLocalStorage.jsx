import { useState } from "react";

export const useLocalStorage = (_name) => {
  const [name] = useState(_name);

  const getLocalStorage = () => {
    let storaged;

    try {
      storaged = window.localStorage.getItem(name);
    } catch {
      console.error("Habilitar el localstorage para una mejor experiencia.");
    }

    return storaged;
  };

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(name, value);
    } catch {
      console.error("Habilitar el localstorage para una mejor experiencia.");
    }
  };

  const removeLocalStorage = () => {
    try {
      window.localStorage.removeItem(name);
    } catch {
      console.error("Habilitar el localstorage para una mejor experiencia.");
    }
  };

  return {
    get: getLocalStorage,
    set: setLocalStorage,
    remove: removeLocalStorage,
  };
};
