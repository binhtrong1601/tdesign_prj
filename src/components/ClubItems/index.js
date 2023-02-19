import React from "react";
import styles from "./clubItems.module.css";

const ClubItems = (props) => {
  return (
    <div className={styles.club_items}>
      <div className={styles.img}>
        <img src={props.data.img} />
      </div>
    </div>
  );
};

export default ClubItems;
