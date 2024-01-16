"use client"
import React, { useEffect, useState } from 'react';

//styles
import styles from './index.module.css';

//data
import { allAirports, cabines } from '@/utils/data';

//mui components
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//components
import Button from '@/shared/Button';
import toast from 'react-hot-toast';

//navigate
import { useRouter } from 'next/navigation';
import Loader from '@/components/loader';

const FlightPanel = () => {

    //state
    const [filters, setFilters] = useState({
        from: '',
        to: '',
        departure: '',
        arrival: '',
        passenger: '',
        flight_class: '',
        oneWay: true,
        roundTrip: false,
    });
    const [isDisabled, setIsDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    //router
    const navigate = useRouter()


    useEffect(() => {
        if (filters.oneWay) {
            if (filters.from && filters.to && filters.departure && filters.passenger && filters.flight_class) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        } else {
            if (filters.from && filters.to && filters.departure && filters.arrival && filters.passenger && filters.flight_class) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        }
    }, [filters]);


    useEffect(() => {
        setFilters((prevFilters) => ({ ...prevFilters, oneWay: true, roundTrip: false }));
    }, []);


    const handleSubmit = () => {
        if (isDisabled) {
            toast.error('Lütfen tüm alanları doldurunuz!')
            setLoading(true)
        }
        else {
            navigate.push(`/search/flight/?from=${filters.from}&to=${filters.to}&departure=${filters.departure}&arrival=${filters.arrival}&passenger=${filters.passenger}&flight_class=${filters.flight_class}&oneWay=${filters.oneWay}&roundTrip=${filters.roundTrip}`)
        }
    }

    return (
        loading
            ? <Loader />
            : <div className={styles.planePanel}>
                <div className={styles.planePanelContainer}>
                    <div className={styles.radioGroup}>
                        <div className={styles.radio}>
                            <input
                                type="radio"
                                id="oneWay"
                                name="trip"
                                checked={filters.oneWay}
                                onChange={() => setFilters({ ...filters, oneWay: true, roundTrip: false })}
                            />
                            <label htmlFor="oneWay">Tek Yön</label>
                        </div>
                        <div className={styles.radio}>
                            <input
                                type="radio"
                                id="roundTrip"
                                name="trip"
                                checked={filters.roundTrip}
                                onChange={() => setFilters({ ...filters, oneWay: false, roundTrip: true })}
                            />
                            <label htmlFor="roundTrip">Gidiş Dönüş</label>
                        </div>
                    </div>
                    <div className={styles.filterGroup}>
                        <div className={styles.inputGroup}>
                            <div className={styles.input}>
                                <Autocomplete
                                    id="departure-autocomplete"
                                    options={allAirports.map((option) => option.name).filter((name) => name !== filters.to)}
                                    onChange={(event, value) => setFilters({ ...filters, from: value })}
                                    renderInput={(params) => <TextField {...params} label="Kalkış" />}
                                />
                            </div>
                            <div className={styles.input}>
                                <Autocomplete
                                    id="arrival-autocomplete"
                                    options={allAirports.map((option) => option.name).filter((name) => name !== filters.from)}
                                    onChange={(event, value) => setFilters({ ...filters, to: value })}
                                    renderInput={(params) => <TextField {...params} label="Varış" />}
                                />
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <div className={styles.input}>
                                <TextField
                                    id="departure-date"
                                    label="Kalkış Tarihi"
                                    type="date"
                                    onChange={(event) => setFilters({ ...filters, departure: event.target.value })}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className={
                                filters.oneWay ? styles.input + ' ' + styles.disabled : styles.input
                            }>
                                <TextField
                                    id="arrival-date"
                                    label="Dönüş Tarihi"
                                    type="date"
                                    onChange={(event) => setFilters({ ...filters, arrival: event.target.value })}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.filterGroup}>
                        <div className={styles.inputGroup}>
                            <div className={styles.input}>
                                <TextField
                                    id="outlined-number"
                                    label="Yolcu Sayısı"
                                    type="number"
                                    variant="outlined"
                                    value={filters.passenger}
                                    onChange={(event) => setFilters({ ...filters, passenger: event.target.value })}
                                />

                            </div>
                            <div className={styles.input}>
                                <Autocomplete
                                    id="cabin-autocomplete"
                                    options={cabines.map((option) => option.name)}
                                    onChange={(event, value) => setFilters({ ...filters, flight_class: value })}
                                    renderInput={(params) => <TextField {...params} label="Kabin Sınıfı" />}
                                />
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <Button
                                text="Uçuş Bul"
                                disabled={isDisabled}
                                className={styles.button}
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default FlightPanel;
