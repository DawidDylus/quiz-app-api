const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const mongoose = require("mongoose")
const questionRoute = require("./routes/question");

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:3000"],
    })
)
app.use("/api/question", questionRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})