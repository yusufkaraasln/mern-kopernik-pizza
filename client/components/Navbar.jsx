import React from "react";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.pizzaIcon}>
          <i
            style={{
              color: "#d1411e",
              fontSize: "1.5rem",
            }}
            class="fa-solid fa-pizza-slice"
          ></i>
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>Sipariş Ver</div>
          <div className={styles.text}>0 (216) 453 43 43</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Anasayfa</li>
          <li className={styles.listItem}>Pizzalar</li>
          <li className={styles.listItem}>Menü</li>
          <h1 className={styles.logo}>kopernik</h1>
          <li className={styles.listItem}>Kampanyalar</li>
          <li className={styles.listItem}>SSS</li>
          <li className={styles.listItem}>İletişim</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <i style={{fontSize: "32px",color:"#fff"}} class="fa-solid fa-cart-shopping"></i>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
