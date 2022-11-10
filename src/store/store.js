import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      isDarkMode: false,
    };
  },
  mutations: {
    setDarkMode(state, bool) {
      state.isDarkMode = bool;
    },
  },
});
