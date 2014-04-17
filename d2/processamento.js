var http = require('http');
var fs = require('fs');
var leituraAsync = require('./leitura_async.js');
var leituraSync = require('./leitura_sync.js');
var arquivo = "./node.exe";
var stream = fs.createWriteStream(arquivo);
var download = "http://nodejs.org/dist/latest/node.exe";

http.get(download, function(res){
	console.log("Fazendo download do Node.js.exe ......");
	res.on("data", function(data){
		stream.write(data);
	});
	res.on('end', function(){
		stream.end();
		console.log("Downlaod finalizado!");
		leituraAsync(arquivo);
		leituraSync(arquivo);
	});
});