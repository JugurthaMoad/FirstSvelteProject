import { writable } from "svelte/store";

const createStore = () => {
  const { set, subscribe, update } = writable([]);
  return {
    subscribe,
    rest: () => {
      set([]);
    },
    addDev: (dev) => {
      update((current) => [...current, dev]);
    },
    deleteDev: (name) =>
      update((current) => current.filter((c) => c.f_name !== name)),
  };
};

export const developers = createStore();
