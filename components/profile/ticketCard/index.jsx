import React from 'react'

//styles
import styles from './index.module.css'

//icons
import { FaLongArrowAltRight } from 'react-icons/fa'

//functions
import { readableDate } from '@/utils/functions'

//api
import { cancelTicketApi } from '@/api/putData'

//toast
import toast from 'react-hot-toast'

const TicketCard = ({ ticket, getTickets, user }) => {

    //set edited data
    const setEditedData = async (data) => {
        try {
            const editedData = {
                ...ticket,
                status: 'cancelled'
            }
            const res = await cancelTicketApi(user.email, ticket.id, editedData)
            toast.success("Bilet iptal edildi")
            getTickets(user.email)
        }
        catch (error) {
            toast.error("Bilet iptal edilirken bir hata oluştu")
        }
    }

    return (
        <div className={styles.ticketItem}>
            <div className={styles.ticketItemContent}>
                <div className={styles.ticketItemContentLeft}>
                    <p>{ticket.from}</p>
                    <FaLongArrowAltRight />
                    <p>{ticket.to}</p>
                </div>
                <div className={styles.ticketItemMiddle}>
                    <h1>{ticket.company}</h1>
                </div>
                <div className={styles.ticketItemContentRight}>
                    <p
                        className={
                            ticket.status === 'active'
                                ? styles.active
                                : ticket.status === 'cancelled'
                                    ? styles.cancelled
                                    : styles.passive
                        }
                    >{
                            ticket.status === 'active'
                                ? "Aktif"
                                : ticket.status === 'cancelled'
                                    ? "İptal"
                                    : "Tamamlandı"
                        }
                    </p>
                </div>
            </div>
            <div className={styles.ticketItemFooter}>
                <div className={styles.ticketItemFooterLeft}>
                    <div className={styles.ticketItemFooterLeftContent}>
                        <h3>Kalkış</h3>
                        <p>{readableDate(ticket.departure)}</p>
                    </div>
                    <div className={styles.ticketItemFooterLeftContent}>
                        <h3>Varış</h3>
                        <p>{readableDate(ticket.arrival)}</p>
                    </div>
                </div>
                <div className={styles.ticketItemFooterRight}>
                    <span>{ticket.flight_class}</span>
                    <span>{ticket.passenger} Kişi</span>
                    <p>{ticket.price * ticket.passenger} TL</p>
                    {
                        ticket.status === 'active'
                            ? <button onClick={() => setEditedData(ticket)}>İptal Et</button>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default TicketCard