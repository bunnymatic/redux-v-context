import { Item } from "../types";
import { db } from "../db";
import { JSONView } from "./JSONView";
import { isEmpty, logRendering } from "../common/utils";
import React, { FC } from "react";

interface DbViewProps {
  dirtySince?: number | undefined;
}

export const DbView: FC<DbViewProps> = ({ dirtySince }) => {
  const [data, setData] = React.useState<Item[]>();
  const shouldRefetch = dirtySince ?? Date.now();
  console.log({ dirtySince });
  logRendering("DbView");
  React.useEffect(() => {
    console.log("DbView:refetch items", shouldRefetch);
    db.items.list().then(setData);
  }, [shouldRefetch]);

  if (isEmpty(data)) {
    return <div>no data</div>;
  }
  return (
    <table>
      <tbody>
        {data?.map((datum) => (
          <tr key={datum.id}>
            <td>{datum.id}</td>
            <td>{datum.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
