'use server'
import mongodbConnect from "@/lib/dbconnect";


export const mongodbinsartData = async (totalData) => {

    if (!totalData) {
        return { success: false, error: "Pleas enter information" };
    }

    const mongodb = await mongodbConnect()
    const userCullaction = mongodb.collection("BookService");


    const currantBooking = await userCullaction.findOne(totalData)

    if (!currantBooking) {
        const result = await userCullaction.insertOne(totalData);


        return {
            success: true,
            insertedId: result.insertedId.toString(),
            acknowledged: result.acknowledged,
        };
    }




}
