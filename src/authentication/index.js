import api, { setAuthenticationPromise } from "../api";
import connector from "./connector";

import { jso_wipe } from "../jso";

export default ({ api_token, access_token, provider = "cg" }, reset) => {
  let promise;

  if (access_token) {
    promise = Promise.resolve({ access_token, expires: -1 });
  } else {
    promise = connector(api_token, reset, { provider });
  }

  setAuthenticationPromise(promise);
  return promise;
};

export const authenticatedRequest = api;

export const wipeToken = jso_wipe;
