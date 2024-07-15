import React from 'react'
import styles from "./style.module.css";
import { GiQuillInk } from "react-icons/gi";
import { RiArticleLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={styles.footer}>       
          
      <div > <GiQuillInk />  א.מ סופר סת"ם    </div>  
          <ul>
            <li></li>
            <li>חנות</li>
            <li>מאמרים</li>
            <li>צור קשר </li>
            <li>ווצאפ</li>
            <li>אימייל</li>
          </ul>
    </div>
  )
}
