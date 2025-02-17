const express = require('express')
const morgan = require('morgan')
const questionsRoutes = require('./routes/questions.routes')

const app = express();
app.use(morgan('dev'))
app.use(questionsRoutes);

app.listen(4000)

console.log('listen on port 4000')