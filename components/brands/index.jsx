import React from 'react'

//styles
import styles from './index.module.css'

//data
import { brandsData } from '@/utils/data'

const Brands = ({page}) => {

    //data
    const data = brandsData.find(item => item.page === page)

  return (
    <div className={styles.brandsContainer}>
        <div className={styles.brandsContent}>
            {
                data.values.map((item, index) => (
                    <div className={styles.brandsImage} key={index}>
                        <img src={item.image} alt={item.index} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Brands