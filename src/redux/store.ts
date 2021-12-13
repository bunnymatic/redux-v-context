import {
  configureStore,
  createSlice,
  createAction,
  PayloadAction,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { Item } from "../types";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

export interface ItemsStoreType {
  items: Item[];
  lastUpdate: number | undefined;
}

const initialState: ItemsStoreType = {
  items: [],
  lastUpdate: undefined,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addedItem(state, action: PayloadAction<Item>) {
      // state.items.push(action.payload);
      // state.lastUpdate = Date.now();
      return {
        ...state,
        items: [...state.items, action.payload],
        lastUpdate: Date.now(),
      };
    },
  },
});

export const { addedItem } = itemsSlice.actions;
export const reducer = itemsSlice.reducer;
export const addItem = createAction<void>(`${itemsSlice.name}/add`);

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware, logger];

export const store = (() => {
  const _store = configureStore({
    reducer,
    middleware,
    devTools: true,
  });
  sagaMiddleware.run(rootSaga);
  return _store;
})();
