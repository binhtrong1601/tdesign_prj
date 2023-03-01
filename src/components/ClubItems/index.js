//CODE Ở ĐÂY - PHẦN(ẤN VÀO XEM MẪU ÁO CÁC CLB)
import React from 'react';
import styles from './clubItems.module.css';

const ClubItems = (props) => {
  return (
    <div className={styles.club_items}>
      <div className={styles.img}>
        <img src={props.data.logo} />
      </div>
    </div>
  );
};

export default ClubItems;
