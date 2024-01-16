'use client'
import React, { use, useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//components
import NoData from '@/components/profile/noData'
import TicketCard from '@/components/profile/ticketCard'
import Loader from '@/components/loader'

//redux
import { useSelector } from 'react-redux'

//api
import { getActionsApi } from '@/api/getData'


const MyTickets = () => {

    //state
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState('flight')
    const [flightTickets, setFlightTickets] = useState([])
    const [busTickets, setBusTickets] = useState([])

    //redux
    const { user } = useSelector(state => state.auth)

    //get tickets
    const getTickets = async (email) => {
        setLoading(true)
        try {
            const res = await getActionsApi(email)
            setTickets(res)
            setFlightTickets(res.my_tickets.filter(ticket => ticket.type === 'flight'))
            setBusTickets(res.my_tickets.filter(ticket => ticket.type === 'bus'))
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    //get tickets
    useEffect(() => {
        getTickets(user?.email)
    }, [])

    return (
        <div className={styles.ticketsContainer}>
            <div className={styles.ticketFilter}>
                <div className={styles.ticketFilterItem}>
                    <p
                        id='flight'
                        className={active === 'flight' ? styles.active : ''}
                        onClick={(e) => setActive(e.target.id)}
                    >
                        Uçak
                    </p>
                </div>
                <div className={styles.ticketFilterItem}>
                    <p
                        id='bus'
                        className={active === 'bus' ? styles.active : ''}
                        onClick={(e) => setActive(e.target.id)}
                    >
                        Otobüs
                    </p>
                </div>
            </div>
            <div className={styles.ticketList}>
                <div className={styles.ticketListContent}>
                    {
                        loading
                            ? <Loader />
                            : active === 'flight' && flightTickets?.length > 0
                                ? flightTickets?.map(ticket => (
                                    <TicketCard 
                                    key={ticket.id}
                                    ticket={ticket} 
                                    getTickets={getTickets}
                                    user={user}
                                    />
                                ))
                                : active === "bus" && busTickets?.length > 0
                                    ? busTickets?.map(ticket => (
                                        <TicketCard ticket={ticket} />
                                    ))
                                    : <NoData text="Henüz biletiniz bulunmamaktadır." />
                    }
                </div>
            </div>
        </div>
    )
}

export default MyTickets