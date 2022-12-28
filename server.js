const fs  = require('fs')
const http = require('http')
const port = 3000

const server = http.createServer(function(req, res){
	console.log('Server initializing......')
	res.writeHead(200, { 'Content-Type': 'text/html/js' })
	fs.readFile('/Users/skumari/Projects/javascript/javascriptPractise/countter/index1.html', function(error, data) {
		console.log("Error");
		if(error){
			res.writeHead('404');
			res.write('Error....: FileNot Found..')
		} else {
			res.write(data)
			console.log("data", data);
		}
		res.end();
	});


});
server.listen(port,function(error) {
	if(error){
		console.log("Something went Wrong")
	} else {
		console.log('server is listioning on port...'+ port )
	}
}
)