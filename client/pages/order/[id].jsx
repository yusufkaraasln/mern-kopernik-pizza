import React from "react";
import styles from "../../styles/Order.module.css";
import Head from "next/head";

import axios from "axios";

function Order({ order }) {
  let status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.progress;
    if (index - status > 1) return styles.undone;
  };

  const KDV = (order.total * 18) / 100;

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
        <title>Sipariş</title>
        <meta
          name="description"
          content="Kopernik Pizzası Galaksinin En Sıcak Pizzası."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tr}>
                <th style={{ textAlign: "justify" }}>Sipariş ID</th>
                <th style={{ textAlign: "justify" }}>Müşteri</th>
                <th style={{ textAlign: "justify" }}>Adres</th>
                <th style={{ textAlign: "justify" }}>Toplam</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <span className={styles.id}>{order.id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>

                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>

                <td>
                  <span className={styles.total}>{order.total} ₺</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <i
              style={{
                fontSize: "32px",
              }}
              className="fa-regular fa-credit-card"
            ></i>
            <span className={styles.statusText}>Ödeme</span>
            <div className={styles.checkIcon}>
              <i
                style={{
                  background: "limegreen",
                  color: "white",
                  padding: "7px",
                  borderRadius: "50%",
                  fontSize: "16px",
                  marginRight: "10px",
                }}
                className="fa-solid fa-check"
              ></i>
            </div>
          </div>
          <div className={statusClass(1)}>
            <i
              style={{
                fontSize: "32px",
              }}
              className="fa-solid fa-cubes-stacked"
            ></i>
            <span className={styles.statusText}>Hazırlanıyor</span>
            <div className={styles.checkIcon}>
              <i
                style={{
                  background: "limegreen",
                  color: "white",
                  padding: "7px",
                  borderRadius: "50%",
                  fontSize: "16px",
                  marginRight: "10px",
                }}
                className="fa-solid fa-check"
              ></i>
            </div>
          </div>
          <div className={statusClass(2)}>
            <i
              style={{
                fontSize: "32px",
              }}
              className="fa-solid fa-motorcycle"
            ></i>
            <span className={styles.statusText}>Yolda</span>
            <div className={styles.checkIcon}>
              <i
                style={{
                  background: "limegreen",
                  color: "white",
                  padding: "7px",
                  borderRadius: "50%",
                  fontSize: "16px",
                  marginRight: "10px",
                }}
                className="fa-solid fa-check"
              ></i>
            </div>
          </div>
          <div className={statusClass(3)}>
            <i
              style={{
                fontSize: "32px",
              }}
              className="fa-solid fa-bag-shopping"
            ></i>
            <span className={styles.statusText}>Teslim Edildi</span>
            <div className={styles.checkIcon}>
              <i
                style={{
                  background: "limegreen",
                  color: "white",
                  padding: "7px",
                  borderRadius: "50%",
                  fontSize: "16px",
                  marginRight: "10px",
                }}
                className="fa-solid fa-check"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Toplam Sepet</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Ürün Tutarı:</b>
            {order.total}₺
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>KDV:</b>
            {KDV}₺
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Toplam Tutar:</b>
            {KDV + order.total}₺
          </div>
          <button disabled className={styles.button}>
            Ödenmiş
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get("http://localhost:3000/api/orders/" + params.id);
  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
