import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './CartItem.module.css';
const CartItem = () => {
  return (
    <div>
      <ShoppingCartOutlined className={styles.cart_item} />
    </div>
  );
};

export default CartItem;
