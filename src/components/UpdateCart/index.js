//CODE Ở ĐÂY - PHẦN XỬ LÝ VIEWCART(UPDATE, XÓA)
import React, { useEffect } from "react";
import styles from "./UpdateCart.module.css";
import { useState } from "react";
import HandleFormatPrice from "../HandleFormatPrice";

const CART_KEY = "cart";

const Count = (props) => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {}, [count]);

  const handleAddCount = () => {
    count >= 0 ? setCount(count + 1) : setCount(0);
  };
  const handleApartCount = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };
  console.log(props);

  return (
    <div className={styles.count}>
      <button onClick={handleApartCount}>-</button>
      <p>{count}</p>
      <button onClick={handleAddCount}>+</button>
    </div>
  );
};

const UpdateCart = () => {
  const listProductsAddLocalStrorage = JSON.parse(
    localStorage.getItem(CART_KEY)
  );

  const [listProductsAdd, setListProductsAdd] = useState(
    Array.isArray(listProductsAddLocalStrorage)
      ? listProductsAddLocalStrorage
      : []
  );

  const listProductsAdded = [...listProductsAdd];
  const handleDeleteItem = () => {};

  const handleAddCart = () => {};

  return (
    <div className={styles.update_cart}>
      {listProductsAdded.map((props) => (
        <div className={styles.cart_item}>
          <div className={styles.delete}>x</div>
          <div className={styles.infor}>
            <img src={props.productImage} className={styles.image_item} />
            <p>{props.productTitle}</p>
          </div>
          <div className={styles.price}>
            {HandleFormatPrice(
              props.productPrice * (1 - props.productSale / 100)
            )}
          </div>
          <div className={styles.count}>
            <Count count={props.productCount} />
          </div>
          <div className={styles.total}>
            {HandleFormatPrice(
              props.productCount *
                (props.productPrice * (1 - props.productSale / 100))
            )}
          </div>
        </div>
      ))}
      <div className={styles.update}>
        <button onClick={handleAddCart}>UPDATE CART </button>
      </div>
    </div>
  );
};

export default UpdateCart;
