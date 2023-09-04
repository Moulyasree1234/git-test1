var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello welcome to network based application development pratice session!');
  res.end();
}).listen(3000, function(){
 console.log("Server running at port 3000");
});
