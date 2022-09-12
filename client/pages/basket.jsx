import React from "react";
import styles from "../styles/Basket.module.css";
import Image from "next/image";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { resetBasket } from "../redux/basketSlice";
import OrderCash from "../components/OrderCash";
function Basket() {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [cash, setCash] = React.useState(false);
  const KDV = (basket.totalPrice * 18) / 100;
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(resetBasket());
        
        router.push("/order/" + res.data._id);
      } 
    } catch (error) {
      console.log(error);
    }
  };

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
          <tbody>
            <tr className={styles.tr}>
              <th style={{ textAlign: "justify" }}>Ürün</th>
              <th style={{ textAlign: "justify" }}>İsim</th>
              <th style={{ textAlign: "justify" }}>Ekstralar</th>
              <th style={{ textAlign: "justify" }}>Fiyat</th>
              <th style={{ textAlign: "justify" }}>Miktar</th>
              <th style={{ textAlign: "justify" }}>Toplam</th>
            </tr>
            {basket.products.map((item) => (
              <tr>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{item.title}</span>
                </td>
                <td>
                  {item.extras.map((extra) => (
                    <span className={styles.extra}>{extra.text}, </span>
                  ))}
                </td>

                <td>
                  <span className={styles.price}>{item.price} ₺</span>
                </td>
                <td>
                  <span className={styles.quantity}>
                    {parseInt(item.quantity)}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>
                    {parseInt(item.quantity * item.price)} ₺
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Toplam Sepet</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Ürün Tutarı:</b>
            {basket.totalPrice}₺
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>KDV:</b>
            {KDV}₺
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Toplam Tutar:</b>
            {basket.totalPrice + KDV}₺
          </div>
          {open ? (
            <div className={styles.payment}>
              <button className={styles.cash} onClick={() => setCash(true)}>
                Kapıda Ödeme
              </button>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              Ödeme Yap
            </button>
          )}
        </div>
      </div>

      {cash && (
        <OrderCash createOrder={createOrder} total={basket.totalPrice + KDV} />
      )}
    </div>
  );
}

export default Basket;
