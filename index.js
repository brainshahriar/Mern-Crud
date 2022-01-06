import express from 'express'
import mongoose from 'mongoose'

const app=express();
const route=express.Router();

route.get('/',(request,response)=>{
    response.status(200).json('Hello shahriar');
})
app.use('/users',route);

const PORT = 9000;
const URL='mongodb+srv://shahriar:shahriar50@crud.ccvp1.mongodb.net/PROJECT0?retryWrites=true&w=majority';

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
}).catch(error=>{
    console.log('Error:',error.message);
})
