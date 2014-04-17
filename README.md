Desafios Node.js
==========================

## Desafio 1

- Crie 3 arquivos HTML: artigo.html, contato.html e erro.html;
- Coloque qualquer conteúdo para cada página html;
- Ao digitar no browser o path:  /artigos deve renderizar artigos.html;
- A regra anterior também se aplica para o arquivo contato.html;
- Ao digitar qualquer path diferente de /artigos e  /contato deve renderizar erro.html;
- A leitura dos arquivos html devem ser assícronas;
- A rota principal "/" deve renderizar artigos.html;

obs: Algumas dicas importantes para elaboração deste exercicio:
1) Utilize o retorno da função url.parse() para capturar o pathname digitado e renderizar o html
correspondente. Se o pathname estive vazio significa que deve renderizar a página de artigos, e se estiver com um valor diferente do nome dos arquivos html, renderize a página de erros.

2) Você também pode inserir conteúdo html na função: response.end(html), economizando linha de código ao não utilizar a função: response.write(html);

3) Utilize a função: fs.exists(html) para verificar se existe o html com o mesmo nome do pathname digitado.


## Desafio 2
benchmark - comparar velocidade de requisição utilizando as duas formas de requisição I/O não bloqueante (Assíncrona)
e bloqueante (Sincrona)

- Crie 3 arquivos (processamento.js, leitura_async.js e leitura_sync.js)
