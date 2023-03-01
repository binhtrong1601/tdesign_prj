import { Col, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import KitsItem from '../KitsItem';
import styles from './ListKits.module.css';

const ListKits = (props) => {
  const [kits, setKits] = useState([]);

  const handleFetchProduct = async () => {
    const data = await axios.get(`http://localhost:3001/${props.productName}`);
    console.log(data);
    setKits(data.data);
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);
  console.log(kits);
  return (
    <div className="container">
      <div className={styles.list_kits}>
        {kits.map((kits) => (
          <KitsItem data={kits} key={kits.id} id={kits.id} span={6} />
        ))}
      </div>
    </div>
  );
};

export default ListKits;
