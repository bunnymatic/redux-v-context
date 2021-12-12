import React, { FC, useState, useContext } from "react";
import { Item } from "./types";
import { createContext } from "../common/contextHelpers";

export interface ItemsContextType {
  items: Record<string, Item[]>;
  add: () => void;
  assign: (items: Item[]) => void;
}

export const ItemsContext = createContext<ItemContextType>();

export const ItemsProvider: FC = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <ItemsContext.Provider value={{ items, assign: setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = (): ItemsContextType => {
  const context = useContext<ItemsContextType | null>(ItemsContext);

  if (context === null) {
    throw new Error(
      "[useItemsContext] Using context outside of provider (ItemsProvider)"
    );
  }

  return context;
};
