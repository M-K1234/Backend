const express = require('express')
const bodyParser  = require('body-parser')
const app = express()
const routes = require('./routes/person-routes');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({urlencoded: false}))
app.use(routes)

app.listen(3000, () => {
    console.log('App running')
})
