// src/libs/mongoClient.js

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, we use a global variable to ensure the MongoDB client is not repeatedly instantiated
  clientPromise = global.clientPromise || client.connect();
  if (process.env.NODE_ENV !== "production") {
    global.clientPromise = clientPromise;
  }
} else {
  // In production mode, it's safe to directly call client.connect()
  clientPromise = client.connect();
}

export default clientPromise;
