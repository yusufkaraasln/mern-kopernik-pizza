import React from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

function Add({ setClosed }) {
  const [file, setFile] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [prices, setPrices] = React.useState([]);
  const [extras, setExtras] = React.useState([]);
  const [extra, setExtra] = React.useState(null);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;

    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtras((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads" );


    try {
        const upload = await axios.post("https://api.cloudinary.com/v1_1/dvhvcl9wj/image/upload", data);    

            const {url} = upload.data
            const newProduct = {
                title,
                description,
                prices,
                extras,
                img: url

            }
            await axios.post("http://localhost:3000/api/products", newProduct)
            setClosed(true)


    } catch (e) {
        console.log(e);
    }


  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClosed(true)} className={styles.close}>
          X
        </span>
        <h1>Yeni Pizza Ekle</h1>
        <div className={styles.item}>
          <label className={styles.label}>Resim Seçin</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Başlık</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Açıklama</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Fiyatlar</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Küçük"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Orta"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Büyük"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra Malzeme</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Malzeme"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Fiyat"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Ekle
            </button>
          </div>
          <div className={styles.extraItems}>
            {extras.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Oluştur
        </button>
      </div>
    </div>
  );
}

export default Add;
