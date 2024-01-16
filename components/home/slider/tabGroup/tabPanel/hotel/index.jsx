'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//mui components
import { Autocomplete, TextField } from '@mui/material'
import { darken, lighten, styled } from '@mui/material/styles'

//data 
import { allCities } from '@/utils/data'

//components
import Button from '@/shared/Button'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const HotelPanel = () => {

    //state
    const [filters, setFilters] = useState({
        city: '',
        departure: '',
        arrival: '',
        passenger: '',
    });
    const [isDisabled, setIsDisabled] = useState(true);

    //router
    const navigate = useRouter();

    //set default filters for hotel
    useEffect(() => {
        setFilters((prevFilters) => ({ ...prevFilters, city: allCities[0].name }));
    }
        , []);

    //check filters for disabled
    useEffect(() => {
        if (filters.departure && filters.arrival && filters.passenger && filters.city) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [filters]);

    //handle search button
    const handleSearch = () => {
        //departure arrivaldan kucuk olamaz
        if (filters.departure > filters.arrival) {
            toast.error('Giriş tarihi çıkış tarihinden büyük olamaz');
            return;
        }
        else if (filters.departure === filters.arrival) {
            toast.error('Giriş tarihi çıkış tarihine eşit olamaz');
            return;
        }
        else if (filters.passenger < 1) {
            toast.error('En az 1 kişi seçmelisiniz');
            return;
        }
        else if (filters.passenger === '' || filters.departure === '' || filters.arrival === '') {
            toast.error('Lütfen tüm alanları doldurunuz');
            return;
        }
        else {
            navigate.push(`/search/hotel?city=${filters.city}&departure=${filters.departure}&arrival=${filters.arrival}&passenger=${filters.passenger}`);
        }
    }

    return (
        <div className={styles.hotelPanel}>
            <div className={styles.hotelPanelContainer}>

                <div className={styles.filterGroup}>
                    <div className={styles.inputGroup}>
                        <div className={styles.input}>
                            <Autocomplete
                                id="departure-autocomplete"
                                options={
                                    allCities.map((option) => option.name).filter((name) => name !== filters.arrival)
                                }
                                onChange={(event, value) => setFilters({ ...filters, city: value })}
                                renderInput={(params) => <TextField {...params} label="Şehir" />}
                            />
                        </div>
                        <div className={styles.input}>
                            <TextField
                                id="outlined-number"
                                label="Konuk Sayısı"
                                type="number"
                                variant="outlined"
                                value={filters.passenger}
                                onChange={(event) => setFilters({ ...filters, passenger: event.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <div className={styles.inputGroup}>
                        <div className={styles.input}>
                            <TextField
                                id="departure-date"
                                label="Giriş Tarihi"
                                type="date"
                                onChange={(event) => setFilters({ ...filters, departure: event.target.value })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className={styles.input}>
                            <TextField
                                id="arrival-date"
                                label="Çıkış Tarihi"
                                type="date"
                                onChange={(event) => setFilters({ ...filters, arrival: event.target.value })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <Button
                            text="Ara"
                            className={styles.button}
                            disabled={isDisabled}
                            onClick={handleSearch}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HotelPanel