var app = require('express')();
var server = require('http').createServer(app);

var io = require('socket.io')(server);


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   res.render('../index.ejs');
});

io.on('connection', function(socket){
  console.log('user connected',socket.id);
});

// app.use(function(req, res, next){
//     res.setHeader('Content-Type', 'text/plain');
//     res.status(404).send('Page not found !')
// });

server.listen(8080)