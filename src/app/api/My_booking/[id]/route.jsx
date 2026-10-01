// import { authOptions } from "@/lib/authoption";
import mongodbConnect from "@/lib/dbconnect"
// import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const { id } = await params;

    const mongodb = await mongodbConnect();
    const collection = mongodb.collection('BookService')

    const quary = { service_id: id }
    const singalBooking = await collection.findOne(quary)




    return NextResponse.json({ singalBooking })
}

export const PATCH = async (req, { params }) => {
    const { id } = await params;

    let body;
    try {
        body = await req.json();
    } catch (err) {
        return NextResponse.json(
            { error: "Invalid or empty JSON body" },
            { status: 400 }
        );
    }

    if (!body || Object.keys(body).length === 0) {
        return NextResponse.json(
            { error: "Body is required" },
            { status: 400 }
        );
    }


    const mongodb = await mongodbConnect();
    const collection = mongodb.collection('BookService');

    // const seaction = await getServerSession(authOptions)
    // const user =  seaction?.user?.email;
    // const currantuser = await collection.findOne({email: user})
    
    // if(!currantuser){
    //     return NextResponse.json(
    //         { error: "un authorize accees" },
    //         { status: 400 }
    //     );
    // }

    const quary = { service_id: id };
    const filter = { $set: { ...body } };
    const option = { upsert: true };

    const updatResult = await collection.updateOne(quary, filter, option);

    return NextResponse.json(updatResult);
};