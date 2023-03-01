import React from 'react';
import styles from './DetailNationsKits.module.css';
import { AddCart, DetailKits, NewCarousel, Headers, Contact, Footer } from '../../components';

const DetailNationsKits = () => {
  return (
    <div className={styles.product_page_container}>
      <Headers />
      <div className="container">
        <div className={styles.product_page}>
          <NewCarousel productName="nationsKits" />
          <div>
            <DetailKits productName="nationsKits" />
            <AddCart productName="nationsKits" />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailNationsKits;
