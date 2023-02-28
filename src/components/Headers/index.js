import React from "react";

import { Dropdown, Space } from "antd";

import menuData from "../../data/menuData";
import Search from "../Search";
import logo from "../../imgs/tds-3.png";

import styles from "./headers.module.css";
import Cart from "../Cart";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_container}>
          <Link to="/" className={styles.logo}>
            <img style={{ maxWidth: 200 }} src={logo} />
          </Link>
          <div className={styles.menu}>
            {menuData.map((props) => {
              return (
                <>
                  {props.item !== undefined ? (
                    <Dropdown
                      menu={{
                        items: props.item,
                      }}
                    >
                      <a
                        className={styles.item}
                        onClick={(e) => e.preventDefault()}
                      >
                        <Space className={styles.title}>{props.title}</Space>
                      </a>
                    </Dropdown>
                  ) : (
                    <Space className={styles.title}>{props.title}</Space>
                  )}
                </>
              );
            })}
            <Search />
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
};
export default Headers;
