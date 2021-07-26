const { readFile } = require('fs')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    readFile("./index.html", "utf-8", (err, html) => {
        res.send(html)
    })
})

app.listen(80)