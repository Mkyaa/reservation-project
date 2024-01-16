import React from 'react'

//styles
import styles from './index.module.css'

//functions
import { readableDate } from '@/utils/functions'

//api
import { cancelReservationApi } from '@/api/putData'

//toast
import toast from 'react-hot-toast'

const ReservationCard = ({ reserv, getReservations, user }) => {

    //readable room type
    const readableRoomType = reserv.room_type.split('')[0].toUpperCase()
        + reserv.room_type.split('').slice(1).join('')

    //set edited data
    const setEditedData = async (data) => {
        try {
            const editedData = {
                ...reserv,
                status: 'cancelled'
            }
            const res = await cancelReservationApi(user.email, reserv.id, editedData)
            toast.success("Rezervasyon iptal edildi")
            getReservations(user.email)
        } catch (error) {
            toast.error("Rezervasyon iptal edilirken bir hata oluştu")
            console.log(error)
        }
    }

    return (
        <div className={styles.reservationItem}>
            <div className={styles.reservationImage}>
                <img src={reserv.room_images[0]} alt="" />
            </div>
            <div className={styles.reservationInfo}>
                <div className={styles.reservationInfoHeader}>
                    <div className={styles.reservationInfoHeaderTop}>
                        <p>{reserv.district}, {reserv.city}</p>
                        <h2>{reserv.name}</h2>
                    </div>
                    <div className={styles.reservationInfoHeaderBottom}>
                        <div className={styles.reservationInfoHeaderBottomTop}>
                            <p>Oda Fiyati :</p>
                            <span>{reserv.price} TL</span>
                        </div>
                        <div className={styles.reservationInfoHeaderBottomBottom}>
                            <p>Oda Tipi : </p>
                            <span>{readableRoomType}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.reservationInfoContent}>
                    <div className={styles.reservationInfoContentLeft}>
                        <p>Check-in</p>
                        <h3>{readableDate(reserv.check_in)}</h3>
                    </div>
                    <div className={styles.reservationInfoContentRight}>
                        <p>Check-out</p>
                        <h3>{readableDate(reserv.check_out)}</h3>
                    </div>
                </div>
                <div className={styles.reservationInfoFooter}>
                    <div className={styles.reservationInfoFooterTop}>
                        <p className={
                            reserv.status === 'active'
                                ? styles.active
                                : reserv.status === 'cancelled'
                                    ? styles.cancelled
                                    : styles.passive
                        }>
                            {
                                reserv.status === 'active'
                                    ? "Aktif"
                                    : reserv.status === 'cancelled'
                                        ? "İptal"
                                        : "Tamamlandı"
                            }
                        </p>
                    </div>
                    <div className={styles.reservationInfoFooterBottom}>
                        <p>Toplam Fiyat :</p>
                        <h3>{reserv.total_price} TL</h3>
                        {
                            reserv.status === 'active' &&
                            < button 
                            className={styles.cancelButton}
                            onClick={
                                () => setEditedData(reserv)
                            }>İptal Et</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ReservationCard