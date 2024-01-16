import axios from 'axios';

const postTicket = async (data) => {
    try{
        const user = data.user;
        const allUser = await axios.get(process.env.NEXT_PUBLIC_API_AUTH_URL);
        const userExist = allUser.data.find(item => item.email === user.email);
        const actions = userExist.name.actions;
        const tickets = userExist.name.actions.my_tickets;
        const ticketObj = data.ticket;
        ticketObj.id = tickets.length + 1;
        const newActions = {
            ...actions,
            my_tickets: [...tickets, {...ticketObj, status: "active"}],
        };

        const userData = await axios.post(process.env.NEXT_PUBLIC_API_AUTH_URL, {
            name: {
                ...userExist.name,
                actions: newActions,
            }
        });
        return userData.data;
    }
    catch(error){
        console.log(error);
    }
}

const postReservation = async (data) => {
    try{
        const user = data.user;
        const allUser = await axios.get(process.env.NEXT_PUBLIC_API_AUTH_URL);
        const userExist = allUser.data.find(item => item.email === user.email);
        const actions = userExist.name.actions;
        const reservations = userExist.name.actions.my_reservations;
        const reservationObj = data.reservation;
        reservationObj.id = reservations.length + 1;
        const newActions = {
            ...actions,
            my_reservations: [...reservations, {...reservationObj, status: "active"}],
        };

        const userData = await axios.post(process.env.NEXT_PUBLIC_API_AUTH_URL, {
            name: {
                ...userExist.name,
                actions: newActions,
            }
        });
        return userData.data;
    }
    catch(error){
        console.log(error);
    }
}

export {postTicket, postReservation};