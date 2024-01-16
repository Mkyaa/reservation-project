import React from 'react'

//components
import HotelDetailContainer from '@/container/hotel-detail'

const OtelDetails = ({params}) => {
  return (
    <HotelDetailContainer id={params.id}/>
  )
}

export default OtelDetails