// const about  = ()=> {
//     return (<h2>Test about</h2>)
// }
const express = require('express')
const aboutRouter = express.Router() 
aboutRouter.get('/', (req, res)=>{
    res.send(`<h2>Getting info from about pages.</h2>`)
})

module.exports = aboutRouter
