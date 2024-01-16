'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//data
import { allCities } from '@/utils/data'

//mui components
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

//components
import Button from '@/shared/Button'

//toast
import toast from 'react-hot-toast'

//navigate
import { useRouter } from 'next/navigation'


const BusPanel = () => {

    //state
    const [filters, setFilters] = useState({
        departure: '',
        arrival: '',
        departureDate: ''
    })
    const [isDisabled, setIsDisabled] = useState(true)

    //router
    const navigate = useRouter()

    //check filters for disabled
    useEffect(() => {
        if (
            filters.departure !== '' &&
            filters.arrival !== '' &&
            filters.departureDate !== ''
        ) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }
        , [filters])

    //set default filters for bus
    useEffect(() => {
        setFilters((prevFilters) => ({ ...prevFilters, oneWay: true, roundTrip: false }))
    }
        , [])


    //handle submit button
    const handleSubmit = () => {
        if (isDisabled) {
            return toast.error('Lütfen tüm alanları doldurunuz.')
        }
        navigate.push(`/search/bus?from=${filters.departure}&to=${filters.arrival}&departure=${filters.departureDate}`)
    }

    return (
        <div className={styles.planePanel}>
            <div className={styles.planePanelContainer}>
                <div className={styles.filterGroup}>
                    <div className={styles.inputGroup}>
                        <div className={styles.input}>
                            <Autocomplete
                                id="departure-autocomplete"
                                options={
                                    allCities.map((option) => option.name).filter((name) => name !== filters.arrival)
                                }
                                onChange={(event, value) => setFilters({ ...filters, departure: value })}
                                renderInput={(params) => <TextField {...params} label="Kalkış" />}
                            />
                        </div>
                        <div className={styles.input}>
                            <Autocomplete
                                id="arrival-autocomplete"
                                options={
                                    allCities.map((option) => option.name).filter((name) => name !== filters.departure)
                                }
                                onChange={(event, value) => setFilters({ ...filters, arrival: value })}
                                renderInput={(params) => <TextField {...params} label="Varış" />}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.filterGroup}>
                    <div className={styles.inputGroup}>
                        <div className={styles.input}>
                            <TextField
                                id="departure-date"
                                label="Kalkış Tarihi"
                                type="date"
                                onChange={(event) => setFilters({ ...filters, departureDate: event.target.value })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <Button
                            text="Otobüs Bul"
                            disabled={isDisabled}
                            className={styles.button}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusPanel
