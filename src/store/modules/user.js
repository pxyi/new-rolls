const user = window.localStorage.getItem('userInfo');
const token = window.localStorage.getItem('token');

const state = {
  userInfo: user ? JSON.parse(user) : null,
  token
};

const mutations = {
  set_token(state, payload) {
    state.token = payload;
    window.localStorage.setItem('token', payload);
  },
  set_user_info(state, payload) {
    state.userInfo = payload;
    window.localStorage.setItem('userInfo', JSON.stringify(payload));
  },
  login_out(state) {
    state.token = null;
    state.userInfo = null;
    window.localStorage.removeItem('userInfo');
    window.localStorage.removeItem('token');
  }
}

export default {
    namespaced: true,
    state,
    mutations,
};