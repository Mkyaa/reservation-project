import React from 'react'

//styles
import styles from './index.module.css'

//antd
import { Rate } from 'antd'

//hooks
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

//redux
import { setReservation } from '@/redux/app/auth/authSlice'

const Reservation = ({ hotel, departure, arrival, passenger }) => {

    //hooks
    const dispatch = useDispatch()
    const navigate = useRouter()

    //reservation info for redux
    const reservationInfo = {
        type: 'hotel',
        name: hotel.name,
        city: hotel.city,
        district: hotel.district,
        check_in: departure,
        check_out: arrival,
        passenger: passenger,
        room_images: hotel.room_images,
    }

    //handle reservation button
    const handleReservation = (price, room) => {
        dispatch(setReservation(
            {
                ...reservationInfo,
                price: price,
                room_type: room,
                total_price: price * passenger
            }
        ))
        navigate.push('/buy')
    }

    return (
        <div className={styles.reservationCardItem}>
            <div className={styles.reservationCardItemLeft}>
                <img src={hotel.room_images[0]} alt="" />
            </div>
            <div className={styles.reservationCardContent}>
                <div className={styles.reservationCardItemMiddle}>
                    <div className={styles.reservationCardItemMiddleTop}>
                        <h2>{hotel.name}</h2>
                        <div className={styles.rateBox}>
                            <Rate disabled defaultValue={hotel.rating} />
                            <p>{hotel.rating}</p>
                        </div>
                    </div>
                    <div className={styles.reservationCardItemMiddleBottom}>
                        <p>{hotel.district}, {hotel.city}</p>
                    </div>
                </div>
                <div className={styles.reservationCardItemRight}>
                    <div
                        className={styles.reservationCardItemPriceBox}
                        onClick={() => handleReservation(hotel.room_prices.standard, 'standart')}
                    >
                        <p>Standart Oda</p>
                        <span>{hotel.room_prices.standard} TL</span>
                        <div className={styles.reservationCardItemPriceBoxBottom}>
                            <p>1 Gece</p>
                            <p>Toplam :{hotel.room_prices.standard * passenger} TL</p>
                        </div>
                    </div>
                    <div
                        className={styles.reservationCardItemPriceBox}
                        onClick={() => handleReservation(hotel.room_prices.deluxe, 'deluxe')}
                    >
                        <p>Deluxe Oda</p>
                        <span>{hotel.room_prices.deluxe} TL</span>
                        <div className={styles.reservationCardItemPriceBoxBottom}>
                            <p>1 Gece</p>
                            <p>Toplam :{hotel.room_prices.deluxe * passenger} TL</p>
                        </div>
                    </div>
                    <div
                        className={styles.reservationCardItemPriceBox}
                        onClick={() => handleReservation(hotel.room_prices.suite, 'suite')}
                    >
                        <p>Suite Oda</p>
                        <span>{hotel.room_prices.suite} TL</span>
                        <div className={styles.reservationCardItemPriceBoxBottom}>
                            <p>1 Gece</p>
                            <p>Toplam :{hotel.room_prices.suite * passenger} TL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Reservation
