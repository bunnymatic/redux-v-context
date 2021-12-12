import { Item, db } from "../db";
import { JSONView } from "./JSONView";
import { isEmpty } from "../common/utils";
import React, { FC } from "react";

interface DbViewProps {
  dirtySince: number | undefined
}

export const DbView: FC<DbViewProps> = ({dirtySince}) => {
  const [data, setData] = React.useState<Item[]>();
  const shouldRefetch = dirtySince ?? Date.now()
  React.useEffect(() => {
    console.log("DbView:refetch items")
    db.items.list().then(setData);
  }, [shouldRefetch]);

  if (isEmpty(data)) {
    return <div>no data</div>;
  }
  return <JSONView object={{ data }} />;
};
