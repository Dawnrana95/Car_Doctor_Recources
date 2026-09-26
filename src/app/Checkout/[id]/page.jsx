import CheckoutForm from '@/Components/CheckoutForm';
import mongodbConnect from '@/lib/dbconnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function Chackout({ params }) {
    const id = await params;

    const mongoDB = await mongodbConnect();
    const cullaction = mongoDB.collection("data")
    const singlaData = await cullaction.findOne({ _id: new ObjectId(id) })
    const data =  {
        ...singlaData,
        _id: await singlaData._id.toString(),
    };

    return (
        <div>
            <h1>Chackout</h1>
            <CheckoutForm singlaData={data}></CheckoutForm>

        </div>
    )
}
