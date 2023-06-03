import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoute from "./routes/userRoute.js"
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT

const app = express()
// in local, other one is using atlas
// mongoose.connect("mongodb://127.0.0.1:27017/todoList", {
mongoose.connect("mongodb+srv://johanes:123@cluster0.doz2i6i.mongodb.net/todoList?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
const db = mongoose.connection

db.on("error", (error) => {console.log(error)})
db.once("open", () => { console.log("Database connected")})

app.use(cors())
app.use(express.json())
app.use(userRoute)

app.listen(PORT, () => {
    console.log("server up and running...")
})