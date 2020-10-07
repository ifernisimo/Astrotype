import React from "react";
import styles from "./WelcomePage.module.scss";
const WelcomePage = (props: any) => {
  return (
    <div className={styles.welcomeScreen}>
      <div className={styles.logo}>
        <h1>ASTROTYPE</h1>
      </div>
      <div className={styles.controls}>
        <button>Start</button>
        <div className={styles.gameSpeed}>
          <input
            onChange={(e) => {
              props.handleGameSpeedChange(e);
            }}
            placeholder={"Speed words/min"}
            type={"text"}
          />
        </div>
        <div className={styles.gameText}>
          <textarea placeholder={"Enter text here"} />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
