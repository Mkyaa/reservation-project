import React from 'react'

//styles
import styles from './index.module.css'

//components
import Banner from '@/components/banner'
import FlightPanel from '@/components/home/slider/tabGroup/tabPanel/flight'
import Benchmark from '@/components/benchmark'
import Preposition from '@/components/preposition'
import Brands from '@/components/brands'

const FlightContainer = () => {
    return (
        <div className={styles.flightContainer}>
            <Banner
                title="Uçak"
                description="Uçak bileti arama ve rezervasyon işlemleri için doğru adrestesiniz."
                image="/assets/images/flight.jpg"
            >
                <FlightPanel />
            </Banner>
            <Preposition page="flight" />
            <Benchmark page="flight" />
            <Brands page="flight" />
        </div>

    )
}

export default FlightContainer