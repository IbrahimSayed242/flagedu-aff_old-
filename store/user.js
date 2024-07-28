import {
  USERS_ENDPOINT,
  PAYMENT_DETAIL_ENDPOINT,
  WITHDRAW_REQUEST_ENDPOINT,
  DOCUMENT_UPLOAD_ENDPOINT,
  COMISSION_RULE_ENDPOINT,
  COMISSION_RULE_VALUE_ENDPOINT,
  COMISSION_RULE_VALUE_EXTRA_ENDPOINT,
} from "~/utils/store/endpoints";
import {
  SIGNUP,
  SIGNIN,
  GET_TOKEN_FROM_LOCAL_STORE,
  PROFILE,
  FETCH_PAYMENT_DETAIL,
  UPDATE_PAYMENT_DETAIL,
  ADD_PAYMENT_DETAIL,
  FETCH_WITHDRAWS,
  ADD_WITHDRAW_REQUEST,
  CHANGE_PASSWORD,
  CHANGE_PROFILE,
  SEND_VERIFICATION_CODE,
  VERIFICATION_CONFIRM,
  GET_SIGNUP_DATA_FROM_LOCAL_STORAGE,
  FORGET_PASSWORD,
  VERIFY_CODE_FOR_FORGET_PASSWORD,
  SUBMIT_QUIZ,
  FETCH_QUIZ,
  FETCH_DOCUMENT,
  UPDATE_DOCUMENT,
  UPLOAD_DOCUMENT,
  FETCH_COMISSION_RULES,
  ADD_COMISSION_RULE,
  UPDATE_COMISSION_RULE,
  FETCH_COMISSION_DETAIL,
  FETCH_COMISSION_VALUES,
  ADD_COMISSION_VALUE,
  UPDATE_COMISSION_VALUE,
  DELETE_COMISSION_VALUE,
  DELETE_COMISSION_RULE,
  ADD_COMISSION_VALUE_EXTRA,
  FETCH_COMISSION_VALUE_EXTRA,
  DELETE_COMISSION_VALUE_EXTRA,
  UPDATE_COMISSION_VALUE_EXTRA,
} from "../utils/store/action.names";
import {
  SET_TOKEN_ERROR,
  SET_TOKEN,
  SET_PROFILE,
  SET_SIGNUP_DATA,
} from "../utils/store/mutation.names";
import {
  GET_PROFILE,
  GET_AUTH_HEADER,
  GET_TOKEN,
  GET_SIGNUP_DATA,
} from "../utils/store/getter.names";

import { NS_USER } from "~/utils/store/namespace.names";
import { namespaced, buildParams } from "../utils/utils";

export const state = () => ({
  user: {
    token: null,
    profile: null,
  },
  signUpData: null,
  error: false,
});

export const getters = {
  [GET_SIGNUP_DATA](state) {
    return state.signUpData;
  },
  [GET_PROFILE](state) {
    return state.user.profile;
  },
  [GET_TOKEN](state) {
    return state.user.token;
  },
  [GET_AUTH_HEADER](state) {
    if (state.user.token == null) return null;
    return { Authorization: `Token ${state.user.token}` };
  },
};

