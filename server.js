var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

// Route to send script
app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/public/script.js')
})

// Route to receive messages from client
app.post('/sendMessage',(req,res)=>{
	let message = req.body
	console.log(`Message from client: ${message}`)
	res.end()
})

app.listen('3000')
