import React from 'react'
import styles from "./style.module.css";
import { IoBagAddOutline } from "react-icons/io5";
import { useCart } from '../../contexts/cartContext';


export default function ItemCard({item, isOpenCart, setIsOpenCart}) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
    setIsOpenCart(true)
  }


  return (
    <div>
 <div className={styles.itemCard}>
            <img className={styles.itemImg} src={item.img} alt="" />
            <h3>{item.item}</h3>
            {/* <p>{item.description}</p> */}
            <p>{item.price}  ש"ח</p>
        <span className={styles.buyButton} onClick={handleAddToCart}>
<p>קנו עכשיו</p>
<p><IoBagAddOutline /></p>
     </span>
        </div>

    </div>
  )
}
