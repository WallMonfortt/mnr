import { MongoClient } from 'mongodb'
// npm i mongodb

import { MONGO_URI, DATABASE_NAME} from './config'

let connectedClient;

export const connectClient = async () => {
    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME);
    }
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    await client.db(DATABASE_NAME).command({ ping: 1 }); // If this command fails, the connection is closed and an error is thrown in the next operation that interacts with the server.
    console.info("Connected to MongoDB");
    connectedClient = client;
    return connectedClient.db(DATABASE_NAME);
}

export const stopClient = async () => {
    await connectedClient?.close();
}
