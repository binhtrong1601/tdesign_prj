import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ItemTitle from "../ItemTitle";
import styles from './midHeader.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <img
            style={{ maxWidth: 60 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
          />
        </div>
        <div className={styles.menu}>
          <ItemTitle title={"Men"}>
            <div>Test</div>
          </ItemTitle>
          <ItemTitle title={"Shoes"}>
            <div>Test1</div>
          </ItemTitle>
          <ItemTitle title={"Shoes"}>
            <div>Test2</div>
          </ItemTitle>
          <ItemTitle title={"Shoes"}>
            <div>Test3</div>
          </ItemTitle>
        </div>
        <div className={styles.box_search}>
          <div className={styles.search}>
            <div className={styles.search_btn}>
              <input
                type="search"
                className={styles.search_input}
                placeholder="Search"
              />
              <div className={styles.search_icon}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.icon_item}>
              <FontAwesomeIcon icon={faHeart} size="xl" />
            </div>
            <div className={styles.icon_item}>
              <FontAwesomeIcon icon={faCartShopping} size="xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
