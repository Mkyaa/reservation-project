import React from 'react'

//styles
import styles from './index.module.css'

//components
import Image from 'next/image'

const NoData = ({text}) => {
  return (
    <div className={styles.noDataContainer}>
        <Image src="/assets/images/no-data.png" alt="no data" width={150} height={150} />
        <p>{text}</p>
    </div>
  )
}

export default NoData