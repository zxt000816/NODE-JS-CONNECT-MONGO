var { MongoClient } = require('mongodb');

const User = 'yifan';
const Password = '138156';
const Host = '127.0.0.1';
const Port = '27017';

const uri = `mongodb://${User}:${Password}@${Host}:${Port}/`
const client = new MongoClient(uri);

console.log(uri);

async function run() {
    try {

        await client.connect();

        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
        
    } finally {
        await client.close();
    }
}

async function InsertOne() {
    try {
        await client.connect();
        const collection = client.db("yifan_test").collection("person");
        const result = await collection.insertOne({ "name": "yifan" });
        console.log(result);
    } finally {
        await client.close();
    }
}

async function InsertMany() {
    try {
        await client.connect();
        const collection = client.db("yifan_test").collection("person");
        const result = await collection.insertMany([{ "name": "yifan" }, { "name": "yifan" }]);
        console.log(result);
    } finally {
        await client.close();
    }
}

async function FindOne() {
    try {
        await client.connect();
        const collection = client.db("yifan_test").collection("person");
        const result = await collection.findOne({ "name": "yifan" });
        console.log(result);
    } finally {
        await client.close();
    }
}

async function FindMany() {
    try {
        await client.connect();
        const collection = client.db("yifan_test").collection("person");
        const result = await collection.find({ "name": "yifan" }).toArray();
        console.log(result);
    } finally {
        await client.close();
    }
}

async function UpdateOne() {
    try {
        await client.connect();
        const collection = client.db("yifan_test").collection("person");
        const result = await collection.updateOne({ "name": "yifan" }, { $set: { "name": "yifan" } });
        console.log(result);
    } finally {
        await client.close();
    }
}

async function UpdateMany() {
    try {
        await client.connect();
        const collection = client.db("yifan_test").collection("person");
        const result = await collection.updateMany({ "name": "yifan" }, { $set: { "name": "yifan" } });
        console.log(result);
    } finally {
        await client.close();
    }
}

async function DeleteOne() {
    try {
        await client.connect();
        const collection = client.db("yifan_test").collection("person");
        const result = await collection.deleteOne({ "name": "yifan" });
        console.log(result);
    } finally {
        await client.close();
    }
}

async function DeleteMany() {
    try {
        await client.connect();
        const collection = client.db("yifan_test").collection("person");
        const result = await collection.deleteMany({ "name": "yifan" });
        console.log(result);
    } finally {
        await client.close();
    }
}

async function main() {
    await InsertMany()
    await FindMany();
}

main().catch(console.error);