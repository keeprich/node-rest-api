const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config');

const app = express();
// ***********************************************


// ADDING MIDDELWARE BODY PARSER
app.use(cors());

app.use(express.json());


// IMPORTING POST ROUTES
const postsRoutes = require('./routes/posts');

// ADDING THE POSTS ROUTES
app.use('/posts', postsRoutes);



 

// ROUTES

app.get('/', (req, res) => {
res.send('Hello');

});

 
// ***********************************************

// DATABASE CONNECTIONS
mongoose.connect(process.env.DB_URL, () => {
    console.log('Database connected........')
});


const PORT = process.env.PORT || 5000

app.listen(PORT, function(){
    console.log(`Server runing on port: ${PORT}`)
});