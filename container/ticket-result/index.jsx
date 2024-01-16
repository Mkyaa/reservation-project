import React from 'react'

//styles
import styles from "./index.module.css"

//link
import Link from 'next/link'

const TicketResultContainer = () => {
  return (
    <div className={styles.ticketResultContainer}>
        <h1>Ödeme Başarılı</h1>
        <p>Biletleriniz mail adresinize gönderilmiştir.
            <br/>
            İyi yolculuklar dileriz.
        </p>
        <Link href="/"> Anasayfaya Dön </Link>
    </div>
  )
}

export default TicketResultContainer