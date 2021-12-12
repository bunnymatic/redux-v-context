import { useState } from "react";

export const useModalState = (initialState = false) => {
  const [isOpen, setOpen] = useState<boolean>(initialState);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return { isOpen, open, close };
};
