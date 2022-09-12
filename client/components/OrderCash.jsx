import React from 'react'
import styles from '../styles/OrderCash.module.css'
function OrderCash({createOrder,total}) {

    const [customer, setCustomer] = React.useState("")
    const [address, setAddress] = React.useState("")

    const handleClick = () => {
        createOrder({customer,address,total,method:0})
    }

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Kapıda Ödeme Ücretiniz {total}₺'dir</h1>
      <div className={styles.item}>
        <label className={styles.label}>Ad Soyad</label>
        <input
          placeholder="Ad Soyad"
          type="text"
          className={styles.input}
          onChange={(e) => setCustomer(e.target.value)}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Telefon Numarası</label>
        <input
          type="text"
          placeholder="Telefon Numarası"
          className={styles.input}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Adres</label>
        <textarea
        style={{
            resize: "none",
            padding: "10px"
        }}
          rows={5}
          placeholder="Adres"
          type="text"
          className={styles.textarea}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={handleClick}>
        Sipariş Ver
      </button>
    </div>
  </div>
  )
}

export default OrderCash