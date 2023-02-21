var express = require('express');
const dotenv = require("dotenv");
dotenv.config();
var app = express();
const Port = process.env.PORT
const mongoose = require('mongoose');
var apisRouter = require('./routes/api');


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apisRouter);


//MongoDb Connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=> console.log("DB Connected Succesfully"))
.catch((err)=> console.log(err))





//Listening Server
app.listen(Port,()=>{
    console.log(`server is running on`, Port)
})
