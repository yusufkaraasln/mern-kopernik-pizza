import Image from "next/image";
import React from "react";
import styles from "../styles/PizzaCard.module.css";
function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src="/pizza.png" height={300} width={300} alt="kopernik pizza" />
      <h1 className={styles.title}>RECEP IN THE HOUSE</h1>
      <span className={styles.price}>69.00₺</span>
      <p className={styles.desc}>
        Recep in the house, tek bir lokma ile bağımlılık yaptıran kopernik
        ürünümüz.
      </p>
    </div>
  );
}

export default PizzaCard;
