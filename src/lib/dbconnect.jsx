import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_DB_URL);

export default async function mongodbConnect() {

    try {

        await client.connect();
        // console.log("You successfully connected to MongoDB!");
        return client.db("Toster");

    } catch (error) {
        console.dir(error);
    }

}