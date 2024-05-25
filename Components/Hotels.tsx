import React from 'react'
import HotelCard from './Helper/HotelCard'

const Hotels = () => {
  return (
    <div className = "pt-[5rem] bg-gray-200 pb-[4rem]">
        <h1 className='heading'>Best Hotel</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]'>
            <div><HotelCard name='hotel Nextus' city='Rajhashi' price='$123' image='/images/h1.png' reviewNum='21'/></div>
            <div><HotelCard name='hotel Reactive' city='Daha' price='$243' image='/images/h2.png' reviewNum='35'/></div>
            <div><HotelCard name='hotel City' city='London' price='$332' image='/images/h3.png' reviewNum='65'/></div>
            <div><HotelCard name='hotel Verty' city='Tokio' price='$119' image='/images/h4.png' reviewNum='119'/></div>
            <div><HotelCard name='hotel Mahrama' city='Mumbay' price='$443' image='/images/h5.png' reviewNum='10'/></div>
            <div><HotelCard name='hotel Bestive' city='Dubay' price='$215' image='/images/h6.png' reviewNum='25'/></div>
        </div>
    </div>
  )
}

export default Hotels