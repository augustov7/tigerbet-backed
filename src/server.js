const express = require('express');
const { append } = require('express/lib/response');

const app = express()

app.use(express.json())

app.get('/',(req,res) => {
    res.send('ok')
})

app.listen(3333);
