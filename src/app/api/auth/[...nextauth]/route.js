// src/pages/api/auth/[...nextauth].js

import clientPromise from "@/libs/mongoClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, uid } = req.body;

      if (!email || !uid) {
        return res.status(400).json({
          success: false,
          error: "Missing email or uid",
        });
      }

      const client = await clientPromise;
      const db = client.db("your-database-name");
      const usersCollection = db.collection("users");

      const existingUser = await usersCollection.findOne({ uid });

      if (!existingUser) {
        await usersCollection.insertOne({
          email,
          uid,
          createdAt: new Date(),
        });
      }

      res.status(200).json({ success: true, message: "User authenticated" });
    } catch (error) {
      console.error("Authentication Error:", error);
      res.status(500).json({
        success: false,
        error: "Internal Server Error",
      });
    }
  } else {
    res.status(405).json({
      success: false,
      error: "Method Not Allowed",
    });
  }
}

