import {
  EVEST_ENDPOINT,
  EVEST_ENDPOINT2,
  EXNESS_ENDPOINT,
  FLAGEDU_ENDPOINT,
  AVA_ENDPOINT,
  MULTIBANK_ENDPOINT,
  CAPITAL_ENDPOINT,
  EVETRADE_ENDPOINT,
  SPECIAL_SIGNUP_ENDPOINT,
  SPECIAL_SIGNUP_ENDPOINT2,
} from "~/utils/store/endpoints";
import {
  EVEST_SIGNUP,
  EVEST_SIGNUP2,
  EXNESS_SIGNUP,
  FLAGEDU_SIGNUP,
  AVA_SIGNUP,
  MULTIBANK_SIGNUP,
  CAPITAL_SIGNUP,
  EVETRADE_SIGNUP,
  SPECIAL_SIGNUP,
  SPECIAL_SIGNUP2,
} from "../utils/store/action.names";

import { namespaced, buildParams } from "../utils/utils";

export const actions = {
  async [EVEST_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${EVEST_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },

  async [EVEST_SIGNUP2]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${EVEST_ENDPOINT2}/signup/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [EXNESS_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${EXNESS_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FLAGEDU_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${FLAGEDU_ENDPOINT}`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [AVA_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${AVA_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [MULTIBANK_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${MULTIBANK_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [CAPITAL_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${CAPITAL_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [EVETRADE_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${EVETRADE_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [SPECIAL_SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${SPECIAL_SIGNUP_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [SPECIAL_SIGNUP2]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${SPECIAL_SIGNUP_ENDPOINT2}/signup/`, payload)
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
