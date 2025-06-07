const express = require('express')
const app = express()
let port = 3000;

const routing = require('./router/routing');

app.get('', (req, res)=>{
    res.send(`<h1>Wellcome, this is from res!</h1>`)
})

app.use('', routing);
app.listen(port, ()=> {
    try {
        console.log(`Server is running on http://localhost:${port}`)
    } catch (error) {
        console.error('Server Error : ' + error);
    }
})