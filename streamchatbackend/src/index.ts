import cors from "cors"
import "dotenv/config"
import express from "express"
import { apiKey } from "./serverClient"


const app = express()
app.use(express.json())
//right now cors expect connection from anywhere but when in development/deployed remove * insert actual url
app.use(cors({ origin: "*" }))

app.get("/", (req, res) => {
    res.json({
        message: "AI Writing Assistant server is running",
        apiKey: apiKey
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
