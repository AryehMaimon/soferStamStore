import React from 'react'
import styles from "./style.module.css";
import data from '../../../src/items.json'
import { RiPlayReverseFill,RiMenu3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


export default function Navbar({ isMenuOpen }) {
  const items= data
  const categories =[...new Set(items.map(item => item.category))]
    
 

  return (

    <div className={`${styles.Navbar} ${isMenuOpen ? styles.open : ''}`}>
          
      <ul className={styles.menu}>
      <Link to={`/products/all`}>
            <li  className={styles.categoryList}>המוצרים שלנו</li>
            </Link>
           {categories.map((c)=><li className={styles.categoryList} key={c}>
           <Link to={`/products/${c}`}>
           {c} <RiPlayReverseFill className={styles.icon} />
           </Link>
           </li>
        )}
    
        </ul>
    </div>
  )
}
