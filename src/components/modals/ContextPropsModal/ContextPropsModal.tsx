import React, { FC } from "react";
import { useItemsContext } from "../../../hooks/useItemsContext";
import { AddDataModal } from "./AddDataModal";

interface ContextModalProps {
  onClose: () => void;
  unrenderOnClose?: boolean;
}
export const ContextPropsModal: FC<ContextModalProps> = ({
  onClose,
  unrenderOnClose,
}) => {
  const { items } = useItemsContext();

  return (
    <section>
      <h2>Context Props Modal</h2>
      {items ? null : <div>no items</div>}

      <AddDataModal
        onAdd={() => {}}
        onClose={onClose}
        renderWhenClosed={unrenderOnClose}
      />
    </section>
  );
};
