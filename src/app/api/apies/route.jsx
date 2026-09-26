import { authOptions } from "@/lib/authoption";
import mongodbConnect from "@/lib/dbconnect";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export const GET = async (req) => {

    const seaction = await getServerSession(authOptions);
    if (seaction) {

        const email = seaction?.user?.email;
        
        const mongodb = await mongodbConnect();
        const cullaction = mongodb.collection('BookService')

        const res = await cullaction.find({ email }).toArray()
        return NextResponse.json(res)
    }

    return NextResponse.json({})

}