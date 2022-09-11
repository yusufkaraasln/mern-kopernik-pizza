import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Product.module.css";
function Product() {
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
        <title>RECEP IN THE HOUSE</title>
        <meta
          name="description"
          content="Kopernik Pizzası Galaksinin En Sıcak Pizzası."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.imgContainer}>
        <Image src="/pizza.png" width={700} height={700} />
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.item}>
          <span className={styles.title}>RECEP IN THE HOUSE</span>
          <span className={styles.price}>69.00 ₺</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            consequatur distinctio aspernatur fuga error, at vitae cumque?
            Voluptatum ratione magni, laboriosam veniam laborum maxime eos esse
            expedita sunt aliquid a.
          </p>
        </div>
        <div className={styles.item}>
          <span className={styles.size}>Pizza Boyutu</span>
          <div className={styles.sizeContainer}>
            <i style={{fontSize: "2rem",color: "#D1411E", cursor: "pointer"}} class="fa-solid fa-pizza-slice"></i>
            <i style={{fontSize: "4rem",color: "#D1411E", cursor: "pointer"}}  class="fa-solid fa-pizza-slice"></i>
            <i style={{fontSize: "6rem",color: "#D1411E", cursor: "pointer"}}  class="fa-solid fa-pizza-slice"></i>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.extras}>Ektsta Malzeme</span>
          <div className={styles.extrasContainer}>
            <div className={styles.extraItem}>
              <input   className={styles.input} id="zeytin" type="checkbox" />
              <label htmlFor="zeytin">Zeytin</label>
            </div>
            <div className={styles.extraItem}>
              <input   className={styles.input} id="peynir" type="checkbox" />
              <label htmlFor="peynir">Peynir</label>
            </div>{" "}
            <div className={styles.extraItem}>
              <input   className={styles.input} id="sos" type="checkbox" />
              <label htmlFor="sos">Sos</label>
            </div>{" "}
            <div className={styles.extraItem}>
              <input  className={styles.input}  id="biber" type="checkbox" />
              <label htmlFor="biber">Biber</label>
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <input className={styles.number} defaultValue={1} type="number" />
          <button className={styles.button}  >Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
