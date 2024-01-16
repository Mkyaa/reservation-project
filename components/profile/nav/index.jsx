"use client"
import React, { useEffect } from 'react'

//styles
import styles from './index.module.css'

//links
import { profileLinks } from '@/utils/links'

//location
import { usePathname } from 'next/navigation'

//next link
import Link from 'next/link'

const ProfileNav = () => {

    //get location
    const location = usePathname()

    // check location and add active class to the link
    useEffect(() => {
        const allLinks = document.querySelectorAll('nav a')
        allLinks.forEach(link => {
            if (link.id === location) {
                link.classList.add(styles.active)
            } else {
                link.classList.remove(styles.active)
            }
        })
    }, [location])

    return (
        <nav className={styles.profileNav}>
            {
                profileLinks.map((link, index) => (
                    <Link id={link.href} href={link.href} key={index}>{link.text}</Link>
                ))
            }
        </nav>
    )
}

export default ProfileNav