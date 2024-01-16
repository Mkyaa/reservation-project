'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from "./index.module.css"

//components
import PriceFilter from '@/components/search/priceFilter'
import OptionFilter from '@/components/search/transferFilter'
import Loader from '@/components/loader'
import Ticket from '@/components/search/ticket'
import NoData from '@/components/profile/noData'
import Reservation from '@/components/search/reservations'

//api
import { getHotelsApi } from '@/api/getData'

//next components
import { useSearchParams } from 'next/navigation'

//icons
import { ImStatsBars } from 'react-icons/im'
import { MdOutlineCorporateFare } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";


const SearchHotelContainer = () => {

  //state
  const [loading, setLoading] = useState(false)

  //data
  const [hotels, setHotels] = useState([])
  const [filteredHotels, setFilteredHotels] = useState([])

  //filter
  const [maxPriceInput, setMaxPriceInput] = useState()
  const [ratingFilter, setRatingFilter] = useState([])
  const [amenitiesFilter, setAmenitiesFilter] = useState([])

  //options
  const [ratingOptions, setRatingOptions] = useState([])
  const [amenitiesOptions, setAmenitiesOptions] = useState([])

  //catch query params
  const searchParams = useSearchParams()
  const cityQuery = searchParams.get('city')
  const departureQuery = searchParams.get('departure')
  const arrivalQuery = searchParams.get('arrival')
  const passengerQuery = searchParams.get('passenger')

  //get flights from api
  const getHotels = async () => {
    try {
      setLoading(true)
      const res = await getHotelsApi()
      const filtered = res.filter(hotel => {
        return hotel.city.toLowerCase() === cityQuery.toLowerCase()
      })
      setHotels(filtered)
      setLoading(false)
    }
    catch (err) {
      console.error(err)
    }
  }


  //set transfer options
  useEffect(() => {
    getHotels()
  }, [])

  //set rating options
  const setFilteredRatingObj = (obj) => {
    const ratingArr = []
    const ratingObj = obj.map(hotel => hotel.rating)
    const setRating = new Set(ratingObj)
    for (let item of setRating) {
      const filtered = ratingObj.filter(rating => rating === item)
      ratingArr.push({ value: item, count: filtered.length })
    }
    setRatingOptions(ratingArr)
  }

  //set amenities options
  const setFilteredAmenitiesObj = (obj) => {
    const amenitiesArr = []
    const amenitiesObj = []
    obj.map(hotel => {
      for (let item of hotel.amenities) {
        amenitiesObj.push(item)
      }
    })
    const setAmenities = new Set(amenitiesObj)
    for (let item of setAmenities) {
      const filtered = amenitiesObj.filter(amenity => amenity === item)
      amenitiesArr.push({ value: item, count: filtered.length })
    }
    setAmenitiesOptions(amenitiesArr)
  }

  //find highest price
  const findHighestPrice = (prices) => {
    const pricesArray = Object.values(prices);
    const highestPrice = Math.max(...pricesArray);
    return highestPrice;
  };

  //set filtered objects 
  useEffect(() => {
    setFilteredRatingObj(hotels)
    setFilteredAmenitiesObj(hotels)
    if (hotels.length > 0) {
      const maxPrice = Math.max(...hotels.map(hotel => findHighestPrice(hotel.room_prices)))
      setMaxPriceInput(maxPrice)
    }
  }, [hotels])

  //handle changes funcs
  const handleRatingFilter = (value) => {
    setRatingFilter(value)
  }

  const handleAmenitiesFilter = (value) => {
    setAmenitiesFilter(value)
  }

  //filter flights
  useEffect(() => {
    const filtered = hotels.filter(hotel => {
      const amenities = hotel.amenities || [];
      const maxRoomPrice = Math.max(...Object.values(hotel.room_prices));
  
      if (ratingFilter.length > 0 && amenitiesFilter.length > 0) {
        return (
          ratingFilter.includes(hotel.rating) &&
          amenities.some(amenity => amenitiesFilter.includes(amenity)) &&
          maxRoomPrice <= maxPriceInput
        );
      } else if (ratingFilter.length > 0 && amenitiesFilter.length === 0) {
        return (
          ratingFilter.includes(hotel.rating) &&
          maxRoomPrice <= maxPriceInput
        );
      } else if (ratingFilter.length === 0 && amenitiesFilter.length > 0) {
        return (
          amenities.some(amenity => amenitiesFilter.includes(amenity)) &&
          maxRoomPrice <= maxPriceInput
        );
      } else {
        return maxRoomPrice <= maxPriceInput;
      }
    });
  
    setFilteredHotels(filtered);
  }, [amenitiesFilter, ratingFilter, maxPriceInput]);
  

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContent}>
        <div className={styles.searchTitle}>
          <h1>Otel Rezervasyonu</h1>
        </div>
        <div className={styles.searchBody}>
          <div className={styles.searchFilter}>
            <div className={styles.filterTitle}>
              <h2>Filtrele</h2>
            </div>
            <div className={styles.filterBody}>
              <div className={styles.filterItem}>
                <div className={styles.filterItemHeader}>
                  <MdOutlineCorporateFare />
                  <p>Puan</p>
                </div>
                <div className={styles.filterItemContent}>
                  <OptionFilter
                    option={ratingOptions}
                    onChange={handleRatingFilter}
                  />
                </div>
              </div>
              <div className={styles.filterItem}>
                <div className={styles.filterItemHeader}>
                  <ImStatsBars />
                  <p>Maksimum Fiyat</p>
                </div>
                <div className={styles.filterItemContent}>
                  <PriceFilter
                    maxPriceInput={maxPriceInput}
                    setMaxPriceInput={setMaxPriceInput}
                  />
                </div>
              </div>
              <div className={styles.filterItem}>
                <div className={styles.filterItemHeader}>
                  <IoDocumentTextOutline />
                  <p>Olanaklar</p>
                </div>
                <div className={styles.filterItemContent}>
                  <OptionFilter
                    option={amenitiesOptions}
                    onChange={handleAmenitiesFilter}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.searchResult}>
            <div className={styles.resultTitle}>
              <h2>Arama Sonuçları</h2>
            </div>
            <div className={styles.resultBody}>
              {
                loading
                  ? <Loader />
                  : filteredHotels.length > 0
                    ? filteredHotels.map(hotel => {
                      return (
                        <Reservation
                          key={hotel.id}
                          hotel={hotel}
                          departure={departureQuery}
                          arrival={arrivalQuery}
                          passenger={passengerQuery}
                        />
                      )
                    })
                    : <NoData text="Aradığınız kriterlere uygun otel bulunamadı." />
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SearchHotelContainer