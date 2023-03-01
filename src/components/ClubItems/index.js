//CODE Ở ĐÂY - PHẦN(ẤN VÀO XEM MẪU ÁO CÁC CLB)
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './clubItems.module.css';

const ClubItems = (props) => {
  return (
    <div className={styles.club_items}>
      <div className={styles.img}>
      <Link to={`/club/${props.id}`} className={styles.link}>
        <img src={props.data.logo} />
      </Link>
      </div>
    </div>
  );
};

export default ClubItems;
