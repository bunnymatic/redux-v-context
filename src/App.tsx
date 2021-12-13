import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { logRendering } from "./common/utils";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import { PropsDrilling, AllModals } from "./pages";

import styles from "./App.module.scss";

const App = (): JSX.Element => {
  logRendering("App");

  return (
    <Router>
      <Provider store={store}>
        <div className={styles.nav}>
          <nav>
            <ul>
              <li>
                <Link to="/">AllModals</Link>
              </li>
              <li>
                <Link to="/props-drilling">PropsDrilling</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/" exact={true}>
            <AllModals />
          </Route>
          <Route path="/props-drilling">
            <PropsDrilling />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
