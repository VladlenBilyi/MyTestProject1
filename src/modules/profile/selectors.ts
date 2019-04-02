import { Store } from "../../store";
import { isFetched as isFetchedUtil } from "../../utils/fetchState";

export const getProfile = (state: Store) => state.profile;
export const getFirstName = (state: Store) => state.profile.firstName;
export const getLastName = (state: Store) => state.profile.lastName;

export const isFetched = (state: Store) => isFetchedUtil(state.profile);
