import React, { FC } from "react";
import { db } from "../../../db";
import { BaseModal } from "../../BaseModal";
import { JSONView } from "../../JSONView";
import { useItemsContext } from "../../../hooks/useItemsContext";
import { ModalSubcomponentKeys, ModalSubcomponentsType } from "../../../types";

interface AddDataModalProps {
  onAdd: () => void;
  onClose: () => void;
  renderWhenClosed?: boolean;
}

export const AddDataModal: FC<AddDataModalProps> = ({
  onAdd,
  onClose,
  renderWhenClosed,
}) => {
  const { items } = useItemsContext();
  const [current, setCurrent] = React.useState<ModalSubcomponentKeys>("form");
  const advance = (page: ModalSubcomponentKeys) => {
    return () => {
      setCurrent(page);
    };
  };

  const reset = () => {
    setCurrent("form");
  };

  const handleClose = () => {
    reset();
    onClose && onClose();
  };

  const addItem = () => {
    db.items.add().then((item) => {
      console.log("added", { item });
      advance("success")();
      onAdd();
    });
  };

  const components: ModalSubcomponentsType = {
    form: (
      <>
        <div>are you sure?</div>
        <button onClick={advance("confirm")}>yes</button>
      </>
    ),
    confirm: <button onClick={addItem}> let's go </button>,
    success: (
      <>
        <div> nice work. Added an item </div>
        <button onClick={reset}>add another</button>
      </>
    ),
  };

  return (
    <div>
      <BaseModal
        header="Context Modal: Add"
        buttonText="Add"
        onClose={handleClose}
        renderWhenClosed={renderWhenClosed}
      >
        <JSONView object={{ current, items }} />
        {components[current]}
      </BaseModal>
    </div>
  );
};
