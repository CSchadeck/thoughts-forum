const express = require("express")
const app = express()
const cors = require("cors")
app.use(
    cors({
        origin: "*",
       credentials: true,
       methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],

    })
)

app.listen(3000)