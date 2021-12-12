import Modal from "react-modal";
import modalStyles from "./BaseModal.module.scss";
import React, { FC } from "react";
import { useModalState } from "../hooks/useModalState";
import { JSONView } from "./JSONView";

interface BaseModalProps {
  header: string;
  buttonText: string;
  renderWhenClosed?: boolean;
  onClose: () => void;
}
export const BaseModal: FC<BaseModalProps> = ({
  header,
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
            <header>
              <h4>{header}</h4>
            </header>
            <div>{children}</div>
          </Modal>
        </>
      )}
    </div>
  );
};
