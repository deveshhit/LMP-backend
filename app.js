var express = require('express');
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();
var app = express();
const Port = process.env.PORT
const mongoose = require('mongoose');
var apisRouter = require('./routes/api');


//Middleware
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use('/publicfiles',express.static(__dirname + '/publicfiles'))
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
