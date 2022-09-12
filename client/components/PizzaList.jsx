import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
function PizzaList({ pizzas }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GALAKSİNİN EN SICAĞI</h1>
      <p className={styles.desc}>
        Kopernik Pizza olarak, pizza sektörüne "evlere servis" anlayışını
        getirerek, sektörde önemli bir yeniliğin öncülüğünü yapmış bulunuyoruz.
        Geliştirdiğimiz fikirler ve gerçekleştirdiğimiz projelerimiz ile
        sektörde yol gösterici bir konumdayız.
      </p>

      <div className={styles.wrapper}>
        {pizzas.map((pizza, index) => {
          return <PizzaCard key={index} pizza={pizza} />;
        })}
      </div>
    </div>
  );
}

export default PizzaList;
