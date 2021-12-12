import Modal from "react-modal";
import modalStyles from "./BaseModal.module.scss";
import React, { FC } from "react";
import { useModalState } from "../hooks/useModalState";

interface BaseModalProps {
  buttonText: string;
  onClose: () => void;
}
export const BaseModal: FC<BaseModalProps> = ({
  onClose,
  buttonText,
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
      <Modal isOpen={isOpen} onRequestClose={close}>
        <button className={modalStyles.closeButton} onClick={close}>
          X
        </button>
        {children}
      </Modal>
    </div>
  );
};
