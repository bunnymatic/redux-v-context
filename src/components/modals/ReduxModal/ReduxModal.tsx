import React, { FC } from "react";
import { AddDataModal } from "./AddDataModal";
import { useSelector } from "react-redux";
import { selectItems } from "../../../redux/selectors";
import { JSONView } from "../../JSONView";
import { logRendering } from "../../../common/utils";

interface ReduxModalProps {
  onClose: () => void;
  unrenderOnClose?: boolean;
}
const ReduxModal: FC<ReduxModalProps> = ({ onClose, unrenderOnClose }) => {
  logRendering("ReduxModal");

  const items = useSelector(selectItems);

  return (
    <section>
      <h2>Redux Modal</h2>
      {items ? <JSONView object={items} /> : <div>no items</div>}
      <AddDataModal
        onAdd={() => {}}
        onClose={onClose}
        renderWhenClosed={unrenderOnClose}
      />
    </section>
  );
};

export { ReduxModal };
