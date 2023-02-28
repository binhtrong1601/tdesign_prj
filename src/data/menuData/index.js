import { Link } from "react-router-dom";
import styles from "./data.module.css";

const menuData = [
  {
    id: "1",
    title: "TRANG CHỦ",
  },
  {
    id: "2",
    title: "GIỚI THIỆU",
  },
  {
    id: "3",
    title: "ÁO BÓNG ĐÁ",
    item: [
      {
        label: (
          <Link to="/product" className={styles.link}>
            <p>ÁO CÂU LẠC BỘ</p>
          </Link>
        ),
        key: "1",
      },
      {
        label: (
          <Link to="/nologo" className={styles.link}>
            <p>ÁO KHÔNG LOGO</p>
          </Link>
        ),
        key: "2",
      },
      {
        label: (
          <Link to="/nations" className={styles.link}>
            <p>ÁO ĐỘI TUYỂN</p>
          </Link>
        ),
        key: "3",
      },
      {
        label: (
          <Link to="/nations" className={styles.link}>
            <p>ÁO THIẾT KẾ</p>
          </Link>
        ),
        key: "4",
      },
    ],
  },
  {
    id: "4",
    title: "GIÀY",
    item: [
      {
        label: "GIÀY NIKE",
        key: "1",
      },
      {
        label: "GIÀY ADIDAS",
        key: "2",
      },
      {
        label: "GIÀY KAMITO",
        key: "3",
      },
      {
        label: "GIÀY MIZUNO",
        key: "4",
      },
    ],
  },
  { id: "5", title: "KHUYẾN MÃI" },

  {
    id: "6",
    title: "PHỤ KIỆN",
    item: [
      {
        label: "GĂNG TAY THỦ MÔN",
        key: "1",
      },
      {
        label: "CÚP LƯU NIỆM",
        key: "2",
      },
      {
        label: "BÓNG THI ĐẤU",
        key: "3",
      },
      {
        label: "BĂNG CUỐN CƠ",
        key: "4",
      },
    ],
  },
];
export default menuData;
