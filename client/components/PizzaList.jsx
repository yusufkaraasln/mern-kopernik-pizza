import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GALAKSİNİN EN SICAĞI</h1>
      <p className={styles.desc}>
        Kopernik Pizza olarak, pizza sektörüne "evlere servis"
        anlayışını getirerek, sektörde önemli bir yeniliğin öncülüğünü yapmış
        bulunuyoruz. Geliştirdiğimiz fikirler ve gerçekleştirdiğimiz
        projelerimiz ile sektörde yol gösterici bir konumdayız.
      </p>

        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
             
        </div>

    </div>
  );
}

export default PizzaList;
