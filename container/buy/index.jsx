"use client"
import React from 'react'

//styles
import styles from "./index.module.css"

//redux 
import { useDispatch, useSelector } from 'react-redux'

//formik & yup
import { Formik } from 'formik'
import * as yup from 'yup'

//components
import Input from '@/shared/Input'
import Button from '@/shared/Button'

//readableDate
import { readableDate, readableTime } from '@/utils/functions'

//next
import { useRouter } from 'next/navigation'

//redux
import { setInformation } from '@/redux/app/auth/authSlice'


//formik validation schema
const buySchema = yup.object().shape({
  email: yup.string().email('Geçerli bir email giriniz').required('Email alanı boş bırakılamaz'),
  phone: yup.string().required('Telefon alanı boş bırakılamaz'),
  name: yup.string().required('İsim alanı boş bırakılamaz'),
  surname: yup.string().required('Soyisim alanı boş bırakılamaz'),
  tc: yup.string().required('TC alanı boş bırakılamaz').min(11, 'TC 11 karakterden oluşmalıdır').max(11, 'TC 11 karakterden oluşmalıdır'),
  gender: yup.string().required('Cinsiyet alanı boş bırakılamaz'),
  birth: yup.string().required('Doğum tarihi alanı boş bırakılamaz')
})


const BuyContainer = () => {

  //redux 
  const { ticket } = useSelector(state => state.auth)
  const { reservation } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  //navigate
  const navigate = useRouter()

  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        phone: '',
        tc: '',
        gender: 'Kadın',
        birth: ''
      }}
      validationSchema={buySchema}
      onSubmit={(values) => {
        dispatch(setInformation(values))
        navigate.push('/payment')
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
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.buyContainer}>
            <div className={styles.buyContent}>
              <div className={styles.buyContainerTitle}>
                <h1>Satın Al</h1>
              </div>
              <div className={styles.buyContainerBody}>
                <div className={styles.buyContainerBodyLeft}>

                  <div className={styles.formContent}>
                    <div className={styles.formTitle}>
                      <h2>İletişim Bilgileri</h2>
                    </div>
                    <div className={styles.formBody}>
                      <div className={styles.formGroup}>
                        <div className={styles.formGroupLabel}>
                          <label htmlFor="email">E-posta Adresi</label>
                          {
                            errors.email && touched.email && (
                              <div className={styles.errorMessage}>*{errors.email}</div>
                            )
                          }
                        </div>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="E-posta adresinizi giriniz"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <div className={styles.formGroupLabel}>
                          <label htmlFor="phone">Telefon</label>
                          {
                            errors.phone && touched.phone && (
                              <div className={styles.errorMessage}>*{errors.phone}</div>
                            )
                          }
                        </div>
                        <Input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Telefon numaranızı giriniz"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formContent}>
                    <div className={styles.formTitle}>
                      <h2>Yolcu Bilgileri</h2>
                    </div>
                    <div className={styles.formBody}>
                      <div className={styles.formGroup}>
                        <div className={styles.formGroupLabel}>
                          <label htmlFor="name">Ad</label>
                          {
                            errors.name && touched.name ? (
                              <div className={styles.errorMessage}>*{errors.name}</div>
                            ) : null
                          }
                        </div>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Adınızı giriniz"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <div className={styles.formGroupLabel}>
                          <label htmlFor="surname">Soyad</label>
                          {
                            errors.surname && touched.surname ? (
                              <div className={styles.errorMessage}>*{errors.surname}</div>
                            ) : null
                          }
                        </div>
                        <Input
                          type="text"
                          name="surname"
                          id="surname"
                          placeholder="Soyadınızı giriniz"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.surname}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <div className={styles.formGroupLabel}>
                          <label htmlFor="tc">TC Kimlik No</label>
                          {
                            errors.tc && touched.tc ? (
                              <div className={styles.errorMessage}>*{errors.tc}</div>
                            ) : null
                          }
                        </div>
                        <Input
                          type="text"
                          name="tc"
                          id="tc"
                          placeholder="TC Kimlik numaranızı giriniz"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tc}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <div className={styles.formGroupLabel}>
                          <label>Cinsiyet</label>
                          {
                            errors.gender ? (
                              <div className={styles.errorMessage}>*{errors.gender}</div>
                            ) : null
                          }
                        </div>
                        <div className={styles.formGroupRadio}>
                          <div className={styles.formGroupRadioItem}>
                            <Input
                              defaultChecked
                              type="radio"
                              name="gender"
                              id="female"
                              value={values.gender === "Kadın"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <label htmlFor="female">Kadın</label>
                          </div>
                          <div className={styles.formGroupRadioItem}>
                            <Input
                              type="radio"
                              name="gender"
                              id="male"
                              value={values.gender === "Erkek"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <label htmlFor="male">Erkek</label>
                          </div>
                        </div>

                      </div>
                      <div className={styles.formGroup}>
                        <div className={styles.formGroupLabel}>
                          <label htmlFor="birth">Doğum Tarihi</label>
                          {
                            errors.birth && touched.birth ? (
                              <div className={styles.errorMessage}>*{errors.birth}</div>
                            ) : null
                          }
                        </div>
                        <Input
                          type="date"
                          name="birth"
                          id="birth"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.birth}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buyContainerBodyRight}>
                  {
                    ticket ? (
                  <div className={styles.buyContainerBodyRightContent}>
                    <div className={styles.buyContainerBodyRightContentTitle}>
                      <h2>Sefer Bilgileri</h2>
                    </div>
                    <div className={styles.buyContainerBodyRightContentBody}>
                      <div className={styles.buyContainerBodyRightContentBodyItem}>
                        <p>Kalkış</p>
                        <span>{ticket.from}</span>
                      </div>
                      <div className={styles.buyContainerBodyRightContentBodyItem}>
                        <p>Varış</p>
                        <span>{ticket.to}</span>
                      </div>
                      <div className={styles.buyContainerBodyRightContentBodyItem}>
                        <p>Tarih</p>
                        <span>{readableDate(ticket.departure)}</span>
                      </div>
                      <div className={styles.buyContainerBodyRightContentBodyItem}>
                        <p>Kişi Sayısı</p>
                        <span>{ticket.passenger}</span>
                      </div>
                      <div className={styles.buyContainerBodyRightContentBodyItem}>
                        <p>Ücret</p>
                        <span>{ticket.price} TL</span>
                      </div>
                    </div>
                    <div className={styles.buyContainerBodyRightButton}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        text="Ödeme Yap"

                      >
                      </Button>
                    </div>
                  </div>
                  ) : null
                  }

                  {
                    reservation ? (
                      <div className={styles.buyContainerBodyRightContent}>
                        <div className={styles.buyContainerBodyRightContentTitle}>
                          <h2>Rezervasyon Bilgileri</h2>
                        </div>
                        <div className={styles.buyContainerBodyRightContentBody}>
                          <div className={styles.buyContainerBodyRightContentBodyItem}>
                            <p>Otel</p>
                            <span>{reservation.name}</span>
                          </div>
                          <div className={styles.buyContainerBodyRightContentBodyItem}>
                            <p>Şehir</p>
                            <span>{reservation.city}</span>
                          </div>
                          <div className={styles.buyContainerBodyRightContentBodyItem}>
                            <p>İlçe</p>
                            <span>{reservation.district}</span>
                          </div>
                          <div className={styles.buyContainerBodyRightContentBodyItem}>
                            <p>Giriş</p>
                            <span>{reservation.check_in}</span>
                          </div>
                          <div className={styles.buyContainerBodyRightContentBodyItem}>
                            <p>Çıkış</p>
                            <span>{reservation.check_out}</span>
                          </div>
                          <div className={styles.buyContainerBodyRightContentBodyItem}>
                            <p>Kişi Sayısı</p>
                            <span>{reservation.passenger}</span>
                          </div>
                          <div className={styles.buyContainerBodyRightContentBodyItem}>
                            <p>Ücret</p>
                            <span>{reservation.price * reservation.passenger} TL</span>
                          </div>
                        </div>
                        <div className={styles.buyContainerBodyRightButton}>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            text="Ödeme Yap"
                            
                          >
                          </Button>
                        </div>
                      </div>
                    ) : null
                  }

                </div>
              </div >
            </div >
          </div >
        </form>
      )
      }
    </Formik>
  )
}

export default BuyContainer