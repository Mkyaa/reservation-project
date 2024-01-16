import React from 'react'

//styles
import styles from './index.module.css'

//data
import { prepositionData } from '@/utils/data'

const PrepositionCard = ({ icon, title, description }) => {
    return (
        <div className={styles.prepositionItem}>
            <div className={styles.prepositionItemIcon}>
                {icon}
            </div>
            <div className={styles.prepositionItemTitle}>
                <h1>{title}</h1>
            </div>
            <div className={styles.prepositionItemDescription}>
                <p>{description}</p>
            </div>
        </div>
    )
}

const Preposition = ({page}) => {

    //data
    const data = prepositionData.filter(item => item.page === page)

    return (
        <div className={styles.prepositionContainer}>
            <div className={styles.prepositionContent}>
                <div className={styles.prepositionTitle}>
                    <h1>
                        Neden Kplus'ı Tercih Etmelisiniz?
                    </h1>
                </div>
                <div className={styles.prepositionBody}>
                    {
                        data[0].content.map((item, index) => (
                            <PrepositionCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Preposition