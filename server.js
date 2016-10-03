var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/meows',function(req, res, next){
	var meows =[
		'Hello, Welcome',
		'I am feeling good',
		'How are you today',
		'go outside and have '
	];
	res.send(meows);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});