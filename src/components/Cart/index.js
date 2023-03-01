import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';

import styles from './cart.module.css';

import { React, useState } from 'react';

import HandleFormatPrice from '../HandleFormatPrice';

const CART_KEY = 'cart';

const Cart = () => {
  const listProductsAddLocalStorage = JSON.parse(localStorage.getItem(CART_KEY));
  const [listProductsAdd, setListProductsAdd] = useState(
    Array.isArray(listProductsAddLocalStorage) ? listProductsAddLocalStorage : [],
  );

  const handleReloadTotalPrice = () => {
    const newListProductsAddLocalStorage = JSON.parse(localStorage.getItem(CART_KEY));
    setListProductsAdd(newListProductsAddLocalStorage);
  };

  const listProductsAdded = listProductsAdd;
  let total = 0;

  const newItems = listProductsAdded.map((props, index) => {
    total += props.productCount * (props.productPrice * (1 - props.productSale / 100));
    return {
      key: `${index + 1}`,
      label: (
        <div className={styles.dropdown_content}>
          <div className={styles.infor}>
            <div className={styles.image}>
              <img className={styles.image_item} src={props.productImage} alt="" />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>{props.productTitle}</p>
              <p>
                <span>{props.productCount} x </span>
                <span>{HandleFormatPrice(props.productPrice * (1 - props.productSale / 100))}</span>
              </p>
            </div>
          </div>
        </div>
      ),
    };
  });

  let newTotal = HandleFormatPrice(total);
  let keyIndex = 0;

  for (let i = 0; i <= listProductsAdded.length; i++) {
    keyIndex += i;
  }
  const items = [
    ...newItems,
    {
      key: `${keyIndex}`,
      label: (
        <div style={{ borderBottom: '1px solid #b6b6b6' }}>
          <p className={styles.total_title}>
            Subtotal: <span> {newTotal}</span>
          </p>
        </div>
      ),
    },
    {
      key: `${keyIndex + 1}`,
      label: (
        <div className={styles.view_cart}>
          <p>VIEW CART</p>
        </div>
      ),
    },
    {
      key: `${keyIndex + 2}`,
      label: (
        <div className={styles.check_out}>
          <p>CHECK OUT</p>
        </div>
      ),
    },
  ];
  return (
    <div className={styles.cart}>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow
        destroyPopupOnHide
        onOpenChange={handleReloadTotalPrice}
      >
        <Button className={styles.button}>
          <p className={styles.total_price}>{newTotal}</p>
          <ShoppingCartOutlined className={styles.cart_item} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default Cart;
