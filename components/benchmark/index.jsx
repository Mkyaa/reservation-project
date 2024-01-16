import React from 'react'

//styles
import styles from './index.module.css'

//data
import { benchmarkData } from '@/utils/data'

const Benchmark = ({page}) => {

    //data
    const data = benchmarkData.find(item => item.page === page)

  return (
    <div className={styles.benchmarkContainer}>
        <div className={styles.benchmarkContent}>
            {
                data.data.map((item, index) => (
                    <div className={styles.benchmarkItem} key={index}>
                        <div className={styles.benchmarkItemTitle}>
                            {item.title}
                        </div>
                        <div className={styles.benchmarkItemValue}>
                            {item.description}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Benchmark