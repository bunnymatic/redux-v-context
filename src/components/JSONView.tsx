import React, { FC } from "react";

export const JSONView: FC<{ object: Record<string, unknown> }> = ({
  object,
}) => (
  <pre>
    <code>{JSON.stringify(object, null, 2)}</code>
  </pre>
);
