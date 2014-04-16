/**
 * @todo Desafio 1 - Criar um site com 2 páginas internas e 1 de erro, utilizando o esquema de rotas do node.js
 * @author Kaio Cesar <tecnico.kaio@gmail.com>
 * @create_at 2014-04-16 01:00:12
 *
*/

var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
	var caminho = __dirname;
	var arquivo = request.url;
	arquivo = arquivo.replace(/[^A-Za-z]/g,'').toLowerCase();

	if (arquivo=="" || arquivo == "artigo") {
		arquivo = "artigo";
	} else if (arquivo == "contato") {
		arquivo = "contato";
	} else {
		arquivo = "erro";
	}

	fs.readFile(caminho + "/views/"+ arquivo +".html", function(err, html){
		response.writeHeader(200, {"Content-Type":"text/html"});
		response.write(html.toString('utf-8'));
		response.end();
	});

});


server.listen(3000, function(){
	console.log('Run in port 3000');
});