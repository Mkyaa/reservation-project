"use client"
import React, { useState } from 'react'

//styles
import styles from './index.module.css'

//formik and yup
import { Formik } from 'formik'
import * as Yup from 'yup'

//components
import Input from '@/shared/Input'
import Button from '@/shared/Button'
import Loader from '@/components/loader'

//api
import { postTicket, postReservation } from '@/api/postData'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { setTicket } from '@/redux/app/auth/authSlice'

//navigate
import { useRouter } from 'next/navigation'


//formik validation schema
const cardSchema = Yup.object({
    name: Yup.string()
        .required('Doldurulması zorunludur')
        .min(3, 'Minimum 3 karakter')
        .max(16, 'Maximum 16 karakter'),
    cardNumber: Yup.string()
        .required('Doldurulması zorunludur')
        .min(16, 'Minimum 16 karakter')
        .max(16, 'Maximum 16 karakter')
        .matches(/^[0-9]+$/, 'Sadece rakam giriniz'),
    expiration: Yup.string()
        .required('Required')
        .min(4, 'Minimum 4 karakter')
        .max(4, 'Maximum 4 karakter')
        .matches(/^[0-9]+$/, 'Sadece rakam giriniz'),
    cvv: Yup.string()
        .required('Required')
        .min(3, 'Minimum 3 karakter')
        .max(3, 'Maximum 3 karakter')
        .matches(/^[0-9]+$/, 'Sadece rakam giriniz'),
})

const PaymentContainer = () => {

    //state
    const [loading, setLoading] = useState(false)

    //redux
    const { user } = useSelector(state => state.auth)
    const { ticket } = useSelector(state => state.auth)
    const { reservation } = useSelector(state => state.auth)

    //dispatch
    const dispatch = useDispatch()

    //navigate
    const navigate = useRouter()

    return (
        loading
            ? <Loader />
            : (
                <Formik
                    initialValues={{
                        name: '',
                        cardNumber: '',
                        expiration: '',
                        cvv: ''
                    }}
                    validationSchema={cardSchema}
                    onSubmit={async (values) => {
                        setLoading(true)
                        if (ticket.type === 'flight') {
                            await postTicket({
                                user,
                                ticket,
                                values
                            })
                        }
                        else if (ticket.type === 'hotel') {
                            await postReservation({
                                user,
                                reservation,
                                values
                            })
                        }
                        setTimeout(() => {
                            setLoading(false)
                            dispatch(setTicket({}))
                            navigate.push('/ticket-result')
                        }, 1000)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <div className={styles.paymentContainer}>
                            <div className={styles.paymentContent}>
                                <form onSubmit={handleSubmit} className={styles.paymentContainerForm}>
                                    <div className={styles.paymentContainerTitle}>
                                        <h1>Ödeme</h1>
                                    </div>
                                    <div className={styles.paymentContainerBody}>
                                        <div className={styles.paymentContainerBodyLeft}>
                                            <div className={styles.paymentContainerBodyLeftContent}>
                                                <div className={styles.paymentContainerBodyLeftContentTitle}>
                                                    <h3>Kart Bilgileri</h3>
                                                </div>
                                                <div className={styles.paymentContainerBodyLeftContentInput}>
                                                    <div className={styles.paymentContainerBodyLeftContentLabel}>
                                                        <label htmlFor="cardNumber">Kart Numarası</label>
                                                        {
                                                            errors.cardNumber && touched.cardNumber && (
                                                                <span>*{errors.cardNumber}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <Input
                                                        placeholder="Kart Numarası"
                                                        type="text"
                                                        name="cardNumber"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.cardNumber}
                                                    />
                                                </div>
                                                <div className={styles.paymentContainerBodyLeftContentInput}>
                                                    <div className={styles.paymentContainerBodyLeftContentLabel}>
                                                        <label htmlFor="name">Kart Üzerindeki İsim</label>
                                                        {
                                                            errors.name && touched.name && (
                                                                <span>*{errors.name}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <Input
                                                        placeholder="Kart Üzerindeki İsim"
                                                        type="text"
                                                        name="name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.name}
                                                    />
                                                </div>
                                                <div className={styles.paymentContainerBodyLeftContentInput}>
                                                    <div className={styles.paymentContainerBodyLeftContentLabel}>
                                                        <label htmlFor="expiration">Son Kullanma Tarihi</label>
                                                        {
                                                            errors.expiration && touched.expiration && (
                                                                <span>*{errors.expiration}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <Input
                                                        placeholder="Son Kullanma Tarihi"
                                                        type="text"
                                                        name="expiration"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.expiration}
                                                    />
                                                </div>
                                                <div className={styles.paymentContainerBodyLeftContentInput}>
                                                    <div className={styles.paymentContainerBodyLeftContentLabel}>
                                                        <label htmlFor="cvv">CVV</label>
                                                        {
                                                            errors.cvv && touched.cvv && (
                                                                <span>*{errors.cvv}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <Input
                                                        placeholder="CVV"
                                                        type="text"
                                                        name="cvv"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.cvv}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.paymentContainerBodyRight}>
                                            <div className={styles.paymentContainerBodyRightContent}>
                                                <div className={styles.paymentContainerBodyRightContentTitle}>
                                                    <h3>Ödeme Bilgileri</h3>
                                                </div>
                                                <div className={styles.paymentContainerBodyRightContentInfo}>
                                                    <div className={styles.paymentContainerBodyRightContentInfoItem}>
                                                        <span>Kart Numarası</span>
                                                        <p>{
                                                            values.cardNumber.split('').map((item, index) => {
                                                                if (index % 4 === 0 && index !== 0) {
                                                                    return `-${item}`
                                                                }
                                                                return item
                                                            })
                                                        }</p>
                                                    </div>
                                                    <div className={styles.paymentContainerBodyRightContentInfoItem}>
                                                        <span>Kart Üzerindeki İsim</span>
                                                        <p>{values.name}</p>
                                                    </div>
                                                    <div className={styles.paymentContainerBodyRightContentInfoItem}>
                                                        <span>Son Kullanma Tarihi</span>
                                                        <p>{
                                                            values.expiration.split('').map((item, index) => {
                                                                if (index === 2) {
                                                                    return `/${item}`
                                                                }
                                                                return item
                                                            })
                                                        }</p>
                                                    </div>
                                                    <div className={styles.paymentContainerBodyRightContentInfoItem}>
                                                        <span>CVV</span>
                                                        <p>{values.cvv}</p>
                                                    </div>
                                                </div>
                                                <div className={styles.paymentContainerBodyRightContentButton}>
                                                    <Button
                                                        type="submit"
                                                        text="Ödeme Yap"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </Formik>
            )
    )
}

export default PaymentContainer