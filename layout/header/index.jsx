'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//components
import Navbar from '@/components/navbar'
import Button from '@/shared/Button'
import MobileNavbar from '@/components/navbar/mobileNavbar'
import Loader from '@/components/loader'

//react-icons
import { FaPhone } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from 'react-icons/md'

//next components
import Link from 'next/link'
import { useRouter } from 'next/navigation'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/redux/app/auth/authSlice'

//toast notification
import toast from 'react-hot-toast'


const Header = () => {

  //state
  const [headerBackground, setHeaderBackground] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loading, setLoading] = useState(false)

  //redux
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  //navigate
  const navigate = useRouter()

  //change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const newBackground = offset > 0 ? true : false;
      setHeaderBackground(newBackground);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //logout
  const logout = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      toast.success("Çıkış yapıldı");
      navigate.push('/auth/login');
      dispatch(setUser(null));
      localStorage.removeItem('user');
      setMobileMenu(false);
    } catch (error) {
      toast.error("Çıkış yapılırken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  }

  //close mobile menu
  const closeMobileMenu = () => {
    setMobileMenu(false)
  }

  return (

    loading
      ? <Loader />
      : <header className={
        headerBackground
          ? styles.headerContainer + ' ' + styles.headerBackground
          : styles.headerContainer
      }>
        <div className={styles.headerTop}>
          <div className={styles.telephoneBox}>
            <FaPhone />
            <p>0850 000 00 00</p>
          </div>
          <div className={styles.emailBox}>
            <IoMdMail />
            <p>
              <a href="mailto:kayamert@live.com">kayamert@live.com  </a>
            </p>
          </div>
        </div>
        <div className={styles.headerBottom}>
          {/* MENU */}
          <>
            <div
            onClick={() => navigate.push('/')}
            className={
              headerBackground
                ? styles.headerLogo + ' ' + styles.headerBackground
                : styles.headerLogo
            }>
              <h1 className={styles.headerLogoText}>Kplus</h1>
              <h2 className={styles.headerLogoSubText}>Travel</h2>
            </div>
            <Navbar />
            <div className={styles.loginBox}>
              {
                user
                  ? <div className={styles.authBox}>
                    <Link 
                    href="/profile" 
                    onClick={closeMobileMenu}
                    >Profilim</Link>
                    <Button
                      text="Çıkış Yap"
                      onClick={logout}
                    />
                  </div>
                  : <Link 
                  href="/auth/login"
                  onClick={closeMobileMenu}
                  >Giriş Yap</Link>

              }
            </div>
          </>
          {/* MOBILE */}
          <>
            <RxHamburgerMenu
              className={styles.mobileMenuIcon}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
            <div className={mobileMenu ? styles.mobileMenuActive : styles.mobileMenu}>
              <div className={styles.mobileMenuContainer}>
                <MdClose className={styles.mobileMenuCloseIcon} onClick={() => setMobileMenu(!mobileMenu)} />
                <div className={styles.mobileMenuList}>
                  <MobileNavbar closeMobileMenu={closeMobileMenu} />
                  <div className={styles.mobileLoginBox}>
                    {
                      user
                        ? <div className={styles.authMobileBox}>
                          <Link href="/profile">Profilim</Link>
                          <Button
                            text="Çıkış Yap"
                            onClick={logout}
                          />
                        </div>
                        : <Link 
                        href="/auth/login"
                        onClick={closeMobileMenu}
                        >Giriş Yap</Link>

                    }
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </header>

  )
}

export default Header