import { Store } from "../../store";

export const getProfile = (state: Store) => state.profile;
export const getFirstName = (state: Store) => state.profile.firstName;
export const getLastName = (state: Store) => state.profile.lastName;
