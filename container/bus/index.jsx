import React from 'react'

//styles
import styles from './index.module.css'

//components
import Banner from '@/components/banner'
import BusPanel from '@/components/home/slider/tabGroup/tabPanel/bus'
import Benchmark from '@/components/benchmark'
import Brands from '@/components/brands'
import Preposition from '@/components/preposition'

const BusContainer = () => {
  return (
    <div className={styles.busContainer}>
        <Banner
            title="Otobüs"
            description="Konforlu ve güvenli yolculuk için en uygun otobüs biletlerini görüntüleyin ve satın alın."
            image="/assets/images/bus.webp"
        >
            <BusPanel />
        </Banner>
        <Preposition page="bus" />
        <Benchmark page="bus" />
        <Brands page="bus" />
    </div>
  )
}

export default BusContainer