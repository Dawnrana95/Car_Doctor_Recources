import mongodbConnect from '@/lib/dbconnect';
import Link from 'next/link';
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";


const ServiceSesion = async () => {

    const mongodbCunnact = await mongodbConnect();
    const callaction = await mongodbCunnact.collection("data")
    const data = await callaction.find({}).toArray()


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:w-full p-5 '>
            {
                data.map((d, index) => <div key={index} className="card bg-base-100 w-96 shadow-2xl my-5">
                    <figure className="px-10 pt-10">
                        <img
                            src={d.img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-red-500">Price :- {d.price}</h2>
                        <div className='grid lg:grid-cols-2 lg:items-center'>
                            <h2 className="card-title">{d.title}</h2>
                            <Link href={`/ServiceSesion/${d._id}`}><AiOutlineArrowRight className='justify-self-end bg-amber-50 w-10 h-10' /></Link>
                        </div>

                    </div>
                </div>)
            }
        </div>
    )
}

export default ServiceSesion