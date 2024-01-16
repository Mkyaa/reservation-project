'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//formik & yup
import { Formik } from 'formik'
import * as Yup from 'yup'

//components
import Input from '@/shared/Input'
import Button from '@/shared/Button'

//material-ui
import { Box, Checkbox, Modal, Typography } from '@mui/material'

//utils
import { kvkkMetni } from '@/utils/data'

//next link
import Link from 'next/link'

//signup
import { signUp } from '@/api/auth'

//toast notification
import toast from 'react-hot-toast'

//navigate
import { useRouter } from 'next/navigation'


//styles for modal
const style = {
    width: '80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #ccc',
    boxShadow: 24,
    p: 4,
};

//label for checkbox
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


//formik validation schema
const signupSchema = Yup.object().shape({
    name: Yup.string().required('İsim boş bırakılamaz'),
    surname: Yup.string().required('Soyisim boş bırakılamaz'),
    email: Yup.string().email('Geçersiz e-posta adresi').required('E-posta adresi boş bırakılamaz'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre boş bırakılamaz'),
    kvkk: Yup.boolean().oneOf([true], 'KVKK ve Gizlilik Politikası okunup kabul edilmelidir')
})

const SignupContainer = () => {

    //modal state and functions
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //navigate
    const navigate = useRouter()

    //signUp
    const signUpUser = async (values) => {
        try {
            const res = await signUp(values)
            console.log(res)
            toast.success('Kayıt başarılı, giriş sayfasına yönlendiriliyorsunuz.')
            setTimeout(() => {
                navigate.push('/auth/login')
            }, 2000)
            }
        catch (error) {
                toast.error('Kayıt başarısız')
            }
        }


    return (
            <div className={styles.signupContainer}>
                <Formik
                    initialValues={{ 
                        name: '', 
                        surname: '', 
                        email: '', 
                        password: '', 
                        kvkk: false, 
                    }}
                    validationSchema={signupSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await signUpUser(values)
                        setSubmitting(false)
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
                        <form onSubmit={handleSubmit} className={styles.signupContent}>
                            <div className={styles.signupTitle}>
                                <h2>Kayıt Ol</h2>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">İsim</label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="İsminizi giriniz"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {
                                    errors.name && touched.name && (
                                        <div className={styles.errorMessage}>{errors.name}</div>
                                    )
                                }
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="surname">Soyisim</label>
                                <Input
                                    type="text"
                                    name="surname"
                                    placeholder="Soyismini giriniz"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.surname}
                                />
                                {
                                    errors.surname && touched.surname && (
                                        <div className={styles.errorMessage}>{errors.surname}</div>
                                    )
                                }
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">E-posta Adresi</label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="E-posta adresinizi giriniz"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {
                                    errors.email && touched.email && (
                                        <div className={styles.errorMessage}>{errors.email}</div>
                                    )
                                }
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="password">Şifre</label>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Şifrenizi giriniz"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {
                                    errors.password && touched.password && (
                                        <div className={styles.errorMessage}>{errors.password}</div>
                                    )
                                }
                            </div>
                            <div className={styles.formGroup}>
                                <div className={styles.checkboxGroup}>
                                    <Checkbox
                                        {...label}
                                        color="default"
                                        id="kvkk"
                                        name="kvkk"
                                        onChange={handleChange}
                                        value={values.kvkk}
                                    />
                                    <label htmlFor="kvkk"><p onClick={handleOpen}>KVKK ve Gizlilik Politikası</p>'nı okudum ve kabul ediyorum.</label>
                                    {
                                        errors.kvkk && touched.kvkk && (
                                            <div className={styles.errorMessage}>{errors.kvkk}</div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    text="Kayıt Ol"
                                />
                            </div>
                            <div className={styles.loginLink}>
                                <p>Zaten üye misiniz? <Link href="/auth/login">Giriş Yap</Link></p>
                            </div>
                        </form>
                    )}
                </Formik>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            KVKK ve Gizlilik Politikası
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {kvkkMetni.text}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        )
    }

    export default SignupContainer