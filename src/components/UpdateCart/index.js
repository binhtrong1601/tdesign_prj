import React, { useEffect, useCallback } from 'react';
import styles from './UpdateCart.module.css';
import { useState } from 'react';
import HandleFormatPrice from '../HandleFormatPrice';

import { usePrevious } from '../../hooks';
import { Link } from 'react-router-dom';

const CART_KEY = 'cart';

const Count = (props) => {
  const [count, setCount] = useState(props.productCount);
  const previousCount = usePrevious(count);

  const handleAddCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleApartCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleSavingDataAfterCounting = useCallback(
    (idProduct) => {
      const newListProductsAdd = props.listProductsAdd.map((product) =>
        product.idProduct === idProduct
          ? {
              ...product,
              productCount: count,
            }
          : product,
      );
      props.setListProductsAdd(newListProductsAdd);
      localStorage.setItem(CART_KEY, JSON.stringify(newListProductsAdd));
    },
    [count, props],
  );

  useEffect(() => {
    if (previousCount !== count) {
      handleSavingDataAfterCounting(props.idProduct);
    }
  }, [count, handleSavingDataAfterCounting, previousCount, props.idProduct]);

  return (
    <>
      <div className={styles.count_container}>
        <div className={styles.count}>
          <button onClick={handleApartCount}>-</button>
          <p>{count}</p>
          <button onClick={handleAddCount}>+</button>
        </div>
      </div>

      <div className={styles.total}>
        {HandleFormatPrice(count * (props.productPrice * (1 - props.productSale / 100)))}
      </div>
    </>
  );
};

const UpdateCart = () => {
  const listProductsAddLocalStrorage = JSON.parse(localStorage.getItem(CART_KEY));

  const [listProductsAdd, setListProductsAdd] = useState(
    Array.isArray(listProductsAddLocalStrorage) ? listProductsAddLocalStrorage : [],
  );

  const handleDeleteItem = (idProduct) => {
    if (!idProduct) return;

    const newListProductsAdd = listProductsAdd.filter(
      (productAdd) => productAdd.idProduct !== idProduct,
    );
    setListProductsAdd(newListProductsAdd);
    localStorage.setItem(CART_KEY, JSON.stringify(newListProductsAdd));
  };

  const handleUpdateCart = () => {};

  return (
    <div className={styles.update_cart}>
      {listProductsAdd.map((props) => (
        <div className={styles.cart_item} key={props.idProduct}>
          <div className={styles.delete} onClick={() => handleDeleteItem(props?.idProduct)}>
            x
          </div>
          <div className={styles.infor}>
            <img src={props.productImage} className={styles.image_item} alt="" />
            <p>{props.productTitle}</p>
          </div>
          <div className={styles.price}>
            {HandleFormatPrice(props.productPrice * (1 - props.productSale / 100))}
          </div>
          <Count
            idProduct={props?.idProduct}
            productCount={props.productCount}
            productPrice={props.productPrice}
            productSale={props.productSale}
            listProductsAdd={listProductsAdd}
            setListProductsAdd={setListProductsAdd}
          />
        </div>
      ))}
      <Link to="/">
        <div className={styles.update}>
          <button onClick={handleUpdateCart}>CONTINUE SHOPPING</button>
        </div>
      </Link>
    </div>
  );
};

export default UpdateCart;
