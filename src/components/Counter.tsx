import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      An example stateful component.
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
};

export default Counter;
