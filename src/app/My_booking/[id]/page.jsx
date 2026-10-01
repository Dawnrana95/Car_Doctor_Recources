import Booking_updat from '@/Components/Booking_updat'
import React from 'react'

export default async function page({ params }) {
    const { id } = await params;


    const res = await fetch(`https://car-doctor-recources.vercel.app/api/My_booking/${id}`);
    const data = await res.json()


    return (
        <div>
            <Booking_updat data={data}></Booking_updat>
        </div>
    )
}
