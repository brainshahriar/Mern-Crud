import express from 'express'
const route=express.Router();
route.get('/',(request,response)=>{
    response.status(200).json('Hello shahriar');
})
export default route;