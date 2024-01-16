import React, { useEffect } from 'react'

//styles
import styles from './index.module.css'

//links
import {links} from '@/utils/links'

//link
import Link from 'next/link'

//hooks
import { usePathname } from 'next/navigation'

const Navbar = () => {

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
    <nav className={styles.navbarContainer}>
      {
        links.map((link, index) => (
          <Link id={link.href} href={link.href} key={index}>{link.text}</Link>
        ))
      }
    </nav>
  )
}

export default Navbar