export const actions = {
  async [SIGNUP]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/signup/`, payload)
        .then(({ data }) => {
          commit(SET_SIGNUP_DATA, JSON.stringify(payload));
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [SIGNIN]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/affiliate_signin/`, payload)
        .then(({ data }) => {
          commit(SET_TOKEN, data.token);
          commit(SET_PROFILE, data);
          resolve(data);
        })
        .catch((e) => {
          commit(SET_TOKEN_ERROR);
          console.log(e);
          reject(e);
        });
    });
  },
  async [GET_TOKEN_FROM_LOCAL_STORE]({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      const localToken = this.$cookies.get("FLAGEDU_AFFILIATE_TOKEN");
      if (localToken != null) {
        commit(SET_TOKEN, localToken);
        resolve(localToken);
      } else {
        console.log("TOKEN FROM LOCAL STORE ERROR");
        reject();
      }
    });
  },
  async [GET_SIGNUP_DATA_FROM_LOCAL_STORAGE]({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      var localData = localStorage.getItem("FLAGEDU_AFF_SIGNUP_DATA");
      if (localData != null) {
        commit(SET_SIGNUP_DATA, localData);
        resolve();
      } else {
        localData = null;
        commit(SET_SIGNUP_DATA, localData);
        reject();
      }
    });
  },
  async [SEND_VERIFICATION_CODE]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/send_verification_code/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [VERIFICATION_CONFIRM]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/verify_code/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e.response);
          reject(e);
        });
    });
  },
  async [VERIFY_CODE_FOR_FORGET_PASSWORD]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/verify_code_for_forget_password/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FORGET_PASSWORD]({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/forget_password/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [PROFILE]({ commit, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${USERS_ENDPOINT}/profile/`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          if (data.user_type != 1) {
            commit(SET_TOKEN_ERROR);
          } else {
            commit(SET_PROFILE, data);
          }
          resolve(data);
        })
        .catch((e) => {
          commit(SET_TOKEN_ERROR);
          console.log(e);
          reject(e);
        });
    });
  },
  async [CHANGE_PROFILE]({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .patch(`${USERS_ENDPOINT}/profile/`, payload, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
          dispatch(PROFILE);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [CHANGE_PASSWORD]({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/change_password/`, payload, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [FETCH_PAYMENT_DETAIL]({ getters }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${PAYMENT_DETAIL_ENDPOINT}/payment_details/`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },

  async [UPDATE_PAYMENT_DETAIL]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .patch(`${PAYMENT_DETAIL_ENDPOINT}/${payload.id}/`, payload.formData, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },

  async [ADD_PAYMENT_DETAIL]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${PAYMENT_DETAIL_ENDPOINT}/`, payload, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },

  async [FETCH_WITHDRAWS]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${WITHDRAW_REQUEST_ENDPOINT}/${buildParams(payload)}`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [ADD_WITHDRAW_REQUEST]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${WITHDRAW_REQUEST_ENDPOINT}/`, payload, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [SUBMIT_QUIZ]({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${USERS_ENDPOINT}/affiliate_quiz_submit/`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [FETCH_QUIZ]({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${USERS_ENDPOINT}/affiliate_quiz_fetch/${buildParams(payload)}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [UPLOAD_DOCUMENT]({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${DOCUMENT_UPLOAD_ENDPOINT}/`, payload, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [FETCH_DOCUMENT]({ getters }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${DOCUMENT_UPLOAD_ENDPOINT}/`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  async [FETCH_COMISSION_RULES]({ commit, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${COMISSION_RULE_ENDPOINT}/${buildParams(payload)}`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [FETCH_COMISSION_DETAIL]({ commit, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${COMISSION_RULE_ENDPOINT}/${payload}/`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [ADD_COMISSION_RULE]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${COMISSION_RULE_ENDPOINT}/`, payload, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [UPDATE_COMISSION_RULE]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .patch(`${COMISSION_RULE_ENDPOINT}/${payload.id}/`, payload.data, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [DELETE_COMISSION_RULE]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .delete(`${COMISSION_RULE_ENDPOINT}/${payload}/`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [ADD_COMISSION_VALUE]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${COMISSION_RULE_VALUE_ENDPOINT}/`, payload, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [UPDATE_COMISSION_VALUE]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .patch(
          `${COMISSION_RULE_VALUE_ENDPOINT}/${payload.id}/`,
          payload.data,
          {
            headers: {
              ...getters[GET_AUTH_HEADER],
            },
          }
        )
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [FETCH_COMISSION_VALUES]({ commit, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${COMISSION_RULE_VALUE_ENDPOINT}/${buildParams(payload)}`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [DELETE_COMISSION_VALUE]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .delete(`${COMISSION_RULE_VALUE_ENDPOINT}/${payload}/`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [ADD_COMISSION_VALUE_EXTRA]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`${COMISSION_RULE_VALUE_EXTRA_ENDPOINT}/`, payload, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [FETCH_COMISSION_VALUE_EXTRA]({ commit, getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${COMISSION_RULE_VALUE_EXTRA_ENDPOINT}/${buildParams(payload)}`, {
          headers: {
            ...getters[GET_AUTH_HEADER],
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
  async [DELETE_COMISSION_VALUE_EXTRA]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .delete(
          `${COMISSION_RULE_VALUE_EXTRA_ENDPOINT}/${payload.id}/${buildParams(
            payload.params
          )}`,
          {
            headers: {
              ...getters[GET_AUTH_HEADER],
            },
          }
        )
        .then(({ data }) => {
          resolve(data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  },
  async [UPDATE_COMISSION_VALUE_EXTRA]({ getters }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .patch(
          `${COMISSION_RULE_VALUE_EXTRA_ENDPOINT}/${
            payload.detail_id + "/" + buildParams(payload.params)
          }`,
          payload.data,
          {
            headers: {
              ...getters[GET_AUTH_HEADER],
            },
          }
        )
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
  [SET_SIGNUP_DATA](state, data) {
    state.signUpData = JSON.parse(data);
    localStorage.setItem("FLAGEDU_AFF_SIGNUP_DATA", data);
  },
  [SET_TOKEN](state, token) {
    state.user.token = token;
    state.error = false;
    this.$cookies.set("FLAGEDU_AFFILIATE_TOKEN", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  },
  [SET_TOKEN_ERROR](state) {
    state.user.token = null;
    state.user.profile = null;
    state.error = true;
    this.$cookies.remove("FLAGEDU_AFFILIATE_TOKEN");
  },
  [SET_PROFILE](state, data) {
    state.user.profile = data;
  },
};
