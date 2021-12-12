import styles from "./App.module.scss";
import React, { FC } from "react";
import { DbView } from "./components/DbView";
import { ContextModal } from "./components/modals";
import { useDirtyState } from "./hooks/useDirtyState";

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

const ContextPropsModal: FC = () => {
  return (
    <section>
      <h2>Context Props Modal</h2>
    </section>
  );
};

const App = (): JSX.Element => {
  const [itemsDirty, setItemsDirty] = useDirtyState<number>(Date.now())

  const itemsRefetch = () => {
    setItemsDirty()
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>db</h2>
        <DbView dirtySince={itemsDirty} />
      </div>

      <ReduxModal />
      <ContextModal onClose={itemsRefetch} />
      <ReduxPropsModal />
      <ContextPropsModal />
    </div>
  );
};

export default App;
