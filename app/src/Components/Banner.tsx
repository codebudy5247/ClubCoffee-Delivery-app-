import React, { useState } from 'react'
import styles from '../Styles/Banner.module.css'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "../Images/1.jpg",
        "../Images/2.jpg",
        "../Images/3.jpg",
      ];

      const handleArrow = (direction:any) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  return (
    <div className={styles.container}>
    <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <img src="../Images/arrowl.png" alt="" />
    </div>
    <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
      {images.map((img, i) => (
        <div className={styles.imgContainer} key={i}>
          <img src={img} alt=""   />
        </div>
      ))}
    </div>
    <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
      <img src="../Images/arrowr.png" />
    </div>
  </div>
  )
}

export default Banner