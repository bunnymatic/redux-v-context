import React, { FC, useState } from "react";
import { ItemsProvider, useItemsContext } from "../../../hooks/useItemsContext";
import { AddDataModal } from "./AddDataModal";
import { db } from "../../../db";
import { logRendering } from "../../../common/utils";

interface ContextModalProps {
  onUpdate: () => void;
  onClose: () => void;
  unrenderOnClose?: boolean;
}
const ContextModal: FC<ContextModalProps> = ({
  onClose,
  onUpdate,
  unrenderOnClose,
}) => {
  logRendering("ContextModal");
  const [itemsDirty, setItemsDirty] = useState<number>(Date.now());
  const { items, assign } = useItemsContext();

  const markItemsDirty = () => {
    setItemsDirty(Date.now());
  };
  const handleOnAdd = () => {
    markItemsDirty();
    onUpdate && onUpdate();
  };

  React.useEffect(() => {
    console.log("Refetching Items");
    db.items.list().then(assign);
  }, [itemsDirty, assign]);

  return (
    <section>
      <h2>Context Modal</h2>
      {items ? null : <div>no items</div>}

      <AddDataModal
        onAdd={handleOnAdd}
        onClose={onClose}
        renderWhenClosed={unrenderOnClose}
      />
    </section>
  );
};

export { ContextModal };
