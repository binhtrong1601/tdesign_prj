import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import HeartItem from "../HeartItem";
import styles from "./KitsItem.module.css";

const KitsItem = (props) => {
  const image1 = props.data.kits[0].image;
  const image2 = props.data.kits[1].image || image1;
  const [hover, setHover] = useState(true);
  const [url, setUrl] = useState(image1);

  const handleImageChange = () => {
    if (hover) {
      setUrl(image1);
    } else setUrl(image2);
  };

  const handleFormatPrice = (x) => {
    console.log(x);
    return Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "vnd",
    }).format(x);
  };
  useEffect(() => {
    handleImageChange();
  }, [hover]);
  return (
    <div
      className={styles.kits_item}
      onMouseOver={() => {
        setHover(false);
      }}
      onMouseOut={() => setHover(true)}
    >
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.heart}>
            <HeartItem />
          </div>
          <div className={styles.image_sale}>
            <p>-{props.data.sale}%</p>
          </div>
          <div className={styles.image_kits}>
            <img className={styles.image_1} src={url} />
          </div>
          <div className={styles.cart}>
            <CartItem />
          </div>
        </div>
        <div className={styles.infor}>
          <p className={styles.name}>{props.data.title}</p>
          <p className={styles.price}>
            <span className={styles.price_no_sale}>
              {handleFormatPrice(props.data.price)}
            </span>{" "}
            {handleFormatPrice(props.data.price * (1 - props.data.sale / 100))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitsItem;
