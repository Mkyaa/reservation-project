import React from 'react'

//styles
import styles from './index.module.css'

//icons
import { PiAirplaneTakeoffLight } from "react-icons/pi";

//loader
import {  Triangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loaderContent}>
                <PiAirplaneTakeoffLight
                    className={styles.loaderIcon}
                />
                <Triangle
                    visible={true}
                    color="#ccc"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}

export default Loader