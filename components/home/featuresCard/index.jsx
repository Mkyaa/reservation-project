import React from 'react'

//styles
import styles from './index.module.css'

//react-icons
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaHandHoldingUsd, FaPhoneAlt, FaGlobe } from 'react-icons/fa'

const FeaturesCard = () => {

    const featuresData = [
        {
            id: 1,
            title: "Ayda 25 Milyondan Fazla Ziyaretçi",
            description:
                "Türkiye'nin en büyük online seyahat platformu olarak, her ay 25 milyondan fazla ziyaretçiye ulaşıyoruz.",
            icon: <FaPeopleGroup />
        },
        {
            id: 2,
            title: "En Uygun Fiyat Garantisi",
            description:
                "Tüm havayolları ve otellerle çalışarak, en uygun fiyatları sunuyoruz.",
            icon: <FaHandHoldingUsd />
        },
        {
            id: 3,
            title: "7/24 Destek",
            description:
                "Uzman seyahat danışmanlarımızla 7/24 hizmetinizdeyiz.",
            icon: <FaPhoneAlt />
        },
        {
            id: 4,
            title: "Türkiye'nin En Büyük Online Seyahat Platformu",
            description:
                "Türkiye'nin en büyük online seyahat platformu olarak, her ay 25 milyondan fazla ziyaretçiye ulaşıyoruz.",
            icon: <FaGlobe />
        }
    ];

    return (
        <div className={styles.featuresCardContainer}>
            {
                featuresData.map((item, index) => (
                    <div key={index} className={styles.featuresCard}>
                        <div key={index} className={`${styles.featuresCardIcon} ${styles[`icon_${index + 1}`]}`}>
                            {item.icon}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturesCard