import React, { FC, useState } from "react";

export const useDirtyState = () => {
  const [dirty_, setDirty_] = useState<number>(Date.now());

  const setDirty = () => {
    setDirty_(Date.now());
  };
  return [dirty_, setDirty];
};
