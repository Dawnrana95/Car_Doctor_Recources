import mongodbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";


export const DELETE = async (req, { params }) => {

    const { id } = await params;

    const mongodb = await mongodbConnect();
    const cullaction = mongodb.collection('BookService');

    const query = {
        service_id: id
    };


    const res = await cullaction.deleteOne(query)

    return NextResponse.json(res);

}