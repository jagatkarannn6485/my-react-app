// netlify/functions/saveData.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://jagatkaransingh:admin1234@cluster.7suqy.mongodb.net/'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const data = JSON.parse(event.body);

    try {
        await client.connect();
        const database = client.db('news'); // Replace with your database name
        const collection = database.collection('messages'); // Replace with your collection name

        const result = await collection.insertOne(data);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data saved successfully!', id: result.insertedId }),
        };
    } catch (error) {
        console.error('Error inserting data:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to save data' }),
        };
    } finally {
        await client.close();
    }
};