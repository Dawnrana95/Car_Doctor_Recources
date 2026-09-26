'use server'

import mongodbConnect from "@/lib/dbconnect";

const mongodbFinddata = async(payload) => {

    const {email,password} = payload;

    const mongodb = await mongodbConnect()
    const database = mongodb.collection('user')
    const user = await database.findOne({email: email, pass: password})

    if(!user) return null;

    return user;
}

export default mongodbFinddata