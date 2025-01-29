const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
PORT = 3000 || process.env.PORT
app.get('/', (req, res) => {
    try {
        const now = new Date().toISOString();

        const data = {
            email: "femisolomon15@gmail.com",
            current_datetime: now,
            github_url: "https://github.com/Fave7903/hngi12-backend"
          }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            err: "An errror occured"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})