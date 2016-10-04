var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

var meows = [
	"Hello, Welcome",
	"I am feeling good",
	"How are you today",	 
];	

app.get('/meows',function(req, res, next){
	
	
	res.send(meows);
});

app.post('/meows',function(req, res, next){
	meows.push(req.body.newMeow);
	console.log(meows.length);
	res.send();
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});