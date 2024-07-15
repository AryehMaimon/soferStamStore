import React from 'react'
import styles from "./style.module.css";
import { useParams } from 'react-router-dom';
import ItemCard from '../ItemCard';
import data from '../../../src/items.json'


export default function Store() {

    const items = data
    const { category } = useParams();
    console.log('_________---------', category);
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
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>

        </div>
    )
}
