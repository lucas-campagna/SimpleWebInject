// Example of a communication client to server

fetch('http:localhost:3000/sendMessage',{
	method:'post',
	body:'Hello World!'
})
