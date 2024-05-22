import express from 'express'
import { router } from './routes/index.js'

const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use("/", router)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})