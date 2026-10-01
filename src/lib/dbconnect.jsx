import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_DB_URL_Rana);

export default async function mongodbConnect() {

    try {

        await client.connect();
        return client.db("Toster");

    } catch (error) {
        console.dir(error);
    }

}