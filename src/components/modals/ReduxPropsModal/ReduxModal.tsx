import React, { FC } from "react";
import { AddDataModal } from "./AddDataModal";
import { useSelector } from "react-redux";
import { selectItems } from "../../../redux/selectors";
import { JSONView } from "../../JSONView";
import { Item } from "../../../types";

interface ReduxPropsModalProps {
  items: Item[];
  onClose: () => void;
  unrenderOnClose?: boolean;
}
const ReduxPropsModal: FC<ReduxPropsModalProps> = ({
  items,
  onClose,
  unrenderOnClose,
}) => {
  return (
    <section>
      <h2>Redux Props Modal</h2>
      {items ? <JSONView object={items} /> : <div>no items</div>}
      <AddDataModal
        onAdd={() => {}}
        onClose={onClose}
        renderWhenClosed={unrenderOnClose}
      />
    </section>
  );
};

export { ReduxPropsModal };
