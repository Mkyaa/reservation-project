'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from './layout.module.css'

//components
import ProfileNav from '@/components/profile/nav'
import Loader from '@/components/loader'

//hooks
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

//toast
import toast from 'react-hot-toast'

const ProfileLayout = ({ children }) => {

    //state
    const [loading, setLoading] = useState(true)

    //redux state
    const { user } = useSelector(state => state.auth)

    //router
    const navigate = useRouter()

    useEffect(() => {
        if (!user) {
            toast.error("Lütfen giriş yapın")
            navigate.push('/auth/login')
        } else {
            setLoading(false)
        }
    }
        , [user])

    return (

        loading
            ? <Loader />
            : (
                <div className={styles.profileContainer} >
                    <div className={styles.profileContent}>
                        <div className={styles.profileTitle}>
                            <h1>
                                {user?.name} {user?.surname}
                            </h1>
                        </div>
                        <div className={styles.profileNavbar}>
                            <ProfileNav />
                        </div>
                        <div className={styles.profileBody}>
                            {children}
                        </div>
                    </div>
                </div >
            )


    )
}

export default ProfileLayout