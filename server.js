const express = require('express');

const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config(); 

//connection to mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));


app.use(cors());
app.use(express.json());

//Import Routes
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on port 5000');
});