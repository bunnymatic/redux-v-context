import logo from "./logo.svg";
import styles from "./App.module.scss";
import Counter from "components/Counter";

const App = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Counter />
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code className={styles.code}>src/App.tsx</code> and save to
          reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
