import React from 'react'
import styles from "./style.module.css";
import { useParams } from 'react-router-dom';
import ItemCard from '../ItemCard';
import { useEffect,useState } from 'react';


export default function Store({ isOpenCart, setIsOpenCart,items }) {
   

    const { category = 'all' } = useParams();
    console.log('_________---------', items);
    let filteredItems = []
    if (category=="all"){
        filteredItems = items;
       
    }else{
         filteredItems = items.filter(item => item.category === category);
    }
    console.log(filteredItems);
    const categoryHeadline = category === "all" ? "המוצרים שלנו" : category;
    return (
        <div className={styles.store}>
         
            <h2 className={styles.categoryHeadline}> {categoryHeadline}:</h2>
            <div className={styles.itemsGrid}>
                {filteredItems.map(item => (
                    <ItemCard key={item.id} item={item} setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} />
                ))}
            </div>

        </div>
    )
}
