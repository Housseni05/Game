const http = require('http');
const server = http.createServer((req, res)=>{
	res.end("Bienvenue !");

});
server.listen(3000,()=>{
	console.log("Serveur démarré sur http://localhost:3000");
});
