import React from 'react'

//styles
import styles from './index.module.css'

const Main = ({children}) => {
  return (
    <div className={styles.mainContainer}>
        {children}
    </div>
  )
}

export default Main