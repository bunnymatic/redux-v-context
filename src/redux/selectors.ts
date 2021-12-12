import { ItemsStoreType } from "./store";
import { Item } from "../types";

export const selectItems: (state: ItemsStoreType) => Item[] = (state) => {
  return state.items;
};
export const selectLastUpdate: (state: ItemsStoreType) => number | undefined = (
  state
) => state.lastUpdate;
export const selectAll: (state: ItemsStoreType) => ItemsStoreType = (state) =>
  state;
