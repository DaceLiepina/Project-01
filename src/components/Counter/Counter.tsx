import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(10);

  //const arr = [10, 17];
  //  const ten = arr[0];
  //  const seventeen = arr[1];
  //const [ten, seventeen] = arr;

  // переменная состояния == state
  // функция setter - вызвывать ререндер компонента
  // Что нужно запомнить о каждом хук?
  // - что принимает? Начальное значение переменной состояния.
  // - что возвращает? Создает стейт, изменения которго вызывают ререндер

  // poga +1
  
  // poga -2
  // prev - ieperiekseja noziime
  function handleAddOne() {
    setCounter((prev) => prev + 1);
  }

  function handleMinusTwo() {
    setCounter(counter - 2);
  }
  function handleReset() {
    setCounter(10);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.counterValue}>{counter}</h2>
      <div className={styles.buttonGroup}>
        <button type="button" onClick={handleAddOne} className={styles.button}>
          +1
        </button>

        <button
          type="button"
          onClick={handleMinusTwo}
          className={styles.button}
        >
          -2
        </button>

        <button className={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
