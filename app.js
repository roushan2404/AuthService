const express= require('express');
const app=express();
const morgan= require('morgan');
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
mongoose.connect("mongodb://roushan:"
                   +process.env.Mongo_ATLAS_PW +
                   "@authservice-shard-00-00-8rmsj.mongodb.net:27017,authservice-shard-00-01-8rmsj.mongodb.net:27017,authservice-shard-00-02-8rmsj.mongodb.net:27017/test?ssl=true&replicaSet=AuthService-shard-0&authSource=admin&retryWrites=true",
                   {useMongoClient:true
                });

const productRoutes=require('./AuthAPI/Routes/product');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept,Authorization"
    );
    if(req.method==='OPTIONS')
    res.header('Access-Control-Allow-Methods','PUT,PATCH,POST,DELETE,GET');
    return res.status(200).json({});
});
app.use('/products',productRoutes);
module.exports=app;