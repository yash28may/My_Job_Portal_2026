import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./Routes/user.route.js"
import companyRoute from "./Routes/company.route.js"
dotenv.config({})

const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const corsOption = {
    origin:'https//localhost:5173',
    Credential:true
}
app.use(cors(corsOption))


const PORT = process.env.PORT || 3000;

// all api's

app.use('/api/v1/user',userRoute)
app.use('/api/v1/company',companyRoute)

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running on port ${PORT}`)
})