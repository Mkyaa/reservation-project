'use client'
import React, { useState } from 'react'

//styles
import styles from './index.module.css'

//formik & yup
import { Formik } from 'formik'
import * as Yup from 'yup'

//components
import Input from '@/shared/Input'
import Button from '@/shared/Button'

//next link
import Link from 'next/link'

//login
import { signIn } from '@/api/auth'

//navigate
import { useRouter } from 'next/navigation'

//toast notification
import toast from 'react-hot-toast'

//redux
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/app/auth/authSlice'


//formik validation schema
const loginSchema = Yup.object().shape({
    email: Yup.string().email('Geçersiz e-posta adresi').required('E-posta adresi boş bırakılamaz'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre boş bırakılamaz')
})

const LoginContainer = () => {

    //modal state and functions
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //navigate
    const navigate = useRouter()
    const dispatch = useDispatch()


    //login
    const loginUser = async (values) => {
        try {
            const res = await signIn(values)
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch(setUser(res.data))
            if (res.status === 200) {
                toast.success(res.message)
                navigate.push('/profile')
            }
            else {
                toast.error(res.message)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={styles.loginContainer}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    await loginUser(values)
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
                    <form onSubmit={handleSubmit} className={styles.loginContent}>
                        <div className={styles.loginTitle}>
                            <h2>Giriş Yap</h2>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">E-posta Adresi</label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-posta adresinizi giriniz"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {
                                touched.email && errors.email ? (
                                    <div className={styles.errorMessage}>{errors.email}</div>
                                ) : null
                            }
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Şifre</label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Şifrenizi giriniz"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {
                                touched.password && errors.password ? (
                                    <div className={styles.errorMessage}>{errors.password}</div>
                                ) : null
                            }
                        </div>
                        <div className={styles.formGroup}>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                text="Giriş Yap"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <p className={styles.register}>Hesabınız yok mu?
                                <Link href="/auth/signup" >Kayıt ol</Link>
                            </p>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default LoginContainer