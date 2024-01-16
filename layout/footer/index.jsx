import React from 'react'

//styles 
import styles from './index.module.css'

//icons
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

//next link 
import Link from 'next/link'


const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <div className={styles.footerLeftGroup}>
              <FaLocationDot />
              <p>Muratpaşa Mahallesi Uluyol Caddesi No:17-19 Kat:9 Daire:42 Bayrampaşa</p>
            </div>
            <div className={styles.footerLeftGroup}>
              <FaPhoneAlt />
              <p>0850 304 04 04</p>
            </div>
            <div className={styles.footerLeftGroup}>
              <FaEnvelope />
              <a href="mailto:accounting@kplus.com.tr">
                accounting@kplus.com.tr
              </a>
            </div>
          </div>
          <div className={styles.footerTopRight}>
            <div className={styles.footerRightGroup}>
              <Link href="/">Anasayfa</Link>
              <Link href="/flight">Uçak</Link>
              <Link href="/hotel">Otel</Link>
              <Link href="/bus">Otobüs</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <p>© 2024 K Plus Turizm ve Ticaret A.Ş. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer