import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./style.module.css";
import { IoBagAddOutline } from "react-icons/io5";
import { useCart } from '../../contexts/cartContext';


export default function ItemCard({item, isOpenCart, setIsOpenCart}) {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem(item);
    setIsOpenCart(true)
  }
  const handleItemDetailsClick = () => {
    navigate(`/item/${item.barcode}`);
  };

  return (
    <div>
 <div className={styles.itemCard}>
           <div className={styles.itemDetails} onClick={handleItemDetailsClick}>
            <img className={styles.itemImg} src={item.img} alt="" />
            <h3>{item.item}</h3>
            </div>
            <p>{item.price}  ש"ח</p>
        <span className={styles.buyButton} onClick={handleAddToCart}>
<div>קנו עכשיו</div>
<IoBagAddOutline />
     </span>
        </div>

    </div>
  )
}
