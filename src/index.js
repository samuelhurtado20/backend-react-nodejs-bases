const express =require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
//const { route } = require('./routes/test.route')
//const { json } = require('express/lib/response')
require('./database')
const app = express()

const corsOptions =
{
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.set('Port', 4020)
app.use(morgan('dev'))

//app.use(bodyparser.urlencoded({extended:true})))
app.use(cors());
app.use(bodyparser.json())
//routes
//app.use('/api/test/', require('./routes/test.route'))
app.use('/api/test/', cors(corsOptions), require('./routes/Employee.route'));
//start server
app.listen(app.get('Port'), ()=>{
    console.log('LISTEN on port', app.get('Port'))
})