const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")
dotenv.config();

const PORT = process.env.PORT || 5000


app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect(`mongodb+srv://diwediabhay26:${process.env.MONGO_PASSWORD}@eshop.lzwps.mongodb.net/`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})