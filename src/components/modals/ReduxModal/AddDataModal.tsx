import React, { FC } from "react";
import { db } from "../../../db";
import { BaseModal } from "../../BaseModal";
import { JSONView } from "../../JSONView";
import { useItemsContext } from "../../../hooks/useItemsContext";
import {
  Item,
  ModalSubcomponentKeys,
  ModalSubcomponentsType,
} from "../../../types";
import { addItem } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../../redux/selectors";

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
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
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

  const handleAddItem = () => {
    dispatch(addItem());
    advance("success")();
    onAdd();
  };

  const components: ModalSubcomponentsType = {
    form: (
      <>
        <div>are you sure?</div>
        <button onClick={advance("confirm")}>yes</button>
      </>
    ),
    confirm: <button onClick={handleAddItem}> let's go </button>,
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
        buttonText="Add"
        onClose={handleClose}
        renderWhenClosed={renderWhenClosed}
        header="Redux Modal: Add"
      >
        <JSONView object={{ current, items }} />
        {components[current]}
      </BaseModal>
    </div>
  );
};
