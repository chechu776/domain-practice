import { MongoClient } from "mongodb";

// Replace with your MongoDB URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect(); // connect to MongoDB
    console.log("✅ Connected successfully to MongoDB");

    const db = client.db("ecommerce"); // select database
    const users = db.collection("users"); // select collection

    // Insert a document
    await users.insertOne({ name: "Alice", age: 25 });

    // Find a document
    const user = await users.findOne({ name: "Alice" });
    console.log("Found:", user);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close(); // close connection
  }
}

run();
