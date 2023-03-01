import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateEnglishNameShort } from '../../common';
import { Footer, Headers, KitsItem } from '../../components';
import styles from './ListProductOfClub.module.css';

const ListProductOfClub = () => {
  const { club: clubName } = useParams();
  const [kits, setKits] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/kitsClub');
      const dataFilter = data.filter((item) => clubName === generateEnglishNameShort(item.name));
      setKits(dataFilter);
      console.log(dataFilter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [clubName]);

  return (
    <div className="container">
      <Headers />
      <div className={styles.list_kits}>
        {kits.map((kit) => (
          <KitsItem data={kit} key={kit.id} id={kit.id} span={6} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ListProductOfClub;