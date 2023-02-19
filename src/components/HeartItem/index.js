import React from "react";
import HeartOutlined from "@ant-design/icons/HeartOutlined";
import styles from "./HeartItem.module.css";
const HeartItem = () => {
  return (
    <div>
      <HeartOutlined className={styles.heart_item} />
    </div>
  );
};

export default HeartItem;
