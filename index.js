require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USE}:${process.env.DB_PASS}@cluster0.9njqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const productCollection = client.db('productsDB').collection('products');

    // const userCollection = client.db('productsDB').collection('users');

    app.get('/products', async (req,res)=>{
        const cursor = productCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.get('/products/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await productCollection.findOne(query);
        res.send(result);
    })

    app.post('/products', async(req,res)=>{
        const newProduct = req.body;
        console.log(newProduct);
        const result = await productCollection.insertOne(newProduct);
        res.send(result);
    })

    app.get('/products/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await productCollection.findOne(query);
        res.send(result);
    })

    app.put('/products/:id', async(req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const options = {upsert: true};
        const updatedProduct = req.body;
        const product = {
            $set: {
                name:updatedProduct.name, rating:updatedProduct.rating, category:updatedProduct.category, customization:updatedProduct.customization, userEmail:updatedProduct.userEmail, stockStatus:updatedProduct.stockStatus, price:updatedProduct.price, description:updatedProduct.description, processingTime:updatedProduct.processingTime, userName:updatedProduct.userName, photo:updatedProduct.photo,
            }
        }
        const result = await productCollection.updateOne(filter,product,options);
        res.send(result);
    })

    app.delete('/products/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await productCollection.deleteOne(query);
        res.send(result);
    })

    // users related apis
    // app.get('/users', async(req,res)=>{
    //     const cursor = userCollection.find();
    //     const result = await cursor.toArray();
    //     res.send(result);
    // })

    // app.post('/users', async(req,res)=>{
    //     const newUser = req.body;
    //     console.log('creating new user', newUser);
    //     const result = await userCollection.insertOne(newUser);
    //     res.send(result);
    // })

    
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send('server is running');
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})