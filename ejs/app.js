const express= require('express');
const app=express();
const path=require('path');


app.use(express.static(path.join(__dirname,'views')));
app.set("view engine","ejs");
app.use(express.json());



app.get("/data",async(req,res)=>{
    let data=await fetch("https://jsonplaceholder.typicode.com/posts")
    data=await data.json();
    res.render("display",{data:data});
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});