import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";
function PizzaCard({ pizza }) {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <div>
          <Image
            className={styles.image}
            src={pizza.img}
            height={300}
            width={300}
            alt="kopernik pizza"
          />
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>{pizza.prices[0]}₺</span>
          <p className={styles.desc}>{pizza.description}</p>
        </div>
      </Link>
    </div>
  );
}




export default PizzaCard;
