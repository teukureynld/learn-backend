// 

const express = require('express')
const routerContact = express.Router()

routerContact.get('/', (req, res)=>{
    res.send(`<h2>Getting info from contact pages.</h2>`)
})

module.exports = routerContact;
