import React, { FC, useState } from "react";
import { ItemsProvider, useItemsContext } from "../../../hooks/useItemsContext";
import { AddDataModal } from "./AddDataModal";
import { db } from "../../../db";

interface ContextModalProps {
  onClose: () => void;
  unrenderOnClose?: boolean;
}
const ReduxModal: FC<ContextModalProps> = ({ onClose, unrenderOnClose }) => {
  // const [itemsDirty, setItemsDirty] = useState<number>(Date.now());
  // const { items } = useSelector();
  //
  // const markItemsDirty = () => {
  //   setItemsDirty(Date.now());
  // };
  //
  // React.useEffect(() => {
  //   console.log("Refetching Items");
  //   db.items.list().then(assign);
  // }, [itemsDirty]);
  //
  // return (
  //   <section>
  //     <h2>Context Modal</h2>
  //     {items ? null : <div>no items</div>}
  //
  //     <AddDataModal
  //       onAdd={markItemsDirty}
  //       onClose={onClose}
  //       renderWhenClosed={unrenderOnClose}
  //     />
  //   </section>
  // );
  return (
    <section>
      <h2>Context Modal</h2>
    </section>
  );
};

const ContextModalWithProvider: FC<ContextModalProps> = (props) => (
  <ItemsProvider>
    <ReduxModal {...props} />
  </ItemsProvider>
);

export { ContextModalWithProvider as ContextModal };
