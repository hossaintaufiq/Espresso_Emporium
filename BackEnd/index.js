const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port= process.env.PORT ||5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware 

app.use(express());
app.use(cors());



app.get('/', async(req,res)=>{
    res.send("coffee maker is running on port: " + port);
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})


// mongodb connection 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sxdwbrq.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    // const coffeeCollection = client.db("coffee-collection").collection("coffee")

    // app.post('/coffee', async(req,res)=>{
    //    const newCoffee = req.body;
    //    console.log(newCoffee);

    //    const result = await coffeeCollection.insertOne(newCoffee);
    //    res.send(result);

    // })

    app.post('/coffee', async(req,res)=>{
        const newCoffee = req.body; 
        console.log(newCoffee);
    })









    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


