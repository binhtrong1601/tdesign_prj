//CÁI NÀY LÀ LIST CÁC CLUBITEMS Ở TRÊN
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { generateEnglishNameShort } from '../../common';
import ClubItems from '../ClubItems';

import styles from './clubs.module.css';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  const handleFetchProduct = async () => {
    try {
      const clubData = await axios.get(`http://localhost:3001/kitsclub`);
      const result = clubData.data.filter((obj, index, arr) => {
        return index === arr.findIndex((t) => t.name === obj.name);
      });
      setClubs(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleFetchProduct();
  }, []);

  const handleClick = () => {};

  return (
    <div className={styles.clubs}>
      <div className="container">
        <div className={styles.clubs_container}>
          <p className={styles.title}>CLICK CHUỘT VÀO LOGO CLB ĐỂ XEM CHI TIẾT ÁO ĐẤU</p>
          <div className={styles.list_club}>
            {clubs.map((club) => (
              <ClubItems key={club.key} id={generateEnglishNameShort(club.name)} data={club} onClick={handleClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
