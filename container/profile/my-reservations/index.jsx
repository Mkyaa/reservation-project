"use client"
import React, { useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//components
import Loader from '@/components/loader'
import NoData from '@/components/profile/noData'
import ReservationCard from '@/components/profile/reservationCard'

//api
import { getActionsApi } from '@/api/getData'

//redux
import { useSelector } from 'react-redux'


const MyReservationsContainer = () => {

  //state
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)

  //redux
  const { user } = useSelector(state => state.auth)

  //get reservations
  const getReservations = async (email) => {
    setLoading(true)
    try {
      const res = await getActionsApi(email)
      setReservations(res.my_reservations)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  //get reservations
  useEffect(() => {
    getReservations(user.email)
  }, [])

  return (
    <div className={styles.myReservationsContainer}>
      <div className={styles.myReservationsContent}>
        {
          loading
            ? <Loader />
            : reservations.length > 0
              ? reservations.map(reserv =>
                <ReservationCard
                  key={reserv.id}
                  reserv={reserv}
                  getReservations={getReservations}
                  user={user}
                />)
              : <NoData text='Rezervasyonunuz bulunmamaktadır.' />
        }

      </div>
    </div>
  )
}

export default MyReservationsContainer