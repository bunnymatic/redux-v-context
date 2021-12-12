import styles from "./App.module.scss";
import React, { FC } from "react";
import { DbView } from "./components/DbView";
import { ContextModal } from "./components/modals";
import { useDirtyState } from "./hooks/useDirtyState";
import { ContextPropsModal } from "./components/modals/ContextPropsModal/ContextPropsModal";
import { ItemsProvider } from "hooks/useItemsContext";

const ReduxModal: FC = () => {
  return (
    <section>
      <h2>Redux Modal</h2>
    </section>
  );
};

const ReduxPropsModal: FC = () => {
  return (
    <section>
      <h2>Redux Props Modal</h2>
    </section>
  );
};

const App = (): JSX.Element => {
  const [itemsDirty, setItemsDirty] = useDirtyState();

  const itemsRefetch = () => {
    setItemsDirty();
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>db</h2>
        <DbView dirtySince={itemsDirty} />
      </div>

      <ItemsProvider>
        <ReduxModal />
        <ContextModal onClose={itemsRefetch} />
        <ContextModal unrenderOnClose={true} onClose={itemsRefetch} />
        <ReduxPropsModal />
        <ContextPropsModal onClose={itemsRefetch} />
      </ItemsProvider>
    </div>
  );
};

export default App;
