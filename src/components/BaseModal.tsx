import Modal from "react-modal";
import modalStyles from "./BaseModal.module.scss";
import React, { FC } from "react";
import { useModalState } from "../hooks/useModalState";
import { JSONView } from "./JSONView";

interface BaseModalProps {
  buttonText: string;
  renderWhenClosed?: boolean;
  onClose: () => void;
}
export const BaseModal: FC<BaseModalProps> = ({
  onClose,
  buttonText,
  renderWhenClosed,
  children,
}) => {
  const { open, close: _close, isOpen } = useModalState();
  const close = () => {
    onClose && onClose();
    _close();
  };

  return (
    <div>
      <button onClick={open}>{buttonText}</button>
      <JSONView object={{ renderWhenClosed, isOpen }} />
      {(isOpen || renderWhenClosed) && (
        <>
          <div>modal in dom</div>
          <Modal
            style={{ content: { left: "200px" } }}
            isOpen={isOpen}
            onRequestClose={close}
          >
            <button className={modalStyles.closeButton} onClick={close}>
              X
            </button>
            {children}
          </Modal>
        </>
      )}
    </div>
  );
};
