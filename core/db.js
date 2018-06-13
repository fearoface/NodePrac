var sqlDb = require("../node_modules/mysql");
var settings = require("../settings.js");
var http = require("http");

http.createServer(function(req,res){

		var con = sqlDb.createConnection(settings.dbConfig);
		con.connect(function(err) {
  			if (err) throw err;
  			console.log("Connected!");
  		res.writeHead(200,{});
  		res.end("Established connection");	
});

		con.end();

}).listen(3000);


// var executeSql = function (sql,callback) {
// 		var connection = sqlDb.createConnection(settings.dbConfig);
// 		connection.connect()
// 		.then(function(){
// 			console.log("Successfully Connected");
// 		})
// 		.catch(function(err){
// 			console.log(err);
// 			callback(null,err);
// 		});
// };