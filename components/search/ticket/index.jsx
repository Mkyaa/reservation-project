'use client'
import React from 'react'

//styles
import styles from "./index.module.css"

//utils
import { readableDate, readableTime } from '@/utils/functions'

//icons
import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa'
import { IoTimerOutline } from 'react-icons/io5'

//components
import Button from '@/shared/Button'

//redux
import { useDispatch } from 'react-redux'
import { setTicket } from '@/redux/app/auth/authSlice'

//navigate
import { useRouter } from 'next/navigation'

const Ticket = ({ ticket, passengerQuery }) => {

    //hooks
    const dispatch = useDispatch()
    const navigate = useRouter()

    //readable date and time for ticket
    const departureTime = readableTime(ticket.departure)
    const arrivalTime = readableTime(ticket.arrival)
    const departureDate = readableDate(ticket.departure)
    const arrivalDate = readableDate(ticket.arrival)

    //ticket info for redux
    const ticketInfo = {
        company: ticket.company,
        from: ticket.from,
        to: ticket.to,
        departure: ticket.departure,
        arrival: ticket.arrival,
        flight_class: ticket.flight_class,
        price: ticket.price,
        passenger: passengerQuery
    }

    //handle buy ticket button
    const handleBuyTicket = () => {
        dispatch(setTicket(ticketInfo))
        navigate.push('/buy')
    }

    return (
        <div className={styles.ticket}>
            <div className={styles.ticketLeft}>
                <span>{ticket.company}</span>
                <div className={styles.ticketLeftBottom}>
                    <span>{ticket.from}</span>
                    <FaLongArrowAltDown />
                    <span>{ticket.to}</span>
                </div>
            </div>
            <div className={styles.ticketMiddle}>
                <div className={styles.ticketMiddleTop}>
                    <span>{readableTime(ticket.departure)}</span>
                    <FaLongArrowAltRight />
                    <p>{readableTime(ticket.arrival)}</p>
                </div>
                <div className={styles.ticketMiddleBottom}>
                    <IoTimerOutline />
                    <span>{ticket.fly_duration}</span>
                </div>
            </div>
            <div className={styles.ticketRight}>
                <p>{ticket.price} TL</p>
                <span>{passengerQuery} Kişi</span>
                <span>Toplam : {ticket.price * passengerQuery} TL</span>
            </div>
            <div className={styles.ticketButton}>
                <Button
                    text="Satın Al"
                    onClick={handleBuyTicket}
                />
            </div>
        </div>


    )
}

export default Ticket