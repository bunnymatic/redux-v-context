import styles from "./App.module.scss";
import React, { FC } from "react";
import { DbView } from "./components/DbView";
import { ContextModal } from "./components/modals";
import { useDirtyState } from "./hooks/useDirtyState";
import { ContextPropsModal } from "./components/modals/ContextPropsModal/ContextPropsModal";
import { ItemsProvider } from "hooks/useItemsContext";
import { Provider, useSelector } from "react-redux";
import { ReduxModal } from "./components/modals/ReduxModal/ReduxModal";
import { store } from "./redux/store";
import { ReduxDbView } from "./components/ReduxDbView";
import { ReduxState } from "./components/ReduxState";
import { ReduxPropsModal } from "./components/modals/ReduxPropsModal/ReduxModal";
import { selectItems } from "./redux/selectors";

const App = (): JSX.Element => {
  const [itemsDirty, setItemsDirty] = useDirtyState();

  const itemsRefetch = () => {
    setItemsDirty();
  };

  const items = useSelector(selectItems);

  return (
    <div className={styles.container}>
      <div>
        <h2>db: updates triggered by state</h2>
        <DbView dirtySince={itemsDirty} />
      </div>
      <div>
        <h2>db: updates triggered by redux</h2>
        <ReduxDbView />
      </div>

      <ReduxState />
      <ItemsProvider>
        <ReduxModal onClose={() => {}} />
        <ContextModal onClose={itemsRefetch} />
        <ContextModal unrenderOnClose={true} onClose={itemsRefetch} />
        <ReduxPropsModal items={items} onClose={() => {}} />
        <ContextPropsModal onClose={itemsRefetch} />
      </ItemsProvider>
    </div>
  );
};

const ReduxApp: FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default ReduxApp;
