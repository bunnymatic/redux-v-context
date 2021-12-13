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
import { logRendering } from "./common/utils";

const App = (): JSX.Element => {
  logRendering("App");
  const [_, setItemsDirty] = useDirtyState();

  const itemsRefetch = () => {
    setItemsDirty();
  };

  const items = useSelector(selectItems);

  return (
    <div className={styles.container}>
      <div>
        <h2>db: updates triggered by state</h2>
        <DbView />
      </div>
      <div>
        <h2>db: updates triggered by redux</h2>
        <ReduxDbView />
      </div>

      <ReduxState />
      <ReduxPropsModal items={items} onClose={() => {}} />
      <ItemsProvider>
        <ReduxModal onClose={() => {}} />
        <ContextModal onClose={() => {}} onUpdate={itemsRefetch} />
        <ContextModal
          unrenderOnClose={true}
          onUpdate={itemsRefetch}
          onClose={() => {}}
        />
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
