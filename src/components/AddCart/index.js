import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AddCart.module.css';

const CART_KEY = 'cart';

const AddCart = (props) => {
  const [count, setCount] = useState(1);
  const id = useParams().id;
  const [products, setProducts] = useState([]);

  const listProductsAddLocalStrorage = JSON.parse(localStorage.getItem(CART_KEY));

  const [listProductsAdd, setListProductsAdd] = useState(
    Array.isArray(listProductsAddLocalStrorage) ? listProductsAddLocalStrorage : [],
  );
  useEffect(() => {}, [count]);

  const handleAddCount = () => {
    count >= 0 ? setCount(count + 1) : setCount(0);
  };
  const handleApartCount = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };

  const handleFetchProduct = async () => {
    try {
      const data = await axios.get(`http://localhost:3001/${props.productName}/${id}`);
      setProducts(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  const handleAddCart = () => {
    const cartItem = {
      idProduct: products.key,
      productName: products.name,
      productPrice: products.price,
      productSale: products.sale,
      productCount: count,
      productImage: products.background,
      productTitle: products.title,
    };

    const tmp = [...listProductsAdd];
    let isExist = false;
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].idProduct === cartItem.idProduct) {
        tmp[i].productCount += count;
        isExist = true;
      }
    }
    console.log(tmp);
    if (!isExist) tmp.push(cartItem);

    if (count > 0) {
      setListProductsAdd(tmp);
      localStorage.setItem(CART_KEY, JSON.stringify(tmp));
    }
    window.location.reload(false);
  };

  return (
    <div className={styles.add_cart}>
      <div className={styles.count}>
        <button onClick={handleApartCount}>-</button>
        <p>{count}</p>
        <button onClick={handleAddCount}>+</button>
      </div>
      <div className={styles.cart}>
        <button onClick={handleAddCart}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default AddCart;
