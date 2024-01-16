import React from 'react'

//styles
import styles from './index.module.css'

//components
import TabGroup from './tabGroup'

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.gradient}></div>
        <h1 className={styles.sliderTitle}>Türkiye'nin Seyahat Sitesi</h1>
        <TabGroup />
    </div>
  )
}

export default Slider