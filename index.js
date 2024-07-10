const express= require('express')
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(() => {
        console.log("Db connected");
    })
    .catch ((err) => {
        console.log("Failed", err);
    });


app.use('/api/products', productRoutes)
app.listen(8087, () =>{
    console.log('Server started at port 8087')

})