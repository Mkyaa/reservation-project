'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//api
import { getHotelsApi } from '@/api/getData'

//components
import Loader from '@/components/loader'

//andt components
import { Carousel, Rate } from 'antd';


const HotelDetailContainer = ({ id }) => {

    //state
    const [loading, setLoading] = useState(true)
    const [hotel, setHotel] = useState({})

    //api
    const getHotelData = async () => {
        try {
            setLoading(true)
            const res = await getHotelsApi()
            const filtered = res.filter(hotel => hotel.id === id)
            setHotel(filtered[0])
        }
        catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false)
        }
    }

    //get hotel data
    useEffect(() => {
        getHotelData()
    }, [])


    return (
        loading ? <Loader /> : (
            <div className={styles.hotelDetailContainer}>
                <div className={styles.hotelDetailContent}>
                    <div className={styles.hotelDetailPath}>
                        <div className={styles.hotelDetailCarousel}>
                            <Carousel autoplay>
                                {
                                    hotel.room_images.map((image, index) => (
                                        <div key={index}>
                                            <img src={image} alt="hotel image" />
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                        <div className={styles.hotelDetailPathText}>
                            <div className={styles.hotelDetailPathTextTitle}>
                                <p>{hotel.city}, {hotel.district}</p>
                                <h1>{hotel.name}</h1>
                            </div>
                            <div className={styles.hotelDetailPathTextRating}>
                                <Rate allowHalf defaultValue={hotel.rating} />
                                <p>{hotel.rating}</p>
                            </div>
                            <div className={styles.hotelDetailPathDescription}>
                                <p>{hotel.description}</p>
                                <span> {
                                    hotel.amenities.join(', ')
                                }
                                </span>
                            </div>
                            <div className={styles.hotelDetailPathPrice}>
                                <div className={styles.hotelDetailPathPriceBox}>
                                    <p>Standart Oda</p>
                                    <span>{hotel.room_prices.standard} TL</span>
                                </div>
                                <div className={styles.hotelDetailPathPriceBox}>
                                    <p>Deluxe Oda</p>
                                    <span>{hotel.room_prices.deluxe} TL</span>
                                </div>
                                <div className={styles.hotelDetailPathPriceBox}>
                                    <p>Suite Oda</p>
                                    <span>{hotel.room_prices.suite} TL</span>
                                </div>
                            </div>
                            <div className={styles.hotelDetailContact}>
                                <h4>İletişim</h4>
                                <p>{hotel.contact_information.phone}</p>
                                <p>{hotel.contact_information.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    )
}

export default HotelDetailContainer