import { Store } from "../../store";

export const allExamsSelector = (state: Store) =>
  state.exams.list.map(id => state.exams.byId[id]);
