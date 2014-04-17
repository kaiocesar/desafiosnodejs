var express = require('express'),
	load = require('express-load'),
	app = express();


load('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.set('views', __dirname + "/views");
app.set("view engine", 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', routes.index);
//app.get('/users', routes.users.index);
//app.get('/users', users.list);

app.listen(3000, function(){
    console.log("Ntalk no ar...");
});
