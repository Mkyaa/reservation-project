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
import { getBusesApi, getFlightsApi } from '@/api/getData'

//next components 
import { useSearchParams } from 'next/navigation'

//icons
import { ImStatsBars } from 'react-icons/im'
import { IoMdBus } from "react-icons/io";


const BusSearchContainer = () => {

    //state
    const [loading, setLoading] = useState(false)

    //data
    const [buses, setBuses] = useState([])
    const [filteredBuses, setFilteredBuses] = useState([])

    //filter
    const [maxPriceInput, setMaxPriceInput] = useState()
    const [companyFilter, setCompanyFilter] = useState([])

    //options
    const [companyOptions, setCompanyOptions] = useState([])

    //catch query params
    const searchParams = useSearchParams()
    const fromQuery = searchParams.get('from')
    const toQuery = searchParams.get('to')
    const departureQuery = searchParams.get('departure')


    //get flights from api
    const getBuses = async () => {
        try {
            setLoading(true)
            const res = await getBusesApi()
            const filtered = res.filter(bus => {
                return bus.from.toLowerCase() === fromQuery.toLowerCase()
                    && bus.to.toLowerCase() === toQuery.toLowerCase()
                    && bus.departure.includes(departureQuery)
            })
            setBuses(filtered)
            setFilteredBuses(filtered)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    //set filtered flights
    useEffect(() => {
        getBuses()
    }, [])

    //set company options
    const setFilteredCompanyObj = (obj) => {
        const companyArr = []
        const companyObj = obj.map(bus => bus.company)
        const setCompany = new Set(companyObj)
        for (let item of setCompany) {
            const filtered = companyObj.filter(company => company === item)
            companyArr.push({ value: item, count: filtered.length })
        }
        setCompanyOptions(companyArr)
    }

    //set max price 
    useEffect(() => {
        setFilteredCompanyObj(buses)
        if (buses.length > 0) {
            const maxPrice = Math.max(...buses.map(bus => bus.price))
            setMaxPriceInput(maxPrice)
        }
    }, [buses])

    //filter
    const handleCompanyFilter = (value) => {
        setCompanyFilter(value)
    }

    //filter buses
    useEffect(() => {
        const filtered = buses.filter(bus => {
            if (companyFilter.length > 0) {
                return companyFilter.includes(bus.company) && bus.price <= maxPriceInput
            }
            else {
                return bus.price <= maxPriceInput
            }
        })
        setFilteredBuses(filtered)
    }, [companyFilter, maxPriceInput])


    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchContent}>
                <div className={styles.searchTitle}>
                    <h1>Otobüs Bileti</h1>
                </div>
                <div className={styles.searchBody}>
                    <div className={styles.searchFilter}>
                        <div className={styles.filterTitle}>
                            <h2>Filtrele</h2>
                        </div>
                        <div className={styles.filterBody}>
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
                                    <IoMdBus />
                                    <p>Otobüs Şirketi</p>
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

                    <div className={styles.searchResult}>
                        <div className={styles.resultTitle}>
                            <h2>Arama Sonuçları</h2>
                        </div>
                        <div className={styles.resultBody}>
                            {
                                loading
                                    ? <Loader />
                                    : filteredBuses.length > 0
                                        ? filteredBuses.map((bus, index) => <Ticket
                                            key={index}
                                            ticket={bus}
                                            passengerQuery='1'
                                        />)
                                        : <NoData text="Aradığınız kriterlere uygun bilet bulunamadı." />
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BusSearchContainer