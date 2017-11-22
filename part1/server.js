var http = require("http");
var taskList = require("./tasks.js");

console.log(taskList.list);

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write(taskList.list[Math.floor(Math.random() * taskList.list.length)]);
  response.end();
}).listen(3000);