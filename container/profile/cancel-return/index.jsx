'use client'
import React, { useEffect, useState } from 'react';

//styles
import styles from './index.module.css';

//api
import { getActionsApi } from '@/api/getData';

//redux
import { useSelector } from 'react-redux';

//components
import TicketCard from '@/components/profile/ticketCard';
import ReservationCard from '@/components/profile/reservationCard';
import NoData from '@/components/profile/noData';
import Loader from '@/components/loader';

//mui
import { Box, Modal, Typography } from '@mui/material';

//utils
import {  iadeKosullari } from '@/utils/data';


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

const CancelReturnContainer = () => {

  //state
  const [active, setActive] = useState('flight');
  const [cancelTickets, setCancelTickets] = useState([]);
  const [flightTickets, setFlightTickets] = useState([]);
  const [busTickets, setBusTickets] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //redux
  const { user } = useSelector((state) => state.auth);

  //handle panel change
  const handlePanelChange = (key) => {
    setActive(key);
  };

  //get canceled tickets
  const getCanceledTickets = async () => {
    setLoading(true);
    try {
      const res = await getActionsApi(user.email);
      setCancelTickets(res.my_cancels);
      setFlightTickets(res.my_cancels.filter((ticket) => ticket.type === 'flight'));
      setBusTickets(res.my_cancels.filter((ticket) => ticket.type === 'bus'));
      setReservation(res.my_cancels.filter((ticket) => ticket.type === 'hotel'));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  //get canceled tickets
  useEffect(() => {
    getCanceledTickets();
  }
    , []);

  return (
    <div className={styles.cancelContainer}>
      <div className={styles.cancelFilter}>
        <div className={styles.cancelFilterTicketItem}>
          <span
            id="ticket"
            className={
              active === 'flight' || active === 'bus'
                ? styles.active : ""
            }
          >Biletler</span>
          <p
            id="flight"
            className={active === 'flight' ? styles.active : ''}
            onClick={(e) => handlePanelChange(e.target.id)}
          >
            - Uçak
          </p>
          <p
            id="bus"
            className={active === 'bus' ? styles.active : ''}
            onClick={(e) => handlePanelChange(e.target.id)}
          >
            - Otobüs
          </p>
        </div>
        <div className={styles.cancelFilterItem}>
          <p
            id="hotel"
            className={active === 'hotel' ? styles.active : ''}
            onClick={(e) => handlePanelChange(e.target.id)}
          >
            Rezervasyonlar
          </p>
        </div>
        <div className={styles.cancelFilterItem}>
          <p
            onClick={handleOpen}
          >
            İptal ve İade Koşulları
          </p>
        </div>
      </div>
      <div className={styles.ticketList}>
        <div className={styles.ticketListContent}>
          {
            loading
              ? <Loader />
              : active === 'flight' && flightTickets?.length > 0
                ? flightTickets?.map(ticket => (
                  <TicketCard ticket={ticket} />
                ))
                : active === 'bus' && busTickets?.length > 0
                  ? busTickets?.map(ticket => (
                    <TicketCard ticket={ticket} />
                  ))
                  : active === 'hotel' && reservation?.length > 0
                    ? reservation?.map(reserv => (
                      <ReservationCard reserv={reserv} />
                    ))
                    : <NoData text="Henüz iptal işleminiz bulunmamaktadır." />
          }

        </div>
      </div>
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
            {iadeKosullari.text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CancelReturnContainer;
