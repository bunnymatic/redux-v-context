import React, { FC } from "react";
import { Item } from "../types";
import { isEmpty, logRendering } from "../common/utils";
import { db } from "../db";
import { useDirtyState } from "../hooks/useDirtyState";
import { BaseModal } from "../components/BaseModal";
import { JSONView } from "../components/JSONView";

interface PropsDrivenModalProps {
  data: Item[];
  onUpdate: () => void;
  update: (items: Item[]) => void;
}
const PropsDrivenModal: FC<PropsDrivenModalProps> = ({
  data,
  update,
  onUpdate,
}) => {
  const setNewList = () => {
    update([{ id: 1000, value: 12341 }]);
  };
  return (
    <div>
      <BaseModal
        header="Props Drilling Modal"
        buttonText="Open"
        onClose={() => {}}
      >
        <JSONView object={data} />
        <button onClick={onUpdate}>set dirty</button>
        <button onClick={setNewList}>set new list</button>
      </BaseModal>
    </div>
  );
};
export const PropsDrilling: FC = () => {
  const [data, setData] = React.useState<Item[]>();
  const [dirty, setDirty] = useDirtyState();

  logRendering("PropsDrilling");
  React.useEffect(() => {
    console.log("DbView:refetch items", dirty);
    db.items.list().then(setData);
  }, [dirty]);

  if (isEmpty(data)) {
    return <div>no data</div>;
  }

  return (
    <div>
      <h2>Props Drilling</h2>
      <JSONView object={data} />
      <PropsDrivenModal
        data={data ?? []}
        onUpdate={setDirty}
        update={setData}
      />
    </div>
  );
};
