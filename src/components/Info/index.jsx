import React from "react";
import styles from "./Info.module.css";

const Info = ({ info }) => {
  const className = info.class;

  return (
    <div className={styles.root + " " + styles[className]}>
      <div className={styles.top}>{info.top}</div>
      <div className={styles.title}>{info.title}</div>
      <div className={styles.bottom}>{info.bottom}</div>
    </div>
  );
};

export default Info;
