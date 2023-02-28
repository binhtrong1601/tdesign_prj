import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailKits.module.css";

import { MessageFilled } from "@ant-design/icons";

const DetailKits = (props) => {
  const id = useParams().id;
  const [products, setProducts] = useState([]);

  const handleFetchProduct = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3001/${props.productName}/${id}`
      );
      setProducts(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  const handleFormatPrice = (x) => {
    return Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "vnd",
    }).format(x);
  };

  return (
    <div className={styles.detail_kits}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3> {products.title}</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.price}>
            <p>
              <span className={styles.price_no_sale}>
                {handleFormatPrice(products.price)}
              </span>
              <span>
                {handleFormatPrice(products.price * (1 - products.sale / 100))}
              </span>
            </p>
          </div>

          <div className={styles.infor}>
            <p>
              Áo bóng đá <a href="#">{products.name}</a>{" "}
              <span>{products.homeway}</span> <br></br> -Hàng VN giá{" "}
              <span className={styles.red}>Khuyến mãi còn 100.000</span> VNĐ /1
              bộ <br></br>{" "}
              <span className={styles.red}>
                Từ 10 bộ trở lên: 95.000VNĐ /1 bộ.
              </span>
              <br></br>-Hàng Thái Lan giá Khuyến mãi còn{" "}
              <span className={styles.orange}>
                {" "}
                {handleFormatPrice(products.price * (1 - products.sale / 100))}
              </span>
              /1 bộ -{" "}
              <span className={styles.orange}>
                {handleFormatPrice(products.price)}
              </span>
              /1 bộ<br></br>
              <span className={styles.red}>
                Giá ưu đãi từ 5 bộ trở lên: {handleFormatPrice(270000)}/ 1 áo –
                {handleFormatPrice(340000)}/ 1 bộ
              </span>
            </p>
          </div>
        </div>
        <div className={styles.facebook}>
          <MessageFilled twoToneColor="#fff" />
          <a href="https://www.facebook.com/profile.php?id=100075939036920">
            Chat facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailKits;
