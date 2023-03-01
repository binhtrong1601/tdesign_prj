import React from 'react';
import styles from './InputEmail.module.css';

const InputEmail = () => {
  return (
    <form className={styles.form}>
      <input type="text" className={styles.input} placeholder="Nhập Email của bạn" />
      <button type="submit" className={styles.button}>
        ĐĂNG KÝ
      </button>
    </form>
  );
};

export default InputEmail;
