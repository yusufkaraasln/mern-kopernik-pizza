import React from "react";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <i 
          style={{
            color: "#d1411e",
            fontSize: "10rem",
          }}
        class="fa-solid fa-pizza-slice"></i>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Galaksinin en sıcak piiizzzasıı pizzzassıı kooooopernikk
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Restoranlarımız
          </h1>
          <p className={styles.text}>
            Güngören  5. Sokak Karşısı
            <br /> İstanbul, 46743
            <br />+90 (532) 654-54-54
          </p>
          <p className={styles.text}>
            Çark Caddesi 2. Sokak Yanı
            <br /> Sakarya, 46743
            <br />+90 (532) 654-54-54
          </p>
          <p className={styles.text}>
            Alibeyköt 1. Cadde Sonu
            <br /> İstanbul, 46743
            <br />+90 (532) 654-54-54
          </p>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>
            Çalışma Saatleri
          </h1>
          <p className={styles.text}>
            Pazartesi - Cuma
            <br />
            09:00 - 23:00
          </p>
          <p className={styles.text}>
            Cuma - Pazar
            <br />
            10:00 - 21:00
          </p>

        </div>
      </div>
    </div>
  );
}

export default Footer;
