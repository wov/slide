var express = require('express');
var app = express();

//limit to 2mb
app.use(express.limit('16mb'));
app.use(express.bodyParser());
app.use(express.methodOverride());


app.set('view engine','jade');
app.set('views',__dirname + '/views');
app.set('view options', { layout: false });

app.use(express.static( __dirname + '/www'));
app.use(app.router);

/**
 * 首页
*/
app.get('/',function(req,res){
	console.log('get index page!');
	var option = {
		title : 'hello nodejs - 1haodian.com',
		content : 'this is main page'
	};
	res.render('index',option);	
});

/**
 * 首页
*/
app.get('/first',function(req,res){
	console.log('get index page!');
	var option = {
		title : 'our first page - 1haodian.com',
		content : 'so we come to here!!'
	};
	res.render('index',option);	
});




/**
 * 404页面
*/
app.get('*', function(req, res) {  
	console.log('Not Found!');
	res.status(404).render('404');
});  


app.listen(9000);
console.log('serve start at 9000');


