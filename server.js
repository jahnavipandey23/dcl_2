const express = require('express');
const app= express();

let users=[];
app.use(express.json());

app.get("/", (req,res)=>{
res.send("welcome to my api");
});
app.get("/users",(req,res)=>{
  res.json(users);
})
app.post("/user",(req,res)=>{
const name=req.body.name;
if(!name)
{
  return res.status(400).json({
    message:"Name is Required"
  });
}
users.push({name});
res.status(201).json({
  message: "data received",
  users:users
});
});

app.listen(3000,()=>{
  console.log("app is running");
});
