import { randomInt } from "crypto";
import { Item } from "./types";

const data: Item[] = [
  { id: 1, value: Date.now() },
  { id: 2, value: Date.now() },
];

const list = (): Promise<Item[]> => {
  return Promise.resolve(data);
};

const add = (): Promise<Item> => {
  const ids = data.map((item) => item.id);
  const nextId = Math.max(...ids) + 1;

  const item = {
    id: nextId,
    value: Date.now(),
  };
  data.push(item);
  return Promise.resolve(item);
};

export const db = { items: { list, add } };
