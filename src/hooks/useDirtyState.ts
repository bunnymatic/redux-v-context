import { useState } from "react";

export const useDirtyState = (): [number, () => void] => {
  const [dirty_, setDirty_] = useState<number>(Date.now());

  const setDirty = () => {
    setDirty_(Date.now());
  };
  return [dirty_, setDirty];
};
