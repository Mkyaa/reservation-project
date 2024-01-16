import axios from 'axios'

// getTickets
export const getActionsApi = async (email) => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_AUTH_URL) 
    const user = res.data.filter((user) => user.name.email === email)
    const actions = user[0].name.actions
    return actions
}

// getFlights
export const getFlightsApi = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_FLIGHT_URL)
    const flights = res.data
    return flights
}

// getHotels
export const getHotelsApi = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_HOTEL_URL)
    const hotels = res.data
    return hotels
}

// getBuses
export const getBusesApi = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_BUS_URL)
    const buses = res.data
    return buses
}