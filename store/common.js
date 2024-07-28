import {
  CREATIVE_ENDPOINT,
  BRAND_ENDPOINT,
  FETCH_COUNTRY_ENDPOINT,
  USERS_SIGNUP,
  FETCH_DEFAULT_LINK_ENDPOINT,
  CONTACT_US_ENDPOINT,
  TUTORIALS_ENDPOINT,
} from "~/utils/store/endpoints";
import {
  FETCH_CREATIVES,
  FETCH_BRANDS,
  FETCH_CREATIVE_DETAILS,
  FETCH_COUNTRY,
  SIGNUP,
  FETCH_DEFAULT_LINKS,
  CONTACT_US,
  FETCH_TUTORIALS,
} from "../utils/store/action.names";
import { SET_BRANDS } from "../utils/store/mutation.names";
import { GET_BRANDS, GET_AUTH_HEADER } from "../utils/store/getter.names";

import { NS_USER } from "~/utils/store/namespace.names";
import { namespaced, buildParams } from "../utils/utils";

export const state = () => ({
  brands: [],
});

export const getters = {
  [GET_BRANDS](state) {
    return state.brands;
  },
};

export const actions = {
  async [FETCH_CREATIVES]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${CREATIVE_ENDPOINT}/${buildParams(payload)}`, {
          headers: {
            ...authHeader,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FETCH_BRANDS]({ commit, dispatch }, payload = {}) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${BRAND_ENDPOINT}/`)
        .then(({ data }) => {
          commit(SET_BRANDS, data.results);
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FETCH_CREATIVE_DETAILS]({ commit, dispatch }, payload = {}) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${CREATIVE_ENDPOINT}/get_creative/${buildParams(payload)}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FETCH_COUNTRY]({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(FETCH_COUNTRY_ENDPOINT)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_SIGNUP}`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FETCH_DEFAULT_LINKS]({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${FETCH_DEFAULT_LINK_ENDPOINT}/`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [CONTACT_US]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${CONTACT_US_ENDPOINT}`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FETCH_TUTORIALS]({ rootGetters }) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${TUTORIALS_ENDPOINT}`, {
          headers: {
            ...authHeader,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
};

export const mutations = {
  [SET_BRANDS](state, data) {
    state.brands = data;
  },
};
