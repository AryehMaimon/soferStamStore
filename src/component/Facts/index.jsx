import React, { useEffect, useRef } from 'react';
import styles from "./style.module.css";
import data from '../../facts.json';

export default function Facts() {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const moveList = () => {
      const firstItem = list.firstElementChild;
      const itemHeight = firstItem.offsetHeight;
      
      list.style.transition = `transform 1s`;
      list.style.transform = `translateY(-${itemHeight}px)`;
      
      setTimeout(() => {
        list.style.transition = 'none';
        list.style.transform = 'translateY(0)';
        list.appendChild(firstItem);
      }, 1000);
    };

    const interval = setInterval(moveList, 5000); // החלפה כל 5 שניות

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.facts}>
      <ul className={styles.innerFacts} ref={listRef}>
        {data.map((fact) => (
          <li key={fact.titel}>
            <h2>{fact.titel}</h2>
            <p>{fact.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}