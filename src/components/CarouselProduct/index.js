import React from "react";
import styles from "./carouselProduct.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const CarouselProduct = ({ images }) => {
  const id = useParams().id;
  const [products, setProducts] = useState([]);
  const handleFetchProduct = async () => {
    const data = await axios.get("http://localhost:3001/kitsclub/" + id);
    setProducts(data.data);
  };
  useEffect(() => {
    handleFetchProduct();
  }, []);
  const newKits = products.kits;
  console.log(newKits);

  return (
    <div className="container">
      <div className={styles.carousel_container}>
        {newKits === undefined ? <></> : newKits.map((props) => <></>)}
      </div>
    </div>
  );
};

export default CarouselProduct;
