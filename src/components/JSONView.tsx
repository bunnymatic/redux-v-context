import React, { FC } from "react";
import { Item } from "../types";

export const JSONView: FC<{ object: unknown }> = ({ object }) => (
  <pre>
    <code>{JSON.stringify(object, null, 2)}</code>
  </pre>
);
