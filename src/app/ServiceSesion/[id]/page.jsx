import mongodbConnect from '@/lib/dbconnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function Ditels({ params }) {
  const id = await params;

  const mongoDB = await mongodbConnect();
  const cullaction = mongoDB.collection("data")
  const singlaData = await cullaction.findOne({ _id: new ObjectId(id) })


  return (

    <div>
      <section className='flex mx-auto'>

        <figure className='flex justify-center w-full relative '>
          <Image src={"/assets/Dynamic.jpg"} width={1320} height={300}
            alt='banner' className="object-cover h-73 top-0 left-0 " />
        </figure>

        <div className='absolute w-full h-full  flex ps-20 pt-20 grident'>
          <h1 className='text-white font-bold text-2xl shadow-2xl'>Service Details</h1>
        </div>

      </section>

      <div className="card mx-auto my-5 bg-base-100 w-96 lg:w-full  shadow-sm">
        <figure>
          <img
            src={singlaData.img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{singlaData.title}</h2>
          <h2 className="card-title text-red-600">Price {singlaData.price}</h2>
          <div className="card-actions ">
            <Link href={`/Checkout/${singlaData._id}`}><button className="btn btn-primary">Book Now</button></Link>
          </div>
          <p>{singlaData.description}</p>

        </div>
      </div>
    </div>

  )
}

export default Ditels