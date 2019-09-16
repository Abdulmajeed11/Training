const express = require('express'),
    path = require('path'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');
    socket = require("socket.io");

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '0000',
    port: 3306,
    database: 'nodejs2'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
server= app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});


var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

});