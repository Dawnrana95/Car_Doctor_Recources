'use client'
import React, { useEffect, useState } from 'react'
import Delet from './Delet';
import { useQuery } from '@tanstack/react-query';
import { LiaEdit } from "react-icons/lia";
import Link from 'next/link';


export default function My_booking() {


    const { data: Parcel = [], refetch } = useQuery({
        queryKey: ["Parcel"],
        queryFn: async () => {
            const res = await fetch("https://car-doctor-recources.vercel.app/api/apies");

            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='mx-auto my-5'>
            {Parcel.map((item) => (
                <div key={item._id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex-1">
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-400 text-sm">Service ID: {item.serviceId}</p>
                        <p className="text-gray-400 text-sm">Service Num: {item.service_id}</p>
                        <p className="text-gray-400 text-sm">{item.address}</p>
                        <p className="text-gray-400 text-sm">📞 {item.phone}</p>
                    </div>

                    <div className="text-gray-800 font-medium">${item.amount}</div>
                    <div className="text-gray-600 text-sm">{item.date}</div>

                    <span className="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-md">
                        Pending
                    </span>
                    <Link href={`/My_booking/${item.service_id}`}>
                        <button className="flex items-center bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-md">
                            <LiaEdit />  Edit
                        </button>
                    </Link>
                    <Delet id={item.service_id} refetch={refetch}></Delet>
                </div>
            ))}
        </div>
    )
}
