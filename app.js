const express=require("express");
const app=express();
const port=process.env.port || 3000;
app.listen(port,()=>{
    console.log(`listening to the server at port ${port}`);
});