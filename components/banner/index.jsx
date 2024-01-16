import React from 'react'

//styles
import styles from './index.module.css'

const Banner = ({ title, description, image, children }) => {
  return (
    <div className={styles.bannerContainer}>
        <img src={image} alt={title} />
        <div className={styles.gradient}></div>
        <div className={styles.bannerContent}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={styles.searchBox}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Banner