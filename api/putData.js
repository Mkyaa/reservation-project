import axios from "axios";

export const cancelReservationApi = async (email, id, actions) => {
    const cancelObj = actions
    try {
        const getUser = await axios.get(process.env.NEXT_PUBLIC_API_AUTH_URL);
        const user = getUser.data.find((user) => user.name.email === email);
        const actions = user.name.actions;
        const cancels = user.name.actions.my_cancels;
        cancelObj.id = cancels.length + 1;
        const reservations = user.name.actions.my_reservations.filter((reservation) => reservation.id !== id);
        
        const newActions = {
            ...actions,
            my_reservations: reservations,
            my_cancels: [...cancels, cancelObj],
        };

        const { data } = await axios.put(process.env.NEXT_PUBLIC_API_AUTH_URL + "/" + user.id, {
            name: {
                ...user.name,
                actions: newActions,
            }
        });
        return data;
    }
    catch (error) {
        console.log(error);
    }
};


export const cancelTicketApi = async (email, id, actions) => {
    const cancelObj = actions
    try {
        const getUser = await axios.get(process.env.NEXT_PUBLIC_API_AUTH_URL);
        const user = getUser.data.find((user) => user.name.email === email);
        const actions = user.name.actions;
        const cancels = user.name.actions.my_cancels;
        cancelObj.id = cancels.length + 1;
        const tickets = user.name.actions.my_tickets.filter((ticket) => ticket.id !== id);
        
        const newActions = {
            ...actions,
            my_tickets: tickets,
            my_cancels: [...cancels, cancelObj],
        };

        const { data } = await axios.put(process.env.NEXT_PUBLIC_API_AUTH_URL + "/" + user.id, {
            name: {
                ...user.name,
                actions: newActions,
            }
        });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}