import { SUBAFFILIATE_USERS_ENDPOINT } from "~/utils/store/endpoints";
import {
  FETCH_SUBAFFILIATES,
  FETCH_SUBAFFILIATE_USER_DETAIL,
} from "../utils/store/action.names";
import {} from "../utils/store/mutation.names";
import { GET_AUTH_HEADER } from "../utils/store/getter.names";

import { NS_USER } from "~/utils/store/namespace.names";
import { namespaced, buildParams } from "../utils/utils";

export const state = () => ({});

export const getters = {};

export const actions = {
  async [FETCH_SUBAFFILIATES]({ rootGetters }, payload) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${SUBAFFILIATE_USERS_ENDPOINT}/${buildParams(payload)}`, {
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
  async [FETCH_SUBAFFILIATE_USER_DETAIL]({ rootGetters }, payload) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${SUBAFFILIATE_USERS_ENDPOINT}/${payload}/`, {
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

export const mutations = {};
