import React from "react";
import styles from "./footer.module.css";

import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";

import InputEmail from "../InputEmail";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.item}>
            <p className={styles.title}>VỀ TDESIGN SPORT</p>
            <p className={styles.item_content}>
              Hệ thống bán lẻ đồ thể thao TDesign Sport là đơn vị chuyên sản
              xuất và phân phối các sản phẩm thể thao chuyên nghiệp. Tại đây bạn
              có thể dễ dàng mua Quần áo và dụng cụ thể thao chất lượng cao,
              chính hãng... Địa chỉ: 204 Trần Duy Hưng, quận Cầu Giấy, TP Hà Nội
            </p>
            <p className={styles.hotline}>
              Hotline: <span className={styles.mobile}>0948045658</span>
            </p>
            <div className={styles.icon}>
              <FacebookOutlined className={styles.item_icon} />
              <InstagramOutlined className={styles.item_icon} />
              <TwitterOutlined className={styles.item_icon} />
              <MailOutlined className={styles.item_icon} />
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.title}>ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</p>
            <p className={styles.item_content}>
              Hãy nhập email của bạn để chúng tôi gửi email ngay khi có thông
              tin về những chương trình khuyến mãi mới.
            </p>
            <div className={styles.search}>
              <InputEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
