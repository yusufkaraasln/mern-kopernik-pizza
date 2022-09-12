import React from 'react'
import styles from '../styles/AddButton.module.css'
function AddButton({setClosed}) {
  return (
    <div onClick={()=>setClosed(false)} className={styles.pizzaAdd}>Yeni Pizza Ekle</div>
  )
}

export default AddButton