import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPizzaToBasket } from "../../redux/basketSlice";


function Product({ pizza }) {
  const [size, setSize] = React.useState(0);
  const [price, setPrice] = React.useState(pizza.prices[0]);
  const [exArray, setExArray] = React.useState([]);
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, extra) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(extra.price);
      setExArray([...exArray, extra]);
    } else {
      changePrice(-extra.price);
      setExArray(exArray.filter((item) => item !== extra));
    }
  };

  const handleClick = () => {

      dispatch(addPizzaToBasket({...pizza,exArray,price,quantity}))

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
        <title>sdfasd</title>
        <meta
          name="description"
          content="Kopernik Pizzası Galaksinin En Sıcak Pizzası."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.imgContainer}>
        <Image src={pizza.img} width={700} height={700} />
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.item}>
          <span className={styles.title}>{pizza.title}</span>
          <span className={styles.price}>{price} ₺</span>
          <p className={styles.desc}>{pizza.description}</p>
        </div>
        <div className={styles.item}>
          <span className={styles.size}>Pizza Boyutu</span>
          <div className={styles.sizeContainer}>
            <i
              onClick={() => handleSize(0)}
              style={{ fontSize: "2rem", color: "#D1411E", cursor: "pointer" }}
              class="fa-solid fa-pizza-slice"
            ></i>
            <i
              onClick={() => handleSize(1)}
              style={{ fontSize: "4rem", color: "#D1411E", cursor: "pointer" }}
              class="fa-solid fa-pizza-slice"
            ></i>
            <i
              onClick={() => handleSize(2)}
              style={{ fontSize: "6rem", color: "#D1411E", cursor: "pointer" }}
              class="fa-solid fa-pizza-slice"
            ></i>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.extras}>Ektsta Malzeme</span>
          <div className={styles.extrasContainer}>
            {pizza.extras.map((extra, index) => (
              <div key={index} className={styles.extraItem}>
                <input
                  className={styles.input}
                  name={extra.text}
                  id={extra.text}
                  type="checkbox"
                  onChange={(e) => handleChange(e, extra)}
                />
                <label htmlFor={extra.text}>{extra.text}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.submit}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.number}
            defaultValue={1}
            type="number"
          />
          <button className={styles.button} onClick={handleClick}>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);

  return { props: { pizza: res.data } };
};

export default Product;
