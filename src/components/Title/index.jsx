import React from "react";
import styles from "./Title.module.css";

const Title = ({ title, desc }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
      </div>

      <button className={styles.btn}>
        <div className={styles.a + " " + styles.a1}></div>
        <div className={styles.a + " " + styles.a2}></div>
        Начать путешествие
      </button>
    </div>
  );
};

export default Title;
