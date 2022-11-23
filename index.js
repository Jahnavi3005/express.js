const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const emp={id:1,name:"user",position:"CEO"}
const students=require("./data.js")

app.use(cors())

app.get("/",(req,res)=>{
	res.send("Hi,I am a sever")
})

app.get("/user",(req,res)=>{
	res.send("something")
})

app.get("/emp",(req,res)=>{
	res.json(emp)
})

app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("Server is started"))