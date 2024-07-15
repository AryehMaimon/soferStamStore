import React from 'react'
import styles from "./style.module.css";
import Navbar from '../../component/Navbar';
import Content from '../../component/Content';
import Facts from '../../component/Facts';

export default function Home() {
  return (
    <div className={styles.home}>
<Navbar/>
<Content/>
<Facts/>
    </div>
  )
}
