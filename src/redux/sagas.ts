import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { db } from "../db";
import { addItem as addItemAction, addedItem } from "./store";
import { Item } from "../types";

function* addItem() {
  try {
    const item: Item = yield call(db.items.add);
    yield put(addedItem(item));
  } catch (e) {
    console.error(e);
  }
}

function* itemsSaga() {
  yield takeEvery(addItemAction.type, addItem);
}

// Ops sagas registered here
const sagas = [itemsSaga()];

export function* rootSaga() {
  yield all(sagas);
}
