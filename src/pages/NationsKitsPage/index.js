import React from "react";
import { Footer, Headers, ListKits } from "../../components";

import styles from "./NationsKitsPage.module.css";

const NationsKitsPage = () => {
  return (
    <div className={styles.product_page}>
      <Headers />
      <ListKits productName="nationsKits" />
      <Footer />
    </div>
  );
};

export default NationsKitsPage;
