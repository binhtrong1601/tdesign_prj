import React from 'react';
import styles from './DetailProductPage.module.css';
import { AddCart, DetailKits, NewCarousel, Headers, Contact, Footer } from '../../components';

const DetailProductPage = () => {
  return (
    <div className={styles.product_page_container}>
      <Headers />
      <div className="container">
        <div className={styles.product_page}>
          <NewCarousel productName="kitsClub" />
          <div>
            <DetailKits productName="kitsClub" />
            <AddCart productName="kitsClub" />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProductPage;
