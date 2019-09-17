const express = require('express');
const app = express();
var fs = require('fs');

// when there's a post request to /webooks...
app.post('/webhooks', function (req, res) {
	res.write('This is a response.'); 
	res.end();
		
	fs.writeFile("index.html", 'This is a response.', function (err) {
		if (err) throw err;
		console.log("Successfully Written to File.");
	});

});

app.listen(3000, function () {
    console.log('Listening for webhooks on port 3000')
})