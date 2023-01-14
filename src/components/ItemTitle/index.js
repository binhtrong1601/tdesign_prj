import { useState } from "react";
import styles from './header.module.css';

const ItemTitle = ({ children, title }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.menu_item}   
    onMouseEnter={() => setShowDropdown(true)}
    onMouseLeave={() => setShowDropdown(false)}>
      <div className={styles.dropdown}>
        <div
          className={styles.dropbtn}
        >
          {title}
        </div>
        {showDropdown === true && (
          <div
            className={styles.dropdown_content}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
export default ItemTitle;
