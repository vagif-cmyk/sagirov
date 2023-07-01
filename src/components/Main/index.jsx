import React from "react";
import styles from "./Main.module.css";
import Title from "../Title";
import Info from "../Info";

const Main = ({ infoBlocks }) => {
  return (
    <main className="container">
      <div className={styles.content}>
        <Title title={"ПУТЕШЕСТВИЕ"} desc={"на красную планету"} />
        <div className={styles.blocks}>
          {infoBlocks.map((info) => (
            <Info key={info.id} info={info} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
