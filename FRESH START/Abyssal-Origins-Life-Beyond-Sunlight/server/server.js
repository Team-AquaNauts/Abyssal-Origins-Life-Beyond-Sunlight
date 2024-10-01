import express from "express"
import bodyParser from "body-parser";

const app=express();

const PORT=5000;

app.use(bodyParser.urlencoded({extended:false}));

app.listen(PORT,()=>{
    console.log(`listening on Port:${PORT} `);
})

app.get("/hello",(req,res)=>{
    console.log("endpoint is hit");
    res.send("Hello from , the backend ");
    
})