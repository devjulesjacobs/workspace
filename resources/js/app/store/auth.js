import axios from "axios";

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null,
    },

    getters: {
        authenticated(state) {
            return state.authenticated;
        },

        user(state) {
            return state.user;
        }
    },

    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },

        SET_USER(state, value) {
            state.user = value;
        },
    },

    actions: {
        async login({ dispatch }, credentials) {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/login", credentials);

            return dispatch("setValuesUser");
        },

        async logout({ dispatch }) {
            await axios.post("/logout");

            return dispatch("setValuesUser");
        },

        setValuesUser({ commit }) {
            return axios
                .get("/api/user")
                .then((response) => {
                    if(response.data.type === "app") {
                        commit("SET_AUTHENTICATED", true);
                        commit("SET_USER", response.data);
                    } else {
                        commit("SET_AUTHENTICATED", false);
                        commit("SET_USER", null);
                    }
                })
                .catch(() => {
                    commit("SET_AUTHENTICATED", false);
                    commit("SET_USER", null);
                });
        },

        setValues({ commit }) {
            return axios
                .get("/api/user")
                    .then((response) => {
                        commit("SET_AUTHENTICATED", true);
                        commit("SET_USER", response.data);
                    })
                    .catch(() => {
                        commit("SET_AUTHENTICATED", false);
                        commit("SET_USER", null);
                    });
        },
    },
};
