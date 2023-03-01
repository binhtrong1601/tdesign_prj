import React from 'react';
import styles from './DetailNologoPage.module.css';
import { AddCart, DetailKits, NewCarousel, Headers, Contact, Footer } from '../../components';

const DetailNologoPage = () => {
  return (
    <div className={styles.product_page_container}>
      <Headers />
      <div className="container">
        <div className={styles.product_page}>
          <NewCarousel productName="nologoKits" />
          <div>
            <DetailKits productName="nologoKits" />
            <AddCart productName="nologoKits" />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailNologoPage;
