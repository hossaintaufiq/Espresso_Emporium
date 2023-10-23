const express = require('express');
const cors = require('cors');
const app = express();
const port= process.env.PORT ||5000;

// middleware 

app.use(express());
app.use(cors());


app.get('/', async(req,res)=>{
    res.send("coffee maker is running on port: " + port);
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

