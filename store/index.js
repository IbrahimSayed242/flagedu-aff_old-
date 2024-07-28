import { NS_USER, NS_COMMON } from "~/utils/store/namespace.names";
import {
  GET_TOKEN_FROM_LOCAL_STORE,
  PROFILE,
  FETCH_BRANDS,
} from "~/utils/store/action.names";
import { namespaced } from "~/utils/utils";

export const state = () => ({});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch(namespaced(NS_USER, GET_TOKEN_FROM_LOCAL_STORE)).catch(
      (e) => {}
    );
    await dispatch(namespaced(NS_USER, PROFILE)).catch((e) => {});
    await dispatch(namespaced(NS_COMMON, FETCH_BRANDS)).catch((e) => {});
  },
};
