import React from 'react'
import styles from "./style.module.css";
import { Routes, Route } from 'react-router-dom';
import Store from '../Store';
import { useEffect,useState } from 'react';
import ItemInfo from '../ItemInfo';
import { useParams } from 'react-router-dom';
import ItemCard from '../ItemCard';
import data from '../../../src/items.json'
import axios from 'axios';


export default function Content({isMenuOpen,setIsOpenCart,isOpenCart}) {
  const [items, setItems] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:3030/store/all') 
          .then(response => {
            setItems(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div className={`${styles.content} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.intro}>אצלינו בא.מ סופר סת"ם עבודת הכתיבה מקבלת את מלוא הכבוד הנדרש מאומנות המוגדרת בלשון חכמים "מלאכת שמים". תשומת לב לפרטים הקטנים בכל שלבי התהליך, החל מבחירת קלף ברמה הגבוהה ביותר המיוצר ע"י אנשים יראי שמים, הדיו האיכותי, קולמוס מנוצה בייצור עצמי והכתיבה במתינות ובנחת תוך הקפדה על כל ככלי ההלכה. תהליך שבסופו דברי הסת"ם יוצאים ברמה הגבוהה ביותר.</div>
        <Routes>
             <Route path="/products/:category" element={<Store setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} items={items}/>} />
             <Route path="/products/all" element={<Store setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} items={items}/>} />
             <Route path="/item/:barcode" element={<ItemInfo setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} items={items} />} />

        </Routes>
    </div>
  )
}
