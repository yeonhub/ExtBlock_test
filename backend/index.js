// const express = require('express')
// const app = express()
// const port = 3000
// const cors = require('cors');
// const ExtBlockRouter = require('./routers/ExtBlock.router');


// app.use(express.json())
// app.use(cors())

// app.use('/ExtBlock', ExtBlockRouter)

// app.listen(port, () => {
//     console.log(`서버실행 ${port}`)
// })

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const ExtBlockRouter = require('./routers/ExtBlock.router');

app.use(express.json());
app.use(cors());

app.use('/ExtBlock', ExtBlockRouter);

app.use(express.static(path.join(__dirname, 'view')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.listen(port, () => {
    console.log(`서버실행 ${port}`);
});
