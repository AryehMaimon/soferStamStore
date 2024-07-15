import React from 'react'
import { useEffect,useState } from 'react';
import header1 from '../../images/header1.png'
import styles from "./style.module.css";
import { GiQuillInk } from "react-icons/gi";
import { RiArticleLine,RiMenu3Line } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

import Navbar from '../Navbar';

export default function Header({toggleMenu}) {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 500) { // Adjust this value based on your image height
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      
    return (
        <div>
            <div className={styles.headImg} > </div>
            <div className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
           
            <div className={styles.logoAndMenu}> <RiMenu3Line className={styles.menuIcon} onClick={toggleMenu}/> <GiQuillInk />  א.מ סופר סת"ם    </div>
            <div className={styles.artiAndQustAndAbout}>  <p>אודות</p> <p>מאמרים</p><p>שאלות נפוצות</p>    </div>
            <div className={styles.bagAndUser} > <FaRegCircleUser />  <p>התחבר</p>   <IoBagOutline /> <p>סל קניות</p> </div>
               
               
            </div>
           
        </div>
    )
}
