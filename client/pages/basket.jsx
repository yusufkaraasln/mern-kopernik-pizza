import React from "react";
import styles from "../styles/Basket.module.css";
import Image from "next/image";
import Head from "next/head";
function Basket() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <title>Sepetim</title>
        <meta
          name="description"
          content="Kopernik Pizzası Galaksinin En Sıcak Pizzası."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th style={{ textAlign: "justify" }}>Ürün</th>
            <th style={{ textAlign: "justify" }}>İsim</th>
            <th style={{ textAlign: "justify" }}>Ekstralar</th>
            <th style={{ textAlign: "justify" }}>Fiyat</th>
            <th style={{ textAlign: "justify" }}>Miktar</th>
            <th style={{ textAlign: "justify" }}>Toplam</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>RECEP IN THE HOUSE</span>
            </td>
            <td>
              <span className={styles.extras}>Zeytin, Peynir</span>
            </td>

            <td>
              <span className={styles.price}>31.00₺</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.price}>69.00₺</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Toplam Sepet</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Ürün Tutarı:</b>69.00₺
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>KDV:</b>0.00₺
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Toplam Tutar:</b>69.00₺
          </div>
          <button className={styles.button}>Ödeme Yap</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
