import React from 'react'
import styles from "./style.module.css";

import { useCart } from '../../contexts/cartContext'


export default function Cart({ isOpenCart, setIsOpenCart }) {
  const { items, clearCart, amountPlus, amountMinus, total } = useCart();

  const closeCart = () => {
    setIsOpenCart(false)
  }


  return (
    <div className={styles.Cart}>
      <div className={styles.cartHeadline}><h2>סל קניות    </h2><h2 className={styles.closeCart} onClick={closeCart}>x</h2> </div>
      <ul className={styles.cartItemsList}>
        {items.map(item =>
          <li className={styles.cartItem}>
            <img className={styles.cartImg} src={item.img} alt={item.item} />
            <h3 className={styles.cartItemName}>{item.item}</h3>
            <div className={styles.CartPrice}>מחיר ליחידה {item.price} ש"ח</div>
            <span className={styles.CartPrice}> כמות:
              <button className={styles.amountButton} onClick={() => amountMinus(item._id)}>-</button>
              {item.amountInCart}
              <button className={styles.amountButton} onClick={() => amountPlus(item._id)} >+</button></span>
          </li>
        )}
      </ul>
      <div className={styles.cartFooter}  >

        <div>סכום ביניים: {total} ש"ח</div>
        <button className={styles.toPayButton} >מעבר לתשלום</button>
      </div>
    </div>
  )
}
