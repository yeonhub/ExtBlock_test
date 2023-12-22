const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const ExtBlockRouter = require('./routers/ExtBlock.router');


app.use(express.json())
app.use(cors())

app.use('/ExtBlock', ExtBlockRouter)

app.listen(port, () => {
    console.log(`서버실행 ${port}`)
})
