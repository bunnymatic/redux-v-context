import React, { FC, useState, useContext } from "react";
import { createContext } from "../common/contextHelpers";
import { Item } from "../types";
import { db } from "../db";

export interface ItemsContextType {
  items: Item[];
  assign: (items: Item[]) => void;
}

export const ItemsContext = createContext<ItemsContextType>();

export const ItemsProvider: FC = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  React.useEffect(() => {
    console.log("Refetching Items");
    db.items.list().then(setItems);
  }, []);

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
