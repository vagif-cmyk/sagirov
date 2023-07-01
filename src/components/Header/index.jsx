import React from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = ({ links }) => {
  const [burgerActive, setBurgerActive] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <div className={styles.a + " " + styles.a1}></div>
            <div className={styles.a + " " + styles.a2}></div>
            <div className={styles.a + " " + styles.a3}></div>
            <div className={styles.a + " " + styles.a4}></div>
            <a href="https://dzen.ru/a/YDSjsghMw0UkhXUa">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div
            className={styles.burger + " " + (burgerActive ? styles.active : "")}
            onClick={() => setBurgerActive(!burgerActive)}
          >
            <span></span>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {links.map((text) => (
                <li key={text} className={styles.item}>
                  {text}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
