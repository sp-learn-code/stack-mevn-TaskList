const express = require("express");
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
	.then(db => console.log('DB is connected'))
	.catch(err => console.error(err))

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'))
app.use(express.json())


//routes
app.use('/tasks',require('./routes/task'))


//Static files
app.use(express.static(path.join(__dirname,'public')))

//Server is listening
app.listen(app.get("port"), () => {
	console.log("Serve on port ", app.get("port"));
});


 