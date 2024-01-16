import React from 'react'

//styles
import styles from './index.module.css'

//components
import Banner from '@/components/banner'
import HotelPanel from '@/components/home/slider/tabGroup/tabPanel/hotel'
import Preposition from '@/components/preposition'

const HotelContainer = () => {
    return (
        <div className={styles.hotelContainer}>
            <Banner
                title="Otel"
                description="En uygun otel fiyatlarını görüntüleyin ve rezervasyon yapın."
                image="/assets/images/hotel.jpg"
            >
                <HotelPanel />
            </Banner>
            <Preposition page="flight" />
        </div>
    )
}

export default HotelContainer