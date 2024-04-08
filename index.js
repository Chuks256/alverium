// define required modules 
require("dotenv").config();
let express=require('express')
let app=express();
let cors=require('cors')
let body_parser=require("body-parser")

// define middlewares 
app.use(cors())
app.disable("powered-by-x")
app.use(express.json())
app.use(body_parser.urlencoded({extended:true}))

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile("./public/index.html")
})

app.listen(process.env.PORT || 5000,()=>{
    console.log(`[+] Api server is running @ ${process.env.PORT || 5000}`)
})