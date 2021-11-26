import axios from "axios";

export default {
    namespaced: true,

    state: {
        authenticated: false,
        admin: null,
    },

    getters: {
        authenticated(state) {
            return state.authenticated;
        },

        admin(state) {
            return state.admin;
        }
    },

    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },

        SET_USER(state, value) {
            state.admin = value;
        },
    },

    actions: {
        async login({ dispatch }, credentials) {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/api/cms/login", credentials);

            return dispatch("setValues");
        },

        async logout({ dispatch }) {
            await axios.post("/logout");

            return dispatch("setValues");
        },

        setValues({ commit }) {
            return axios
                .get("/api/user")
                .then((response) => {
                    if(response.data.type === "admin") {
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
    },
};
