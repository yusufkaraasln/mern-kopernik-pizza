import React from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
function Index({ orders, products }) {
  const status = ["Hazırlanıyor", "Yola Çıktı", "Teslim Edildi"];

  const [productsCopy, setProductCopy] = React.useState(products);
  const [ordersCopy, setOrderCopy] = React.useState(orders);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setProductCopy(productsCopy.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const item = ordersCopy.filter((order) => order._id === id)[0];
      const currentStatus = item.status;

      const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
        status: currentStatus + 1,
      });

      setOrderCopy([
        res.data,
        ...ordersCopy.filter((order) => order._id !== id),
      ]);
      console.log(res.data);
      console.log(ordersCopy);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Ürünler</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Resim</th>
              <th>ID</th>
              <th>İsim</th>
              <th>Fİyat</th>
              <th>Ayarlar</th>
            </tr>
          </tbody>
          <tbody>
            {productsCopy.map((product, index) => (
              <tr key={index} className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>{product.prices[0]}₺</td>
                <td>
                  <button className={styles.button}>Düzenle</button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className={styles.button}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Siparişler</div>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>ID</th>
              <th>Müşteri</th>
              <th>Toplam</th>
              <th>Ödeme Türü</th>
              <th>Durum</th>
              <th>Ayarlar</th>
            </tr>
          </tbody>
          <tbody>
            {ordersCopy.map((order, index) => (
              <tr className={styles.trTitle}>
                <td>{order._id.toString().slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td>{order.method === 0 ? "Kapıda Ödeme" : "Online Ödeme"}</td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleUpdate(order._id)}
                  >
                    Sonraki Aşama
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const orders = await axios.get("http://localhost:3000/api/orders");
  const products = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      orders: orders.data,
      products: products.data,
    },
  };
};

export default Index;
