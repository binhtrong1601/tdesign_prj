import React from 'react';
import { Footer, Headers, ListKits } from '../../components';

import styles from './NologoPage.module.css';

const NologoPage = () => {
  return (
    <div className={styles.product_page}>
      <Headers />
      <ListKits productName="nologoKits" />
      <Footer />
    </div>
  );
};

export default NologoPage;
