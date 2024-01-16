"use client"
import React from 'react'

//styles
import styles from './index.module.css'

//data
import { exploreData } from '@/utils/data'

//navigate
import { useRouter } from 'next/navigation'


const Explore = () => {

    const navigate = useRouter()

    //explore with flights
    const handleExplore = (item) => {
        navigate.push(`/search/flight/?from=İstanbul%20Sabiha%20Gökçen%20Havalimanı&to=${item.airport}&departure=2024-02-01&arrival=2024-02-01&passenger=1&flight_class=Economy&oneWay=true&roundTrip=false`)
    }

        return (
            <div className={styles.exploreContainer}>
                <div className={styles.exploreContent}>
                    <div className={styles.exploreTitle}>
                        <h1>Keşfet</h1>
                    </div>
                    <div className={styles.exploreBody}>
                        {
                            exploreData.map((item, index) => (
                                <div key={index} className={styles.exploreCard} onClick={() => handleExplore(item)}>
                                    <img src={item.image} alt={item.title} />
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

    export default Explore