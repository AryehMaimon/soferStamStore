import React from 'react'
import styles from "./style.module.css";
import { IoBagAddOutline } from "react-icons/io5";


export default function ItemCard({item}) {

  return (
    <div>
 <div className={styles.itemCard}>
            <img className={styles.itemImg} src={item.img} alt="" />
            <h3>{item.item}</h3>
            {/* <p>{item.description}</p> */}
            <p>{item.price}  ש"ח</p>
        <span className={styles.buyButton}>
<p>קנו עכשיו</p>
<p><IoBagAddOutline /></p>
     </span>
        </div>

    </div>
  )
}
