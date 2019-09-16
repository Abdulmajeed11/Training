var app = require('express')();
var server = require('http').createServer(app);
  const path = require('path'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');
    socket = require("socket.io");

var io = require('socket.io')(server);

const customerRoutes = require('../src/routes/customer');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	app.set('views', path.join(__dirname, ''));
   res.render('./index.ejs',{ res: res });
});

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '0000',
    port: 3306,
    database: 'nodejs2'
}, 'single'));
//app.use(express.urlencoded({extended: false}));

app.use('/', customerRoutes);

server.listen(8080)

io.on('connection', function(socket){
  console.log('user connected',socket.id);
});


