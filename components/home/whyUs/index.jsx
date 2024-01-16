import React from 'react'

//styles
import styles from './index.module.css'

//icons
import { GiWallet, GiTakeMyMoney, GiSpeedometer } from 'react-icons/gi'
import { BiSolidPhoneCall } from 'react-icons/bi'

const WhyUs = () => {

    //data
    const whyUsData = [
        {
            id: 1,
            title: 'En Uygun Fiyatlar',
            description: 'Uçak bileti fiyatlarını karşılaştırın, en uygun fiyatlı biletleri bulun.',
            icon: <GiTakeMyMoney />
        },
        {
            id: 2,
            title: 'Kolay ve Hızlı',
            description: 'Biletinizi kolayca alın, hızlıca uçun.',
            icon: <GiSpeedometer />
        },
        {
            id: 3,
            title: 'Güvenli Ödeme',
            description: 'Ödemenizi güvenli bir şekilde gerçekleştirin.',
            icon: <GiWallet />
        },
        {
            id: 4,
            title: 'Müşteri Hizmetleri',
            description: '7/24 müşteri hizmetlerimiz ile her zaman yanınızdayız.',
            icon: <BiSolidPhoneCall />
        }
    ]

    return (
        <div className={styles.whyUsContainer}>
            <div className={styles.whyUsContent}>
                <h1 className={styles.whyUsTitle}>Neden Bizi Tercih Etmelisiniz?</h1>
                <div className={styles.whyUsCardContainer}>
                    {whyUsData.map((item) => (
                        <div className={
                            `${styles.whyUsCard}
                            ${styles[`card_${item.id}`]}`
                        }>
                            <div className={styles.whyUsIcon}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyUs