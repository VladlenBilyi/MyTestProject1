import { Store } from "../../store";

export const getToken = (state: Store) => state.authentication.token;
export const getError = (state: Store) => state.authentication.error;
