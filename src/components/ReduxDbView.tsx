import { Item } from "../types";
import { db } from "../db";
import { JSONView } from "./JSONView";
import { isEmpty } from "../common/utils";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectLastUpdate } from "../redux/selectors";

interface DbViewProps {}

export const ReduxDbView: FC<DbViewProps> = () => {
  const [data, setData] = React.useState<Item[]>();
  const shouldRefetch = useSelector(selectLastUpdate);

  React.useEffect(() => {
    console.log("ReduxDbView:refetch items", shouldRefetch);
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
