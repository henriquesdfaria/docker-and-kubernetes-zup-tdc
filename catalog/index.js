const express = require('express')
global.db = require('./db');
const app = express()
const port = 4000

app.get('/products', async (req, res, next) => {
    try {
        const products = await global.db.findAll();
        res.send(products);
    } catch (err) {
        next(err);
    }
})

app.listen(port, () => {
    console.log(`Catalog App listening at http://localhost:${port}`)
})