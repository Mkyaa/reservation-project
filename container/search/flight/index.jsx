'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from "./index.module.css"

//components
import PriceFilter from '@/components/search/priceFilter'
import Loader from '@/components/loader'
import Ticket from '@/components/search/ticket'
import NoData from '@/components/profile/noData'
import OptionFilter from '@/components/search/transferFilter'

//api
import { FaPlaneDeparture } from 'react-icons/fa'

//api
import { getFlightsApi } from '@/api/getData'

//next components
import { useSearchParams } from 'next/navigation'

//icons
import { ImStatsBars } from 'react-icons/im'
import { BiTransferAlt } from 'react-icons/bi'

const SearchContainer = () => {

    //state
    const [loading, setLoading] = useState(false)

    //data
    const [flights, setFlights] = useState([])
    const [filteredFlights, setFilteredFlights] = useState([])

    //filter
    const [maxPriceInput, setMaxPriceInput] = useState()
    const [transferFilter, setTransferFilter] = useState([])
    const [companyFilter, setCompanyFilter] = useState([])

    //options
    const [transferOptions, setTransferOptions] = useState([])
    const [companyOptions, setCompanyOptions] = useState([])

    //catch query params
    const searchParams = useSearchParams()
    const fromQuery = searchParams.get('from')
    const toQuery = searchParams.get('to')
    const departureQuery = searchParams.get('departure')
    const arrivalQuery = searchParams.get('arrival')
    const passengerQuery = searchParams.get('passenger')
    const flightClassQuery = searchParams.get('flight_class')
    const oneWayQuery = searchParams.get('oneWay')
    const roundTripQuery = searchParams.get('roundTrip')

    //get flights from api
    const getFlights = async () => {
        try {
            setLoading(true)
            const res = await getFlightsApi()
            const filtered = res.filter(flight => {
                if (oneWayQuery === 'true') {
                    return flight.from.toLowerCase() === fromQuery.toLowerCase()
                        && flight.to.toLowerCase() === toQuery.toLowerCase()
                        && flight.departure.includes(departureQuery)
                        && flight.flight_class.toLowerCase() === flightClassQuery.toLowerCase()
                }
                else {
                    return flight.from.toLowerCase() === fromQuery.toLowerCase()
                        && flight.to.toLowerCase() === toQuery.toLowerCase()
                        && flight.departure.includes(departureQuery)
                        && flight.arrival.includes(arrivalQuery)
                        && flight.flight_class === flightClassQuery
                } 1
            }
            )
            setFlights(filtered)
        }
        catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false)
        }
    }

    //set filtered flights
    useEffect(() => {
        getFlights()
    }
        , [])

    //set transfer options
    const setFilteredTransferObj = (obj) => {
        const transferArr = []
        const transferObj = obj.map(flight => flight.transfer)
        const setTransfer = new Set(transferObj)
        for (let item of setTransfer) {
            const filtered = transferObj.filter(transfer => transfer === item)
            transferArr.push({ value: item, count: filtered.length })
        }
        setTransferOptions(transferArr)
    }

    //set company options
    const setFilteredCompanyObj = (obj) => {
        const companyArr = []
        const companyObj = obj.map(flight => flight.company)
        const setCompany = new Set(companyObj)
        for (let item of setCompany) {
            const filtered = companyObj.filter(company => company === item)
            companyArr.push({ value: item, count: filtered.length })
        }
        setCompanyOptions(companyArr)
    }

    //set filtered objects 
    useEffect(() => {
        setFilteredTransferObj(flights)
        setFilteredCompanyObj(flights)
        if (flights.length > 0) {
            const maxPrice = Math.max(...flights.map(flight => flight.price))
            setMaxPriceInput(maxPrice)
        }
    }, [flights])

    //handle changes funcs
    const handleTransferFilter = (value) => {
        setTransferFilter(value)
    }

    const handleCompanyFilter = (value) => {
        setCompanyFilter(value)
    }

    //filter flights
    useEffect(() => {
        const filtered = flights.filter(flight => {
            if (transferFilter.length > 0 && companyFilter.length > 0) {
                return transferFilter.includes(flight.transfer) && companyFilter.includes(flight.company) && flight.price <= maxPriceInput
            }
            else if (transferFilter.length > 0 && companyFilter.length === 0) {
                return transferFilter.includes(flight.transfer) && flight.price <= maxPriceInput
            }
            else if (transferFilter.length === 0 && companyFilter.length > 0) {
                return companyFilter.includes(flight.company) && flight.price <= maxPriceInput
            }
            else {
                return flight.price <= maxPriceInput
            }
        })
        setFilteredFlights(filtered)
    }, 
    [transferFilter, companyFilter, maxPriceInput])        


    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchContent}>
                <div className={styles.searchTitle}>
                    <h1>Uçak Bileti</h1>
                </div>
                <div className={styles.searchBody}>
                    {/* FILTER */}
                    <div className={styles.searchFilter}>
                        <div className={styles.filterTitle}>
                            <h2>Filtrele</h2>
                        </div>
                        <div className={styles.filterBody}>
                            <div className={styles.filterItem}>
                                <div className={styles.filterItemHeader}>
                                    <BiTransferAlt />
                                    <p>Aktarma</p>
                                </div>
                                <div className={styles.filterItemContent}>
                                    <OptionFilter
                                        option={transferOptions}
                                        onChange={handleTransferFilter}
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
                                    <FaPlaneDeparture />
                                    <p>Havayolu Şirketi</p>
                                </div>
                                <div className={styles.filterItemContent}>
                                    <OptionFilter
                                        option={companyOptions}
                                        onChange={handleCompanyFilter}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SEARCH */}
                    <div className={styles.searchResult}>
                        <div className={styles.resultTitle}>
                            <h2>Arama Sonuçları</h2>
                        </div>
                        <div className={styles.resultBody}>
                            {
                                loading
                                    ? <Loader />
                                    : filteredFlights && filteredFlights.length > 0
                                        ? filteredFlights.map(flight => {
                                            return (
                                                <Ticket
                                                    key={flight.id}
                                                    ticket={flight}
                                                    passengerQuery={passengerQuery}
                                                />
                                            )
                                        })
                                        : <NoData text="Aradığınız kriterlere uygun uçuş bulunamadı." />

                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchContainer