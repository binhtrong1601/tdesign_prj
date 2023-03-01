import React from 'react';
import styles from './Contact.module.css';

import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  MailOutlined,
} from '@ant-design/icons';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.zalo}>
          <a href="https://zalo.me/0948045658">
            <p>CHAT ZALO</p>
          </a>
        </div>
        <div className={styles.hotline}>
          <a href="#">
            <p>HOT LINE: 0948045658</p>
          </a>
        </div>
      </div>
      <div className={styles.icon}>
        <div className={styles.icon}>
          <FacebookOutlined className={styles.item_icon} />
          <InstagramOutlined className={styles.item_icon} />
          <TwitterOutlined className={styles.item_icon} />
          <MailOutlined className={styles.item_icon} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
