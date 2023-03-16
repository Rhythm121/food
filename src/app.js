const express=require("express");
const path=require("path");
require("./datac/connection");
const user=require("./models/usermessage");
const app = express();
const port = process.env.port || 3000;
const staticpath=path.join(__dirname,"../public");
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));
app.get("/",(req,res)=>{
    res.render("index");})
    app.post("/contact", async(req,res) =>{
        try{
            //res.send(req.body);
            const userData= new user(req.body);
            await userData.save();
            res.status(201).render("index");
        }catch (error){
                res.status(500).send(error);
            }
        })
app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})