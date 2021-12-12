import React, { FC } from "react";
import { JSONView } from "./JSONView";
import { useSelector } from "react-redux";
import { selectAll } from "../redux/selectors";

export const ReduxState: FC = () => {
  const state = useSelector(selectAll);

  return (
    <div>
      <h3>current redux state</h3>
      <JSONView object={state} />
    </div>
  );
};
