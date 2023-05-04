const store = new Vuex.Store({
    state: {
      token: localStorage.getItem('token') || '',
      // ...
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token); // сохраняем токен в localStorage
      },
      // ...
    },
    // ...
  });