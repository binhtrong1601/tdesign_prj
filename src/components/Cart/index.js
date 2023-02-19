import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./cart.module.css";
import React from "react";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <button className={styles.button} type="default">
        <p>0đ</p>
        <ShoppingCartOutlined className={styles.cart_item} />
      </button>
    </div>
  );
};

export default Cart;
