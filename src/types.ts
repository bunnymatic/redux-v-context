export interface Item {
  id: number;
  value: number;
}

export interface ModalSubcomponentsType {
  form: JSX.Element;
  confirm: JSX.Element;
  success: JSX.Element;
}

export type ModalSubcomponentKeys = keyof ModalSubcomponentsType;
