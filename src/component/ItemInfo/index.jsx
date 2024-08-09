import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/cartContext';
import styles from "./style.module.css";

export default function ItemInfo({ items, setIsOpenCart }) {
    const { barcode } = useParams();
    const { addItem, amountPlus, amountMinus } = useCart();
    const item = items.find(item => item.barcode === barcode);
    const [localQuantity, setLocalQuantity] = useState(1);

    if (!item) {
        return <div>Product not found</div>;
    }
    const handleIncrease = () => {
        if (localQuantity < item.quantity) {
            setLocalQuantity(prev => prev + 1);
        }
    };

    const handleDecrease = () => {
        if (localQuantity > 1) {
            setLocalQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        addItem({ ...item, amountInCart: localQuantity });
        setIsOpenCart(true)
    };
    return (
        <div className={styles.ItemInfo}>
            <h2>{item.item}</h2>
            <img src={item.img} alt={item.item} className={styles.ItemInfoImg} />
            <div className={styles.ItemInfoText}>
            <p>{item.description}</p>
            <p>מחיר ליחידה: {item.price} ש"ח</p>
            <div> בחר כמות
            <button className={styles.amountButton} onClick={handleDecrease}>-</button>
            {localQuantity} 
            <button className={styles.amountButton} onClick={handleIncrease} >+</button>
            </div>
            <button onClick={handleAddToCart}>הוסף לעגלה</button>
            </div>
        </div>
    );
}
