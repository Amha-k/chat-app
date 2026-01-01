import express from "express"
import { app,server,io } from "./src/config/socket.js"
import auth from "./src/routes/authRoute.js"
import {connectDB} from"./src/config/db.js"
import cookieParser from "cookie-parser"
import profileRoute from"./src/routes/updateprofileRoute.js"
import checkRoute from "./src/routes/checkRoute.js"
import messageRoute from "./src/routes/messageRoute.js"
import cors from"cors"
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/chatapp/auth',auth)
app.use('/api/chatapp/auth/check',checkRoute)
app.use('/api/chatapp/profile',profileRoute)
app.use('/api/chatapp/messages',messageRoute)

connectDB();
server.listen(port, ()=>{
    console.log(`sercer is listenig  port ${port}`)
})