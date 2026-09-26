'use server'
import mongodbConnect from "@/lib/dbconnect";

export default async function mongodbPostData(currentUser) {

    const cullaction = await mongodbConnect();
    const userCullaction =  cullaction.collection("user");

    const user = await userCullaction.findOne({ email: currentUser.email })
    
    if (!user) {
        const insartData = await userCullaction.insertOne(currentUser)
        return JSON.stringify(insartData);
    }
    return null;
}