'use client'
import React, { useState } from 'react'

//styles
import styles from './index.module.css'

//react-icons
import { BiSolidPlaneAlt } from 'react-icons/bi'
import { MdLocalHotel } from 'react-icons/md'
import { IoMdBus } from 'react-icons/io'

//components
import PlanePanel from './tabPanel/flight'
import HotelPanel from './tabPanel/hotel'
import BusPanel from './tabPanel/bus'


const TabGroup = () => {

    //state
    const [activeTab, setActiveTab] = useState('ucak');

    //handle tab click
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className={styles.tabGroupContainer}>
            <div className={styles.tabGroup}>
                <div
                    id="ucak"
                    className={activeTab === 'ucak' ? styles.tab + ' ' + styles.active : styles.tab}
                    onClick={() => handleTabClick('ucak')}
                >
                    <button className={styles.tabButton}>
                        <BiSolidPlaneAlt />
                        <p className={styles.tabText}>Uçak Bileti</p>
                    </button>
                </div>
                <div
                    id="otel"
                    className={activeTab === 'otel' ? styles.tab + ' ' + styles.active : styles.tab}
                    onClick={() => handleTabClick('otel')}
                >
                    <button className={styles.tabButton}>
                        <MdLocalHotel />
                        <p className={styles.tabText}>Otel</p>
                    </button>
                </div>
                <div
                    id="bus"
                    className={activeTab === 'bus' ? styles.tab + ' ' + styles.active : styles.tab}
                    onClick={() => handleTabClick('bus')}
                >
                    <button className={styles.tabButton}>
                        <IoMdBus />
                        <p className={styles.tabText}>Otobüs</p>
                    </button>
                </div>
            </div>
            <div className={styles.tabPanel}>
                {activeTab === 'ucak' && <PlanePanel />}
                {activeTab === 'otel' && <HotelPanel />}
                {activeTab === 'bus' && <BusPanel />}
            </div>
        </div>
    );
};

export default TabGroup;
