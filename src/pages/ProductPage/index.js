import { Footer } from "antd/es/layout/layout";
import React from "react";
import { Headers, ListKits } from "../../components";

import styles from "./ProductPage.module.css";
const ProductPage = () => {
  return (
    <div className={styles.product_page}>
      <Headers />
      <ListKits productName="kitsClub" />
      <Footer />
    </div>
  );
};

export default ProductPage;
