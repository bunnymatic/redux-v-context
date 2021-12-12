import React, { FC, useState } from "react";
import { Item } from "./types";
import { ItemsProvider, useItemsContext } from "../../../hooks/useItemsContext";
import { AddDataModal } from "./AddDataModal";
import { db } from "../../../db";

interface ContextModalProps {
  onClose: () => void;
}
const ContextModal: FC = ({onClose}) => {
  const [ itemsDirty, setItemsDirty ] = useState<number>(Date.now())
  const { items, assign } = useItemsContext();

  const markItemsDirty = () => {
    setItemsDirty(Date.now())
  }

  React.useEffect(() => {
    console.log("Refetching Items")
    db.items.list().then(assign);
  }, []);

  return (
    <section>
      <h2>Context Modal</h2>
      { items ? null :
        <div>no items</div>
      }


      <AddDataModal onAdd={markItemsDirty} onClose={onClose} />
    </section>
  );
};

const ContextModalWithProvider: FC = () => (
  <ItemsProvider><ContextModal/></ItemsProvider>
);

export { ContextModalWithProvider as ContextModal };
