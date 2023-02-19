import React from "react";
import styles from "./hotProduct.module.css";

const HotProduct = () => {
  return (
    <div className="container">
      <div className={styles.hot_product}>
        <div className={styles.content}>
          <p>
            Quần áo bóng đá câu lạc bộ Inter Milan mùa giải mới nhất 2022 – 2023
            sân nhà và sân khách hàng Việt Nam và hàng Thái Lan tại TDesign
            Sport:
            <br />
            ✓Sản phẩm chất lượng ✓Giá luôn tốt nhất ✓Được phép đổi trả ✓Giao
            hàng toàn quốc!
            <br />
            Tên đầy đủ:{" "}
            <span className={styles.border}>Inter Milan Football Club</span>
          </p>
        </div>
        <div className={styles.title}>
          <p>ÁO INTER MILAN SÂN NHÀ 2022 – 2023</p>
        </div>
        <div className={styles.image}>
          <img src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-inter-milan-san-nha-1.jpg" />
          <img src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-inter-milan-san-nha-2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default HotProduct;
