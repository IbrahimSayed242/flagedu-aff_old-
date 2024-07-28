import {
  FETCH_MEDIA_REPORTS_ENDPOINT,
  FETCH_REGISTRATION_REPORTS_ENDPOINT,
  FETCH_EARNING_REPORTS_ENDPOINT,
  FETCH_DASHBOARD_ANALYTICS_ENDPOINT,
  FETCH_ADMIN_DASHBOARD_ANALYTICS_ENDPOINT,
  FETCH_ADMIN_MEDIA_REPORTS_ENDPOINT,
  FETCH_ADMIN_REGISTRATION_REPORTS_ENDPOINT,
} from "~/utils/store/endpoints";
import {
  FETCH_MEDIA_REPORTS,
  FETCH_MEDIA_TOTAL,
  FETCH_REGISTRATION_REPORTS,
  FETCH_REGISTRATION_TOTAL,
  FETCH_EARNING_REPORTS,
  FETCH_EARNING_TOTAL,
  FETCH_DASHBOARD_ANALYTICS_SUMMARY,
  FETCH_REGISTERED_USER_DETAIL,
  FETCH_ADMIN_DASHBOARD_ANALYTICS_SUMMARY,
  FETCH_ADMIN_MEDIA_REPORTS,
  FETCH_ADMIN_MEDIA_TOTAL,
  FETCH_ADMIN_REGISTRATION_REPORTS,
  FETCH_ADMIN_REGISTRATION_TOTAL,
} from "../utils/store/action.names";
import {} from "../utils/store/mutation.names";
import { GET_AUTH_HEADER } from "../utils/store/getter.names";

import { NS_USER } from "~/utils/store/namespace.names";
import { namespaced, buildParams } from "../utils/utils";

export const actions = {
  async [FETCH_DASHBOARD_ANALYTICS_SUMMARY]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${FETCH_DASHBOARD_ANALYTICS_ENDPOINT}/${buildParams(payload)}`, {
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
  async [FETCH_ADMIN_DASHBOARD_ANALYTICS_SUMMARY](
    { rootGetters },
    payload = {}
  ) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(
          `${FETCH_ADMIN_DASHBOARD_ANALYTICS_ENDPOINT}/${buildParams(payload)}`,
          {
            headers: {
              ...authHeader,
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
  async [FETCH_MEDIA_REPORTS]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${FETCH_MEDIA_REPORTS_ENDPOINT}/${buildParams(payload)}`, {
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
  async [FETCH_ADMIN_MEDIA_REPORTS]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${FETCH_ADMIN_MEDIA_REPORTS_ENDPOINT}/${buildParams(payload)}`, {
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
  async [FETCH_MEDIA_TOTAL]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(
          `${FETCH_MEDIA_REPORTS_ENDPOINT}/media_total/${buildParams(payload)}`,
          {
            headers: {
              ...authHeader,
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
  async [FETCH_ADMIN_MEDIA_TOTAL]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(
          `${FETCH_ADMIN_MEDIA_REPORTS_ENDPOINT}/media_total/${buildParams(
            payload
          )}`,
          {
            headers: {
              ...authHeader,
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
  async [FETCH_REGISTRATION_REPORTS]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${FETCH_REGISTRATION_REPORTS_ENDPOINT}/${buildParams(payload)}`, {
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
  async [FETCH_ADMIN_REGISTRATION_REPORTS]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(
          `${FETCH_ADMIN_REGISTRATION_REPORTS_ENDPOINT}/${buildParams(
            payload
          )}`,
          {
            headers: {
              ...authHeader,
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
  async [FETCH_REGISTRATION_TOTAL]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(
          `${FETCH_REGISTRATION_REPORTS_ENDPOINT}/registration_total/${buildParams(
            payload
          )}`,
          {
            headers: {
              ...authHeader,
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
  async [FETCH_ADMIN_REGISTRATION_TOTAL]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(
          `${FETCH_ADMIN_REGISTRATION_REPORTS_ENDPOINT}/registration_total/${buildParams(
            payload
          )}`,
          {
            headers: {
              ...authHeader,
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
  async [FETCH_EARNING_REPORTS]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(`${FETCH_EARNING_REPORTS_ENDPOINT}/${buildParams(payload)}`, {
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
  async [FETCH_EARNING_TOTAL]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(
          `${FETCH_EARNING_REPORTS_ENDPOINT}/earning_total/${buildParams(
            payload
          )}`,
          {
            headers: {
              ...authHeader,
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
  async [FETCH_REGISTERED_USER_DETAIL]({ rootGetters }, payload = {}) {
    return new Promise((resolve, reject) => {
      const authHeader = rootGetters[namespaced(NS_USER, GET_AUTH_HEADER)];

      this.$axios
        .get(
          `${FETCH_REGISTRATION_REPORTS_ENDPOINT}/registered_user_detail/${buildParams(
            payload
          )}`,
          {
            headers: {
              ...authHeader,
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
