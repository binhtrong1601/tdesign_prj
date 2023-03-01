import React, { useEffect, useState } from 'react';
import styles from './ItemProduct.module.css';
import axios from 'axios';

import HandleFormatPrice from '../HandleFormatPrice';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <Link to={`nologo/${props.id}`} style={{ textDecoration: 'none' }}>
      <div className={styles.item_product}>
        <div className={styles.item_container}>
          <div className={styles.image}>
            <img src={props.data.background} />
          </div>
          <div className={styles.content}>
            <div className={styles.infor}>
              <div className={styles.name} style={{ fontSize: 21 }}>
                {props.data.name}
              </div>
              <div className={styles.price} style={{ fontSize: 21 }}>
                {HandleFormatPrice(props.data.price)}
              </div>
            </div>
            <div className={styles.type} style={{ fontSize: 21 }}>
              {props.data.type}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
const ListProduct = () => {
  const [products, setProducts] = useState([]);

  const handleFetchProduct = async () => {
    const data = await axios.get('http://localhost:3001/nologoKits');
    console.log(data);
    setProducts(data.data);
  };
  useEffect(() => {
    handleFetchProduct();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container">
      <div className={styles.list_product}>
        <p className={styles.title}>NHỮNG MẪU ÁO THIẾT KẾ MỚI NHẤT</p>
        <div className={styles.list_item}>
          <Carousel className={styles.carousel} responsive={responsive}>
            {products.map((product) => (
              <Item key={product.id} data={product} id={product.id} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
