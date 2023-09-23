// IMPORTS 
const express = require('express');
const authRouter = require("./routes/auth");
const mongoose = require('mongoose');

const adminRoute = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

//INIT
const PORT=3000;
const app = express();
const DB ="mongodb+srv://Harshit:Harry8439@cluster0.gyeafry.mongodb.net/?retryWrites=true&w=majority";


//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRoute);
app.use(productRouter);
app.use(userRouter);

//connections
mongoose.connect(DB).then(()=>{
    console.log('Connection Successful');
}).catch((e)=>{
    console.log(e);
});

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Connected at port $(PORT)`);
});